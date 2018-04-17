//facets.facet.facet_search_also
class SearchAlsoController {
  constructor($translate){
    this.parentCtrl.parentCtrl.facetService.results.unshift({
      name: 'search_also',
      displayedType: 'exact',
      limitCount: 0,
      facetGroupCollapsed: false,
      values: undefined
    });
  }
}

SearchAlsoController.$inject = ['$translate'];

export let searchAlsoConfig = {
  bindings:{parentCtrl:'<'},
  controller: SearchAlsoController
}
