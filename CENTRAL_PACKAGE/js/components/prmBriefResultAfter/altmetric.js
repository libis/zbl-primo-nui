import altmetricHTML from './altmetric.html'

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
