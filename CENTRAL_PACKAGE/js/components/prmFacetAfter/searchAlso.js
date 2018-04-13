//facets.facet.facet_search_also
class SearchAlsoController {
  constructor(){
    this.parentCtrl.parentCtrl.facetService.results.unshift({
      name: 'Weitersuchen in',
      displayedType: 'exact',
      limitCount: 0,
      facetGroupCollapsed: false,
      values: undefined
    });
  }
}

export let searchAlsoConfig = {
  bindings:{parentCtrl:'<'},
  controller: SearchAlsoController
}
