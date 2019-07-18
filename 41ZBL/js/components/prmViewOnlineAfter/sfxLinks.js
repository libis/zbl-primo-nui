import sfxLinksHTML from './sfxLinks.html'
import Helper from '../../primo-explore-dom/js/primo/explore/helper'
import 'array-flat-polyfill'

/**
 * Controller class to find and parse sfx resources
 * @class
 */
class SfxLinksController {
  constructor($scope, $translate, $sanitize, $sce, $timeout) {
    let self = this;
    self.scope = $scope;
    self.translate = $translate;
    self.sanitize = $sanitize;
    self.timeout = $timeout;
    self.sce = $sce
    self.targets = {};
    self.reclassifyData = {};
  }

  get lookupURL() {
    return 'https://libis.celik.be';
    //return 'http://147.88.247.124';
    //return 'http://127.0.0.1:3000';
  }

  /**
   * Lifecyle hook for AngularJS
   * Wait for all components to be rendered and linked before we lookup and inject the SFX links
   */
  $onInit() {
    this.timeout(() => {
      let self = this;

      self.item = angular.element(document.querySelector('prm-full-view')).controller('prm-full-view').item;
      Primo.view.then(v => {
        self.ipAddress = v.ip.address;
        self.updateTargetsWhenOpenURLAvailable();
      });
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
        //order is important
        //Normalize GetIt1 links REMARK
        this.findGetIt1TargetUrlsAndNormalize(self);

        //Overwrite GetIt1 resolve target urls extracted from the openURL
        this.resolveAndNormalizeTargetUrls(self);

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

    //process getit 1 data
    let getItData = [];
    if (!Object.keys(self.item.pnx.addata).includes("lad10")) {
      getItData = (self.item.delivery.GetIt1.filter(f => /^online resource|remote search resource/i.test(f.category.toLowerCase()))
        .map(getit => getit.links) || [])
        .map(links => {
          let result = [];

          links.forEach((link, i, a) => {
            // Determine targetName        
            let targetName = link.displayText;
            if (/\$\$E/.test(targetName)) {
              targetName = `fulldisplay.${targetName.match(/\$\$E(.*)/)[1].trim()}`;
            }
            if (/Campusnetz .*?:<\/b><br ?\/>(.*)/.test(targetName)) {
              targetName = targetName.match(/Campusnetz .*?:<\/b><br ?\/>(.*)/)[1].trim();
            }

            if (/nicht am campus/i.test(targetName)) {
              return null;
            }
            // Determine facility
            let facility = self.item.pnx.display.source.map((m) => {
              let f = m.match(/\$\$V(.*)\$\$O/);
              if (!f) {
                f = m
              } else {
                f = f[1]
              }
              return f;
            }).join(" / ") || '';

            result.push({
              facility: facility,
              target_url: link.link,
              target_name: targetName
            }
            );
          });

          return result;
        }).filter(f => f !== null).flat();
    }
    //process linktorsrc data in PNX record
    if (self.item.pnx.links.hasOwnProperty('linktorsrc')) {
      self.item.pnx.links['linktorsrc'].forEach((link, i, a) => {
        let tags = self.makeTags(link);
        let facility = '';

        if (Object.keys(self.item.pnx.addata).includes("lad10")) {
          if (self.item.pnx.addata.lad10.length == 1) {
            facility = self.item.pnx.addata.lad10[0];
          } else {
            self.item.pnx.addata.lad10.forEach((lad, i, a) => {
              if (new RegExp(lad.split(' ')[0], "i").test(link) && facility == "") {
                facility = lad;
              }
            });
          }
        }

        if (facility == '') {
          if (Object.keys(tags).includes('F')) {
            facility = tags.F;
          }
        }

        // If a link exists
        if (Object.keys(tags).includes('U')) {
          let targetUrl = tags.U;
          let targetName = 'unknown';

          //Extract a target name
          // this is the order of importance check E, D, O link with display.source for tagName as a fallback
          if (Object.keys(tags).includes('E')) {
            targetName = `fulldisplay.${tags.E.trim()}`;
          }

          if (Object.keys(tags).includes('D')) {
            targetName = tags.D;
            if (/Campusnetz .*?:<\/b><br ?\/>(.*)/.test(targetName)) {
              targetName = targetName.match(/Campusnetz .*?:<\/b><br ?\/>(.*)/)[1].trim();
            }
          } else if (Object.keys(tags).includes('O')) {
            let localDataSourceName = tags.O;

            targetName = self.item.pnx.display.source.map((m) => {
              let f = self.makeTags(m);
              if (f.O == localDataSourceName) {
                return f.V;
              }
            }).filter(f => {
              return (f !== null && f !== undefined);
            }).join(" / ") || '';
          }

          getItData.push({
            facility: facility,
            target_url: targetUrl,
            target_name: targetName
          });
        }
      });
    }

    if (getItData) {
      getItData.forEach(getIt => {
        if (/sfx/.test(getIt.target_url)) {
          Helper.http.get(this.lookupURL, {
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
          //let data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
          let data = self.normalizeTargets(rawTargets.data);
          if (data) {
            console.log('Adding target link from OpenUrl');
            self.targets = data;
          }
        }
      });
    });
  }

  /**
   * Rewrite metadata according to url
   * @param {String} facility 
   * @param {String} targetName 
   * @param {String} targetUrl 
   */
  reClassify(facility, targetName, targetUrl, coverage) {
    try {
      Object.keys(window.reclassifyData).forEach((c, i, a) => {        
        if (new RegExp(c).test(targetUrl)) {
          facility = window.reclassifyData[c].facility;
          targetName = window.reclassifyData[c].name;
          if (window.reclassifyData[c].hasOwnProperty('url') && window.reclassifyData[c].url.length > 0) {
            targetUrl = window.reclassifyData[c].url;
          }
          //throw BreakException;
        }
      })
    } catch (e) {
      //if (e !== BreakException) 
      throw e;
    }

    return {
      target_url: targetUrl,
      facility: facility,
      target_name: targetName,
      coverage: coverage
    }
  }


  /**
   * Normalize all targetUrls. 
   * Group them together on facility and create proxy urls
   * @param {array of targetUrls} targets 
   */
  normalizeTargets(targets) {
    let self = this;
    let normalizedTargets = {};

    if (targets) {
      targets.reduce((t, c) => {        
        c = self.reClassify(c.facility, c.target_name, c.target_url, c.coverage);
        let d = t.hasOwnProperty(c.facility) ? t[c.facility] : [];        
        c['target_url_proxy'] = self.proxyUrl(c['target_url'], c.facility);
        d.push(c);
        t[c.facility] = d;

        return t;
      }, normalizedTargets);
    }
    //console.log(normalizedTargets);
    return normalizedTargets;
  }

  /**
   * Prepare for openURL lookup on sfxService from advesta
   */
  get targetsUrls() {
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
    if (!facility) {       
      facility = '';
    }
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

  /**
   * find an object in a path a.b.c.d
   * @param {*} object 
   * @param {*} path 
   */
  valueExistsForObjectPath(object, path) {
    //console.log(object, path);
    try {
      let nodes = path.split('.');
      let node = nodes.shift();
      if ((node) && (object) && (object.hasOwnProperty(node))) {
        if (nodes.length > 0) {
          return this.valueExistsForObjectPath(object[node], nodes.join('.'));
        } else {
          if (Object.keys(object[node]).length > 0) {
            return true;
          }
          return false;
          //return object[node];
        }
      } else {
        return false;
        //return undefined;
      }
    } catch (e) {
      console.log(e);
      return false;
      //return undefined
    }
  }

  /**
   * Convert a tag based line into an object
   * @param {*} data 
   */
  makeTags(data) {
    return data.split('$$').filter(f => f.length > 0).reduce((acc, value) => { acc[value.substring(0, 1)] = value.substring(1); return acc }, {});
  }
}

SfxLinksController.$inject = ['$scope', '$translate', '$sanitize', '$sce', '$timeout'];

export let sfxLinksConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SfxLinksController,
  template: sfxLinksHTML
}