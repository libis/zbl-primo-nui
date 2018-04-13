import linksHMTL from './links.html'

class LinksController {
  constructor($translate) {
    let self = this;
    self.translate = $translate;

    Primo.user.then(user => {
      self.isOnCampus = user.isOnCampus();
      self.isLoggedIn = user.isLoggedIn();
      self.allFines =  {
        count: user.fines.length,
        sum: (user.fines ? user.fines.map(f => parseFloat(f.finesum)).reduce((p,c)=> p+c, 0) : 0)
      }
    });

    self.linkTypes = {
      'closures': {class: 'idslu-closures', url: 'nui.customizing.idslu.closuresurl', text: 'nui.customizing.idslu.closurestext'},
      'eHelp': {class: 'idslu-e-help', url: 'nui.customizing.idslu.ehelpurl', text: 'nui.customizing.idslu.ehelptext'},
      'externalAccess': {class: 'idslu-access', url: 'nui.customizing.idslu.accesssurl', text: 'nui.customizing.idslu.accesstext'},
      'feedback': {class: 'idslu-feedback', url: 'nui.customizing.idslu.feedbackurl', text: 'nui.customizing.idslu.feedbacktext'},
      'pHelp': {class: 'idslu-p-help', url: 'nui.customizing.idslu.phelpurl', text: 'nui.customizing.idslu.phelptext'},
      'libraries': {class: 'idslu-libraries', url: 'nui.customizing.idslu.librariesurl', text: 'nui.customizing.idslu.librariestext'}
    }
  }

  get onCampus() {
    return this.isOnCampus;
  }

  get loggedIn() {
    return this.isLoggedIn;
  }

  get fines() {
    return this.allFines;
  }

  get linkClass() {
    return this.class || ''; //this.translate.instant(self.linkTypes[this.type].class);
  }

  get linkText() {
    return this.text || ''; //self.translate.instant(self.linkTypes[self.type].text)
  }

  get linkUrl() {
    return this.url || ''; //self.translate.instant(self.linkTypes[self.type].url);
  }
}

LinksController.$inject = ['$translate'];

export let linksConfig = {
  bindings: {
    type: '<',
    class: '@',
    text: '@',
    url: '@'
  },
  controller: LinksController,
  template: linksHMTL
}
