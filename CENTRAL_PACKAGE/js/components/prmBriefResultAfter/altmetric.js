import altmetricHTML from './altmetric.html'

/*
//script needs to be loaded first. Can be put in the $onInit() function
//or better in run method. 
app.run(($templateCache) => {
  Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics.js loaded');
  });
});
*/


class AltMetricController {
  constructor() {
    var self = this;
    let item = self.parentCtrl.parentCtrl.item;

    self.doi = '';
    self.isbn = '';

    if (item && item.pnx && item.pnx.addata) {
      if (item.pnx.addata.doi) {
        self.doi = item.pnx.addata.doi[0];
      }

      if (item.pnx.addata.isbn) {
        self.isbn = item.pnx.addata.isbn[0];
      }
    }
  }
}

export let altmetricConfig = {
  bindings: {parentCtrl: '<'},
  controller: AltMetricController,
  template: altmetricHTML
}
