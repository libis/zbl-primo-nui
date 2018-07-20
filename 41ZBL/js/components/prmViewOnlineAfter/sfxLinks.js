import sfxLinksHTML from './sfxLinks.html'
import Helper from '../../primo-explore-dom/js/primo/explore/helper'

class SfxLinksController {
  constructor($scope, $translate) {
    let self = this;
    self.scope = $scope;
    self.translate = $translate;
    
    let containers = Primo.explore.components.get('prm-full-view-service-container');
    if (containers && containers.length > 0) {
      self.item = containers[0].ctrl().item;
    } else {
      self.item = self.parentCtrl.parentCtrl.item;
    }

    self.targets = {};
    Primo.view.then(v => {
      self.ipAddress = v.ip.address;
      self.updateTargetsWhenOpenURLAvailable();
    });
  }

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
        //console.log(self.targetsUrls);
        self.targetsUrls.forEach(targetsUrl => {
          //console.log(targetsUrl);
          Helper.http.get(targetsUrl).then(rawTargets => {
            //console.log("=======> ",rawTargets.data);
            if (rawTargets.data && rawTargets.data.length > 0) {
              let data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
              //console.log(data);
              if (data) {
                self.targets = data;
                //console.log('-----> targets', self.targets);
              }
            }
          });
        });

        let gi = self.item.delivery.GetIt1.filter(f => /^online resource|remote search resource/i.test(f.category.toLowerCase())).map( m => m.links)[0].map(m => {
          let targetName = m.displayText;
          let facility = m.hyperlinkText;
          if (/\$\$E/.test(targetName)){            
            targetName = `fulldisplay.${targetName.match(/\$\$E(.*)/)[1].trim()}`;            
          }

          if(/Campusnetz .*?:<\/b><br ?\/>(.*)/.test(targetName)) {
            targetName = targetName.match(/Campusnetz .*?:<\/b><br ?\/>(.*)/)[1].trim();
          }

          if(/Campusnetz (.*?):/.test(facility)) {
            facility = facility.match(/Campusnetz (.*?):/)[1].trim();
          }

          if(/nicht am campus/i.test(targetName)){
            return null;
          }
          
          return {target_url: m.link, facility: facility, target_name:targetName}
        }).filter(f => f !== null);
        if (gi) {
          
          let data = Object.assign({}, self.targets, self.normalizeTargets(gi));
          self.targets = data;
        }

        watcher();
      }
    });
  }

  normalizeTargets(targets) {
    let self = this;
    let normalizedTargets = {};

    if (targets) {
      targets.reduce((t, c) => {
        let d = t.hasOwnProperty(c.facility) ? t[c.facility] : [];
        c['target_url_proxy'] = this.proxyUrl(c['target_url'], c.facility);
        d.push(c);
        t[c.facility] = d;

        return t;
      }, normalizedTargets);
    }
    return normalizedTargets;
  }

  get targetsUrls() {
    return this.openurl.map(m => (`${this.lookupURL}?type=targets&sourceURL=${encodeURIComponent(m)}&proxySuffix=${encodeURIComponent(this.proxySuffix)}`));
  }

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

  proxyUrl(url, facility) {
    let currentHost = window.location.host;
    let ip = this.ipAddress.split('.')
    let inRange = (ip[0] == '147' && ip[1] == '88' && parseInt(ip[2], 10) >= 207 && parseInt(ip[2], 10) <= 254) ? true : false;

    url = url.replace(/^https:\/\/ezproxy.unilu.chhttp/, 'https://ezproxy.unilu.ch/login?url=http');

    //if (!/ezproxy.unilu.ch/.test(currentHost) && /zhb|uni|ph/.test(facility.toLowerCase()) && !inRange) {
    if (!/ezproxy.unilu.ch/.test(url) && /zhb|uni|ph/.test(facility.toLowerCase()) && !inRange) {
      return `https://ezproxy.unilu.ch/login?url=${url}`
    }
    
    return url;
  }

  get proxySuffix() {
    let currentHost = window.location.host;
    let proxySuffix = '';
    if (currentHost.match(/exlibrisgroup.com/g) != null) {
      proxySuffix = currentHost.replace(/.+\.exlibrisgroup\.com/g, '');
    }

    return proxySuffix;
  }

  get lookupURL() {
    return document.location.protocol + '//primo.advesta.com/index.php';
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