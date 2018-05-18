import vScoutHTML from './vScout.html'

class VScoutController {
  constructor($element, $compile, $scope) {
    let self = this;
    self.compile = $compile;
    self.element = $element;
    self.scope = $scope;

    let vScoutWatcher = self.scope.$watch(()=>{

      let el = self.element.parent().parent().find('div').find('div').find('h4');
      window.vscout = self.element.parent().parent();
      if (el && el.length > 0 && 'localName' in el[0]) {
        console.log('------>',el);
        return true
      }
      return false;
    }, (n,o) => {
      if (n != o) {
        let el = self.element.parent().parent().find('div').find('div').find('h4');
        if (el && el.length > 0 && 'localName' in el[0]) {
          console.log('location changed',n,o);

          el[0].append(self.compile('<span>hello</span>')(self.scope));
          vScoutWatcher();
        }

        if (this.parentCtrl.parentCtrl && this.parentCtrl.parentCtrl.location) {
          self.location = this.parentCtrl.parentCtrl.location;
        }
      }
    });


  }
}

VScoutController.$inject = ['$element', '$compile', '$scope'];

export let vScoutConfig = {
  bindings: {parentCtrl: '<'},
  controller: VScoutController,
  template: ''
}
