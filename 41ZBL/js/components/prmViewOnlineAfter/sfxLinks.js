import sfxLinksHTML from './sfxLinks.html'
import Helper from '../../primo-explore-dom/js/primo/explore/helper'

/**
 * Controller class to find and parse sfx resources
 * @class
 */
class SfxLinksController {
  constructor($scope, $translate) {
    let self = this;
    self.scope = $scope;
    self.translate = $translate;
    self.targets = {};
  }

  /**
   * Lifecyle hook for AngularJS
   * Wait for all components are rendered and linked before we lookup and inject the SFX links
   */
  $postLink() {
    let self = this;
    let containers = Primo.explore.components.get('prm-full-view-service-container');
    if (!self.item && containers && containers.length > 0) {
      self.item = containers[containers.length - 1].ctrl().item;
    }

    if (!self.item && angular.element(document.querySelector('prm-full-view-service-container'))) {
      self.item = angular.element(document.querySelector('prm-full-view-service-container')).controller('prm-full-view-service-container').item;
    }

    Primo.view.then(v => {
      self.ipAddress = v.ip.address;
      self.updateTargetsWhenOpenURLAvailable();
    });
  }

  /**
   * Wait for openurl method to find data in item.delivery.link or item.linkElement.links
   * Then extract, resolve and normalize the openURL
   */
  updateTargetsWhenOpenURLAvailable() {
    let self = this;
    let watcher = self.scope.$watch(() => {
      try {
        if (self.openurl && self.openurl.length > 0) {
          return true;
        } else {
          return false;
        }

      } catch (e) {
        return false;
      }
    }, (n, o) => {
      if (n == true) {
        //Resolve target urls extracted from the openURL
        this.resolveAndNormalizeTargetUrls(self);

        //Normalize GetIt1 links REMARK: not sure if we should resolve these if target URLs exist
        this.findGetIt1TargetUrlsAndNormalize(self);

        watcher();
      }
    });
  }

  /**
   * Get GetIt1 urls from self.item.delivery, filter for online or remote resources
   * and normalize the data
   * @param {context} self 
   */
  findGetIt1TargetUrlsAndNormalize(self) {
    let getItData = (self.item.delivery.GetIt1.filter(f => /^online resource|remote search resource/i.test(f.category.toLowerCase()))
        .map(m => m.links)[0] || [])
      .map(m => {
        let targetName = m.displayText;
        //let translatedFacility = `nui.getit_full.${m.hyperlinkText}`;

        let facility = self.item.pnx.display.source.map((m) => {
          let f = m.match(/\$\$V(.*)\$\$O/);
          if (!f) {
            f = m
          } else {
            f = f[1]
          }
          return f;
        }).join(" / ") || '';

        if (/\$\$E/.test(targetName)) {
          targetName = `fulldisplay.${targetName.match(/\$\$E(.*)/)[1].trim()}`;
        }
        if (/Campusnetz .*?:<\/b><br ?\/>(.*)/.test(targetName)) {
          targetName = targetName.match(/Campusnetz .*?:<\/b><br ?\/>(.*)/)[1].trim();
        }
        if (/Campusnetz (.*?):/.test(facility)) {
          facility = facility.match(/Campusnetz (.*?):/)[1].trim();
        }
        if (/nicht am campus/i.test(targetName)) {
          return null;
        }

        return {
          target_url: m.link,
          facility: facility,
          target_name: targetName
        };
      }).filter(f => f !== null);

    if (getItData) {
      getItData.forEach(getIt => {
        if (/sfx/.test(getIt.target_url)) {
          Helper.http.get(lookupURL, {
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            params: {
              ip: self.ipAddress,
              url: getIt.target_url
            }
          }).then(rawTargets => {
            let data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
            if (data) {
              console.log('Adding target link from GetIt1');
              self.targets = data;
            }
          }).catch(e => {
            console.log(e);
          });
        } else {
          let data = Object.assign({}, self.targets, self.normalizeTargets([getIt]));
          if (data) {
            console.log('Adding target link from GetIt1');
            self.targets = data;
          }
        }
      });
    }
  }

  /**
   * Get the targetUrls resolve them and normalize the result
   * @param {context} self 
   */
  resolveAndNormalizeTargetUrls(self) {
    self.targetsUrls.forEach(targetsUrl => {
      Helper.http.get(targetsUrl).then(rawTargets => {
        if (rawTargets.data && rawTargets.data.length > 0) {
          let data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
          if (data) {
            console.log('Adding target link from OpenUrl');
            self.targets = data;
          }
        }
      });
    });
  }

  reClassify(facility, targetName, targetUrl) {
    console.log(targetUrl);
    if (/http:\/\/site.ebrary.com\/lib\/zhbluzern\//.test(targetUrl)) {
      facility = 'ZHB / Uni / PH';
      targetName = 'Ebrary';
      targetUrl = targetUrl;
    } else if (/www.dibizentral.ch/.test(targetUrl)) {
      facility = '';
      targetName = 'DiBiZentral';
      targetUrl = targetUrl;
    //} else if (/univportal.naxosmusiclibrary.com/.test(targetUrl)) {
    } else if (/naxosmusiclibrary.com/.test(targetUrl)) {
      facility = 'HSLU';
      targetName = 'Naxos Music Library';
      targetUrl = targetUrl;
    } else if (/imslp.org/.test(targetUrl)) {
      facility = '';
      targetName = 'International Music Score Library Project';
      targetUrl = targetUrl;
    } else if (/rzblx10.uni-regensburg.de/.test(targetUrl)) {
      facility = 'ZHB / Uni / PH';
      targetName = 'Datenbank-Infosystem';
      targetUrl = targetUrl;
    }

    return {
      target_url: targetUrl,
      facility: facility,
      target_name: targetName
    }
  }

  /**
   * Normalize all targetUrls. 
   * Group them together on facility and create proxy urls
   * @param {arrar of targetUrls} targets 
   */
  normalizeTargets(targets) {
    let self = this;
    let normalizedTargets = {};

    if (targets) {
      targets.reduce((t, c) => {
        c = self.reClassify(c.facility, c.target_name, c.target_url);

        let d = t.hasOwnProperty(c.facility) ? t[c.facility] : [];
        c['target_url_proxy'] = this.proxyUrl(c['target_url'], c.facility);
        d.push(c);
        t[c.facility] = d;

        return t;
      }, normalizedTargets);
    }
    return normalizedTargets;
  }

  /**
   * Prepare for openURL lookup on sfxService from advesta
   */
  get targetsUrls() {
    //return this.openurl.map(m => (`${this.lookupURL}?type=targets&sourceURL=${encodeURIComponent(m)}&proxySuffix=${encodeURIComponent(this.proxySuffix)}`));
    return this.openurl.map(m => (`${this.lookupURL}?ip=${this.ipAddress}&url=${encodeURIComponent(m)}`));
  }

  /**
   * Extract all openURLs from item.delivery.link and item.linkElement.links
   */
  get openurl() {
    let self = this;
    let list = [];
    if (self.item && self.item.delivery) {
      let openUrlList = self.item.delivery.link.filter(f => /^openurl/.test(f.displayLabel)).map(m => m.linkURL);
      if (openUrlList.length > 0) {
        list = list.concat(openUrlList);
      }
    }

    if (self.item && self.item.linkElement) {
      let openUrlList = self.item.linkElement.links.filter(f => /^openurl/.test(f.displayText)).map(m => m.link);
      if (openUrlList.length > 0) {
        list = list.concat(openUrlList);
      }
    }

    return list;
  }

  /**
   * Proxy urls and cleanup in needed.
   * When url belongs to a proxyable facility
   * @param {string} url   
   * @param {string} facility 
   */
  proxyUrl(url, facility) {
    let currentHost = window.location.host;
    let ip = this.ipAddress.split('.')
    let inRange = (ip[0] == '147' && ip[1] == '88' && parseInt(ip[2], 10) >= 207 && parseInt(ip[2], 10) <= 254) ? true : false;

    url = url ? url.replace(/^https:\/\/ezproxy.unilu.chhttp/, 'https://ezproxy.unilu.ch/login?url=http') : '';

    //if (!/ezproxy.unilu.ch/.test(currentHost) && /zhb|uni|ph/.test(facility.toLowerCase()) && !inRange) {
    //if (/zhb|uni|ph/.test(facility.toLowerCase())) {
    if (/zhb|uni|ph/.test(facility.toLowerCase()) && /ezproxy.unilu.ch/.test(currentHost)) {
      return `https://ezproxy.unilu.ch/login?url=${url}`
    }

    if (/zhb|uni|ph/.test(facility.toLowerCase()) && /ezpublic.unilu.ch/.test(currentHost)) {
      return `https://ezpublic.unilu.ch/login?url=${url}`
    }

    return url;
  }

  get lookupURL() {
    return 'https://libis.celik.be'; 
    //return 'http://127.0.0.1:3000';
  }
}

SfxLinksController.$inject = ['$scope', '$translate'];

export let sfxLinksConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SfxLinksController,
  template: sfxLinksHTML
}