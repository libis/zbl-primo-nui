import sfxLinksHTML from './sfxLinks.html'
import Helper from '../../primo-explore-dom/js/primo/explore/helper'

class SfxLinksController {
  constructor($scope){
    let self = this;
    self.scope = $scope;
    self.item = self.parentCtrl.parentCtrl.item;
    self.targets = {};
    window.lastItem = self.item;
    self.updateTargetsWhenOpenURLAvailable();
  }

  updateTargetsWhenOpenURLAvailable() {
    let self = this;    
    self.scope.$watch(() => {
      try {
        if (self.openurl && self.openurl.length > 0) {
          return self.openurl;
        } else {
          return '';
        }
        
      } catch(e) {
        return '';
      }
    }, (n,o) =>{
      if (n && n.length > 0) {
        Helper.http.get(self.targetsUrl).then(targets => {
          self.targets = self.normalizeTargets(targets.data);
          //console.log(self.targets);
        });
      }
    });    
  }

  normalizeTargets(targets){
    let normalizedTargets = {};

    targets.reduce((t, c)=> {       
      let d = t.hasOwnProperty(c.facility) ? t[c.facility] : [];
      d.push(c);
      t[c.facility] = d;
      return t;
    }, normalizedTargets);

    return normalizedTargets;
  }

  get targetsUrl() {
    return (`${this.lookupURL}?type=targets&sourceURL=${encodeURIComponent(this.openurl)}&proxySuffix=${encodeURIComponent(this.proxySuffix)}`);
  }

  get sfxLinksUrl() {
    return `${this.lookupURL}?type=targets&sourceURL=${encodeURIComponent(this.openurl)}&proxySuffix=${encodeURIComponent(this.proxySuffix)}&noProxy=1`;
  }

  get openurl() {
    let self = this;

    if (self.item && self.item.delivery) {
      let openUrlList = self.item.delivery.link.filter(f => /^openurl/.test(f.displayLabel)).map(m => m.linkURL);
      if (openUrlList.length > 0) {
        return openUrlList[0];
      }
    }

    if (self.item && self.item.linkElement) {
        let openUrlList = self.item.linkElement.links.filter(f => /^openurl/.test(f.displayText)).map(m => m.link);
        if (openUrlList.length > 0) {
          return openUrlList[0];
        }
      
    }

    return '';
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

SfxLinksController.$inject = ['$scope'];

export let sfxLinksConfig = {
  bindings: {parentCtrl: '<'},
  controller: SfxLinksController,
  template: sfxLinksHTML
}
