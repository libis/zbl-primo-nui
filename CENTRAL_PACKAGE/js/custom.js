(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Declare your components here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Rewrite this when imports can be done dynamically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       http://2ality.com/2017/01/import-operator.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Mehmet Celik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


/* import your component configuration*/


require('./utils');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _sfxLinks = require('./components/prmViewOnlineAfter/sfxLinks.js');

var _altmetric = require('./components/prmBriefResultAfter/altmetric');

var _links = require('./components/general/links');

var _locationLinks = require('./components/general/locationLinks');

var _searchAlso = require('./components/prmFacetAfter/searchAlso');

var _searchAlsoBody = require('./components/prmFacetExactAfter/searchAlsoBody');

var _browseButton = require('./components/prmSearchBarAfter/browseButton');

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _alertMessage = require('./components/prmTopBarBefore/alertMessage');

var _vScout = require('./components/general/vScout');

var _libInfo = require('./components/general/libInfo');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AfterComponents = function () {
  function AfterComponents() {
    _classCallCheck(this, AfterComponents);
  }

  _createClass(AfterComponents, null, [{
    key: 'all',
    get: function get() {
      /*
        name = the sub element in the after element
        config = the imported configuration object
        enabled = true/false should the component be created
        appendTo = The component should be created in this after component.
         ex. {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'}
        results in:
          <prm-logo-after parentCtrl='$ctrl'>
            <home-icon parentCtrl='$ctrl'></home-icon>
          </prm-logo-after>
      */
      return [{
        name: 'pnx-xml',
        config: _pnxXml.pnxXmlConfig,
        enabled: true,
        appendTo: 'prm-brief-result-container-after',
        enableInView: '.*'
      }, {
        name: 'zbl-sfx-links',
        config: _sfxLinks.sfxLinksConfig,
        enabled: true,
        //        appendTo: 'prm-brief-result-container-after',
        appendTo: 'prm-view-online-after',
        enableInView: '.*'
      }, {
        name: 'altmetric',
        config: _altmetric.altmetricConfig,
        enabled: true,
        appendTo: 'prm-brief-result-after',
        enableInView: '.*'
      }, {
        name: 'zbl-link',
        config: _links.linksConfig,
        enabled: true,
        appendTo: null,
        enableInView: '.*'
      }, {
        name: 'zbl-location-items-link',
        config: _locationLinks.locationLinksConfig,
        enabled: true,
        appendTo: 'prm-location-items-after',
        enableInView: '.*'
      }, {
        name: 'zbl-search-also',
        config: _searchAlso.searchAlsoConfig,
        enabled: true,
        appendTo: 'prm-facet-after',
        enableInView: '.*'
      }, {
        name: 'zbl-search-also-body',
        config: _searchAlsoBody.searchAlsoBodyConfig,
        enabled: true,
        appendTo: 'prm-facet-exact-after',
        enableInView: '.*'
      }, {
        name: 'zbl-browse-button',
        config: _browseButton.browseButtonConfig,
        enabled: true,
        appendTo: 'prm-search-bar-after',
        enableInView: '.*'
      }, {
        name: 'zbl-alert-message',
        config: _alertMessage.alertMessageConfig,
        enabled: true,
        appendTo: 'prm-top-bar-before',
        enableInView: '.*'
      }, {
        name: 'zbl-fines-message',
        config: _finesMessage.finesMessageConfig,
        enabled: true,
        appendTo: 'prm-top-bar-before',
        enableInView: '.*'
      }, {
        name: 'zbl-vscout',
        config: _vScout.vScoutConfig,
        enabled: true,
        appendTo: null,
        enableInView: '.*'
      }, {
        name: 'zbl-lib-info',
        config: _libInfo.libInfoConfig,
        enabled: true,
        appendTo: null,
        enableInView: '.*'
      }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/libInfo":2,"./components/general/links":3,"./components/general/locationLinks":4,"./components/general/vScout":5,"./components/prmBriefResultAfter/altmetric":6,"./components/prmFacetAfter/searchAlso":7,"./components/prmFacetExactAfter/searchAlsoBody":8,"./components/prmSearchBarAfter/browseButton":9,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":10,"./components/prmTopBarBefore/alertMessage":11,"./components/prmTopBarBefore/finesMessage":12,"./components/prmViewOnlineAfter/sfxLinks.js":13,"./utils":24}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var libInfoHTML = '<a href="http://primo.advesta.com/index.php?type=getLibURL&sourceURL={{$ctrl.sourceURL}}" target="_blank">\n  <img src="http://ilu.zhbluzern.ch/local/primo/info_symbol.jpg" title="Informationen zu dieser Bibliothek" border="0">\n</a>\n';

var LibInfoController = function () {
  function LibInfoController() {
    _classCallCheck(this, LibInfoController);
  }

  _createClass(LibInfoController, [{
    key: 'sourceURL',
    get: function get() {
      return encodeURIComponent('http://ilu.zhbluzern.ch/F?func=library&sub_library=' + this.locationCode);
    }
  }]);

  return LibInfoController;
}();

var libInfoConfig = exports.libInfoConfig = {
  bindings: { locationCode: '<' },
  controller: LibInfoController,
  template: libInfoHTML
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var linksHMTL = '<div class="prm-notice {{$ctrl.linkClass}}">\n  <a class="arrow-link" ng-href="{{$ctrl.linkUrl}}" target="_blank">\n    <span>{{$ctrl.linkText}}</span>\n    <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\n    <prm-icon external-link link-arrow icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right"></prm-icon>\n  </a>\n</div>\n';

var LinksController = function () {
  function LinksController() {
    _classCallCheck(this, LinksController);

    var self = this;

    Primo.user.then(function (user) {
      self.isOnCampus = user.isOnCampus();
      self.isLoggedIn = user.isLoggedIn();
      self.allFines = {
        count: user.fines.length,
        sum: user.fines ? user.fines.map(function (f) {
          return parseFloat(f.finesum);
        }).reduce(function (p, c) {
          return p + c;
        }, 0) : 0
      };
    });
  }

  _createClass(LinksController, [{
    key: 'onCampus',
    get: function get() {
      return this.isOnCampus;
    }
  }, {
    key: 'loggedIn',
    get: function get() {
      return this.isLoggedIn;
    }
  }, {
    key: 'fines',
    get: function get() {
      return this.allFines;
    }
  }, {
    key: 'linkClass',
    get: function get() {
      return this.class || '';
    }
  }, {
    key: 'linkText',
    get: function get() {
      return this.text || '';
    }
  }, {
    key: 'linkUrl',
    get: function get() {
      return this.url || '';
    }
  }]);

  return LinksController;
}();

var linksConfig = exports.linksConfig = {
  bindings: {
    class: '@',
    text: '@',
    url: '@'
  },
  controller: LinksController,
  template: linksHMTL
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var locationLinksHTML = '<zbl-link class="idslu-libraries" url="{{(\'nui.customizing.idslu.librariesurl\' | translate)}}" text="{{(\'nui.customizing.idslu.librariestext\' | translate)}}"></zbl-link>\n<zbl-link class="idslu-p-help" url="{{(\'nui.customizing.idslu.phelpurl\' | translate)}}" text="{{(\'nui.customizing.idslu.phelptext\' | translate)}}"></zbl-link>\n<zbl-link class="idslu-closures" url="{{(\'nui.customizing.idslu.closuresurl\' | translate)}}" text="{{(\'nui.customizing.idslu.closurestext\' | translate)}}"></zbl-link>\n';
var locationLinksConfig = exports.locationLinksConfig = {
  template: locationLinksHTML
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vScoutHTML = '<a ng-if="$ctrl.showVScout" href="{{$ctrl.url}}" target="_blank">\n  <img src="http://ilu.zhbluzern.ch{{$ctrl.proxySuffix}}/local/primo/plan_symbol.jpg" border="0" title="Lageplan anzeigen" />\n</a>\n';

var VScoutController = function () {
  function VScoutController() {
    _classCallCheck(this, VScoutController);
  }

  _createClass(VScoutController, [{
    key: 'url',
    get: function get() {
      return 'http://rauminfo-upg.zhbluzern.ch' + this.proxySuffix + '/?sig=' + encodeURIComponent(this.locationCode);
    }
  }, {
    key: 'proxySuffix',
    get: function get() {
      var currentHost = window.location.host;
      var proxySuffix = '';
      if (currentHost.match(/exlibrisgroup.com/g) != null) {
        proxySuffix = currentHost.replace(/.+\.exlibrisgroup\.com/g, '');
      }

      return proxySuffix;
    }
  }, {
    key: 'showVScout',
    get: function get() {
      return ['41ZBL_LUPHL'].includes(this.libraryCode);
    }
  }]);

  return VScoutController;
}();

var vScoutConfig = exports.vScoutConfig = {
  bindings: { locationCode: '<', libraryCode: '<' },
  controller: VScoutController,
  template: vScoutHTML
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var altmetricHTML = '<div id="altmetric-doi-{{$ctrl.id}}" class="eth-altmetric-container layout-row">\n  <div aria-label="Altmetric" ng-if="$ctrl.doi != \'\'"  ng-click="$event.stopPropagation();"\n        data-link-target="_blank"\n        rel="noopener"\n        class="altmetric-embed"\n        data-hide-no-mentions="true"\n        data-badge-type="4" data-badge-popover="right" data-doi="{{$ctrl.doi}}">\n </div>\n <div id="altmetric-isbn-{{$ctrl.id}}" aria-label="Altmetric" ng-if="$ctrl.isbn != \'\'"\n      ng-click="$event.stopPropagation();"\n      data-link-target="_blank" rel="noopener"\n      class="altmetric-embed" data-hide-no-mentions="true" data-badge-type="4"\n      data-badge-popover="right" data-isbn="{{$ctrl.isbn}}">\n </div>\n</div>\n';

/*
//script needs to be loaded first. Can be put in the $onInit() function
//or better in run method.
app.run(($templateCache) => {
  Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics.js loaded');
  });
});
*/

var AltMetricController = function () {
  function AltMetricController($element, $window, $scope) {
    _classCallCheck(this, AltMetricController);

    var self = this;
    var item = self.parentCtrl.parentCtrl.item;

    self.doi = '';
    self.isbn = '';
    self.id = self.guid();
    self.recordid = '';

    if (item && item.pnx && item.pnx.addata) {
      self.recordid = item.pnx.control.recordid[0];
      if (item.pnx.addata.doi) {
        self.doi = item.pnx.addata.doi[0];
      }

      if (item.pnx.addata.isbn) {
        self.isbn = item.pnx.addata.isbn[0];
      }
    }

    //this is a watcher on the local scope and will trigger altmetric
    var altmetricWatcher = $scope.$watch(function () {
      var altmetricLoaded = typeof window._altmetric_embed_init === 'function';
      var isbnExists = document.querySelector('#altmetric-isbn-' + self.id) != null;
      var doiExists = document.querySelector('#altmetric-doi-' + self.id) != null;
      var runTrigger = altmetricLoaded && (isbnExists || doiExists);

      //console.log(self.id, altmetricLoaded, isbnExists, doiExists, runTrigger);
      return runTrigger;
    }, function (n, o) {
      if (n == true) {
        console.log("trigger altmetric for:", self.recordid);
        $window._altmetric_embed_init('#altmetric-isbn-' + self.id);
        $window._altmetric_embed_init('#altmetric-doi-' + self.id);
        altmetricWatcher(); //deregister watcher
      }
    }, false);
  }

  _createClass(AltMetricController, [{
    key: 'guid',
    value: function guid() {
      var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  }]);

  return AltMetricController;
}();

AltMetricController.$inject = ['$element', '$window', '$scope'];

var altmetricConfig = exports.altmetricConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AltMetricController,
  template: altmetricHTML
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//facets.facet.facet_search_also
var SearchAlsoController = function SearchAlsoController($translate, $scope) {
  var _this = this;

  _classCallCheck(this, SearchAlsoController);

  $scope.$watch(function () {
    return _this.parentCtrl.parentCtrl.facetService.results;
  }, function (n, o) {
    if (n != o) {
      if (_this.parentCtrl.parentCtrl.facetService.results.filter(function (f) {
        return f.name == 'search_also';
      }).length == 0) {
        _this.parentCtrl.parentCtrl.facetService.results.unshift({
          name: 'search_also',
          displayedType: 'exact',
          limitCount: 0,
          facetGroupCollapsed: false,
          values: undefined
        });
      }
    }
  });
};

SearchAlsoController.$inject = ['$translate', '$scope'];

var searchAlsoConfig = exports.searchAlsoConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoController
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = "<div ng-if=\"$ctrl.name === 'search_also'\" class=\"idslu-furthersearch\">\n  <div ng-hide=\"$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed\">\n    <div class=\"section-content animate-max-height-variable\">\n      <div class=\"md-chips md-chips-wrap\">\n        <div ng-repeat=\"target in $ctrl.targets\" aria-live=\"polite\" class=\"md-chip animate-opacity-and-scale facet-element-marker-local4\">\n          <div class=\"md-chip-content layout-row\" role=\"button\" tabindex=\"9\">\n            <strong dir=\"auto\" title=\"{{ target.name }}\">\n              <a ng-href=\"{{ target.url + target.mapping($ctrl.search) }}\" target=\"_blank\"  title=\"{{ (target.tooltip | translate )}}\">\n                <img ng-src=\"{{ target.img }}\" width=\"22\" height=\"22\" style=\"vertical-align:middle;padding-right:2px;\"> {{ target.name }}\n              </a>\n            </strong>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

var SearchAlsoBodyController = function () {
  function SearchAlsoBodyController($location) {
    _classCallCheck(this, SearchAlsoBodyController);

    this.location = $location;
    this.targets = this._targets();
  }

  _createClass(SearchAlsoBodyController, [{
    key: "_targets",
    value: function _targets() {
      return [{
        "name": "Swissbib",
        "url": "https://www.swissbib.ch/search/results?&lookfor=",
        "img": "https://primo-direct-eu-sb.hosted.exlibrisgroup.com/primo-explore/custom/41ZBL/img/swissbib_icon.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swissbib",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      }, {
        "name": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=",
        "img": "https://primo-direct-eu-sb.hosted.exlibrisgroup.com/primo-explore/custom/41ZBL/img/google_icon.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.google_scolar",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      }, {
        "name": "Worldcat",
        "url": "https://www.worldcat.org/search?q=",
        "img": "https://primo-direct-eu-sb.hosted.exlibrisgroup.com/primo-explore/custom/41ZBL/img/worldcat_icon.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.worldcat",
        mapping: function mapping(search) {
          var type_mappings = {
            "any": "kw",
            "title": "ti",
            "creator": "au",
            "subject": "su"
          };
          var terms = search.split(",");
          var type = type_mappings[terms[0]] || "kw";
          var query = terms[2] || "";
          return type + ':' + query;
        }
      }];
    }
  }, {
    key: "search",
    get: function get() {
      return this.location.search().query;
    }
  }, {
    key: "name",
    get: function get() {
      return this.parentCtrl.parentCtrl.facetGroup.name;
    }
  }]);

  return SearchAlsoBodyController;
}();

SearchAlsoBodyController.$inject = ['$location'];

var searchAlsoBodyConfig = exports.searchAlsoBodyConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoBodyController,
  template: searchAlsoBodyHTML
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var browseButtonHTML = '<md-button aria-label="Browse"\n           class="zbl-browse-button zero-margin button-with-icon md-button md-primoExplore-theme md-ink-ripple"\n           ng-click="$ctrl.switchBrowse()">\n           <span layout="row" layout-align="start center">\n             <span>Browse</span>\n           </span>\n</md-button>\n';

var BrowseButtonController = function () {
  function BrowseButtonController($state, $compile, $scope) {
    _classCallCheck(this, BrowseButtonController);

    this.state = $state;
    this.scope = $scope;
    this.compile = $compile;
  }

  _createClass(BrowseButtonController, [{
    key: '$onInit',
    value: function $onInit() {
      angular.element(document.querySelector('.search-switch-buttons')).append(this.compile(browseButtonHTML)(this.scope));
    }
  }, {
    key: 'switchBrowse',
    value: function switchBrowse() {
      this.state.go('exploreMain.browseSearch', { vid: window.appConfig.vid });
    }
  }]);

  return BrowseButtonController;
}();

BrowseButtonController.$inject = ['$state', '$compile', '$scope'];

var browseButtonConfig = exports.browseButtonConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: BrowseButtonController,
  template: ''
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pnxXmlHTML = '<style>\n  .pnx-xml {\n    font-size:0.5em;\n    display:none;\n    justify-content:space-around;    \n  }\n</style>\n\n<div class=\'pnx-xml\'>\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.xml?needSession=0">XML</a> |\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.pnx?needSession=0">PNX</a>\n</div>\n';

var PnxXmlController = function () {
  function PnxXmlController() {
    _classCallCheck(this, PnxXmlController);

    try {
      this.recordid = this.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
    } catch (e) {
      this.recordid = null;
    }
  }

  _createClass(PnxXmlController, [{
    key: '$onInit',
    value: function $onInit() {
      var self = this;
      if (hotkeys) {
        hotkeys("ctrl+enter", function (e) {
          self.visible = !self.visible;

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Array.from(document.querySelectorAll('.pnx-xml'))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;

              element.style.display = self.visible ? 'flex' : 'none';
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }

      if (document.querySelectorAll('pnx-xml-trigger').length == 0) {
        var div = document.createElement('pnx-xml-trigger');
        div.setAttribute('style', 'position:fixed;left:0;bottom:0;height:20px;width:20px;z-index:1000;background-color:black;opacity:.03');
        div.onclick = function (event) {
          self.visible = !self.visible;

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Array.from(document.querySelectorAll('.pnx-xml'))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var element = _step2.value;

              element.style.display = self.visible ? 'flex' : 'none';
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        };
        document.body.appendChild(div);
      }
    }
  }]);

  return PnxXmlController;
}();

var pnxXmlConfig = exports.pnxXmlConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PnxXmlController,
  template: pnxXmlHTML
};

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlertMessageController = function AlertMessageController($scope, MessageService) {
  _classCallCheck(this, AlertMessageController);

  MessageService.show('', $scope);
};

AlertMessageController.$inject = ['$scope', 'MessageService'];

var alertMessageConfig = exports.alertMessageConfig = {
  bindings: { parentCtrl: '<' },
  controller: AlertMessageController,
  template: ''
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FinesMessageController = function FinesMessageController(MessageService, $translate, $rootScope) {
  _classCallCheck(this, FinesMessageController);

  var self = this;
  Primo.user.then(function (user) {
    self.user = user;
    if (user.fines.length > 0) {
      //TODO:extract html to its own file. find out how to resolve {{}}

      var message = $translate.instant('nui.customizing.idslu.youHaveFines');
      message = message.replace(/\$0/, user.fines.length);

      var pay = $translate.instant('nui.customizing.idslu.youHaveFines.pay');

      MessageService.show('\n            <span style="align-self:center;">' + message + '</span>\n            <a style="background-color: tomato;color: white;"\n               class="md-button md-raised md-secundary" target=\'_blank\'\n               href=\'#\'>' + pay + '</a>\n          ');
    }
  });
};

FinesMessageController.$inject = ['MessageService', '$translate', '$rootScope'];

var finesMessageConfig = exports.finesMessageConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FinesMessageController,
  template: ''
};

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sfxLinksConfig = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('../../primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sfxLinksHTML = '<div class="sfx-links" ng-repeat="(targetFacility, normalizedTargets) in $ctrl.targets">\n  <p class="fulltext-item sfx-links-facility">\n    <span translate="nui.customizing.idslu.sfxlinks.campusnet"></span> {{targetFacility}}\n  </p>\n  <div ng-repeat="target in normalizedTargets">\n    <p class="fulltext-item sfx-links-target">\n      <span translate="nui.customizing.idslu.sfxlinks.fulltext_through"></span>\n      <a href="{{target.target_url}}" target="_blank">{{target.target_name}}</a>\n    </p>\n  </div>\n</div>\n<p class="fulltext-item sfx-links-on-campus">\n  <span translate="nui.customizing.idslu.sfxlinks.on_campus"></span>\n  <span class="sfx-links-on-campus-url">\n        <a href="{{normalizedTargets[0].infoURL}}" target="_blank">\n          <span translate="nui.customizing.idslu.sfxlinks.external_campus_access"></span>\n  </a>\n  </span>\n</p>\n';

var SfxLinksController = function () {
  function SfxLinksController($scope) {
    _classCallCheck(this, SfxLinksController);

    var self = this;
    self.scope = $scope;
    //self.item = self.parentCtrl.parentCtrl.item;
    var containers = Primo.explore.components.get('prm-full-view-service-container');
    if (containers && containers.length > 0) {
      self.item = containers[0].ctrl().item;
      console.log(self.item);
    } else {
      self.item = self.parentCtrl.parentCtrl.item;
      console.log(self.item);
    }
    self.targets = {};
    self.updateTargetsWhenOpenURLAvailable();
  }

  _createClass(SfxLinksController, [{
    key: 'updateTargetsWhenOpenURLAvailable',
    value: function updateTargetsWhenOpenURLAvailable() {
      var self = this;
      var watcher = self.scope.$watch(function () {
        try {
          if (self.openurl && self.openurl.length > 0) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }, function (n, o) {
        if (n == true) {
          console.log(self.targetsUrls);
          self.targetsUrls.forEach(function (targetsUrl) {
            _helper2.default.http.get(targetsUrl).then(function (rawTargets) {
              if (rawTargets.data && rawTargets.data.length > 0) {
                var data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
                console.log(data);
                if (data) {
                  self.targets = data;
                }
              }
            });
          });
          watcher();
        }
      });
    }
  }, {
    key: 'normalizeTargets',
    value: function normalizeTargets(targets) {
      var self = this;
      var normalizedTargets = {};

      targets.reduce(function (t, c) {
        var d = t.hasOwnProperty(c.facility) ? t[c.facility] : [];
        d.push(c);
        t[c.facility] = d;
        return t;
      }, normalizedTargets);

      return normalizedTargets;
    }
  }, {
    key: 'targetsUrls',
    get: function get() {
      var _this = this;

      return this.openurl.map(function (m) {
        return _this.lookupURL + '?type=targets&sourceURL=' + encodeURIComponent(m) + '&proxySuffix=' + encodeURIComponent(_this.proxySuffix);
      });
    }
  }, {
    key: 'openurl',
    get: function get() {
      var self = this;
      var list = [];
      if (self.item && self.item.delivery) {
        var openUrlList = self.item.delivery.link.filter(function (f) {
          return (/^openurl/.test(f.displayLabel)
          );
        }).map(function (m) {
          return m.linkURL;
        });
        if (openUrlList.length > 0) {
          list.push(openUrlList[0]);
        }
      }

      if (self.item && self.item.linkElement) {
        var _openUrlList = self.item.linkElement.links.filter(function (f) {
          return (/^openurl/.test(f.displayText)
          );
        }).map(function (m) {
          return m.link;
        });
        if (_openUrlList.length > 0) {
          list.push(_openUrlList[0]);
        }
      }

      return list;
    }
  }, {
    key: 'proxySuffix',
    get: function get() {
      var currentHost = window.location.host;
      var proxySuffix = '';
      if (currentHost.match(/exlibrisgroup.com/g) != null) {
        proxySuffix = currentHost.replace(/.+\.exlibrisgroup\.com/g, '');
      }

      return proxySuffix;
    }
  }, {
    key: 'lookupURL',
    get: function get() {
      return document.location.protocol + '//primo.advesta.com/index.php';
    }
  }]);

  return SfxLinksController;
}();

SfxLinksController.$inject = ['$scope'];

var sfxLinksConfig = exports.sfxLinksConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SfxLinksController,
  template: sfxLinksHTML
};

},{"../../primo-explore-dom/js/primo/explore/helper":18}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageServiceHTML = '<div layout="row" class="bar alert-bar lbs-message-service" layout-align="center center">\n  <span class="bar-text" ng-bind-html="ctrl.message" style="display:flex"></span>\n  <md-button ng-show="ctrl.onAction" (click)="ctrl.onAction()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\n    <span hide-xs>{{ctrl.actionLabel}}</span>\n  </md-button>\n  <md-divider></md-divider>\n  <md-button aria-label="{{::(\'nui.message.dismiss\' | translate)}}" (click)="ctrl.onClose()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\n    <span translate="nui.message.dismiss" hide-xs></span>\n  </md-button>\n</div>\n';

var MessageService = function () {
  function MessageService($rootScope, $compile, $mdToast, $sce, $translate, $timeout) {
    _classCallCheck(this, MessageService);

    this.mdToast = $mdToast;
    this.sce = $sce;
    this.translate = $translate;
    this.timeout = $timeout;
    this.compile = $compile;
    this.rootScope = $rootScope;
  }

  _createClass(MessageService, [{
    key: 'show',
    value: function show() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var self = this;
      var scope = options.scope || null;
      var hideDelay = options.hideDelay || 0;
      var action = options.action || null;
      var actionLabel = options.actionLabel || 'unknown';

      this.timeout(function () {
        if (message.length == 0) {
          // code table entries can not have empty descriptions.
          // message <= 1 will not be displayed!!!!
          var messageKey = 'nui.customizing.idslu.alertMessage';
          message = self.translate.instant(messageKey);
          message = message == messageKey || message <= 1 ? '' : message;
        }

        if (message.length > 0) {
          var toastConfig = {
            parent: document.body,
            controllerAs: 'ctrl',
            controller: function controller() {
              var _this = this;

              this.actionLabel = actionLabel;

              this.onClose = function () {
                self.mdToast.hide();
              };

              if (action) {
                this.onAction = function () {
                  var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  action.call(_this);
                  self.mdToast.hide();
                };
              }

              if (scope) {
                //this.message = self.sce.trustAsHtml(self.compile(`<span>${message}</span>`)(self.rootScope).html());
                this.message = self.sce.trustAsHtml(self.compile('<span>' + message + '</span>')(scope).html());
              } else {
                this.message = self.sce.trustAsHtml(message);
              }
            },
            template: messageServiceHTML,
            position: 'top center',
            hideDelay: hideDelay
          };

          self.mdToast.show(toastConfig);
        } else {
          console.log('No message to display');
        }
      }, 2000);
    }
  }]);

  return MessageService;
}();

exports.default = MessageService;


MessageService.$inject = ['$rootScope', '$compile', '$mdToast', '$sce', '$translate', '$timeout'];

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _explore = require('./primo/explore');

var _explore2 = _interopRequireDefault(_explore);

var _records = require('./primo/records');

var _records2 = _interopRequireDefault(_records);

var _facets = require('./primo/facets');

var _facets2 = _interopRequireDefault(_facets);

var _view = require('./primo/view');

var _view2 = _interopRequireDefault(_view);

var _user = require('./primo/user');

var _user2 = _interopRequireDefault(_user);

var _helper = require('./primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Primo main entry class
 */
var Primo = function () {
  function Primo() {
    _classCallCheck(this, Primo);
  }

  _createClass(Primo, null, [{
    key: 'isDebugEnabled',


    /**
     * Check if angular.reloadWithDebugInfo() has ran
     * @return {boolean}
     */
    value: function isDebugEnabled() {
      return _helper2.default.isDebugEnabled();
    }

    /**
     * Did the script ran on a Primo site
     * @return {boolean}
     */

  }, {
    key: 'isPrimoAvailable',
    value: function isPrimoAvailable() {
      return _helper2.default.isPrimoAvailable();
    }

    /**
     * This is a proxy class
     * @return {Explore}
     */

  }, {
    key: 'version',

    /**
     * Return version information
     * @return {string}
     */
    get: function get() {
      var _version = "0.0.10";
      return 'Library:' + _version + ' - Primo:' + window.appConfig['system-configuration'].Primo_Version_Number + ':' + window.appConfig['system-configuration'].Primo_HotFix_Number;
    }
  }, {
    key: 'explore',
    get: function get() {
      return _explore2.default;
    }

    /**
     * Get a pointer to available records
     * @return {Records}
     */

  }, {
    key: 'records',
    get: function get() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        resolve(new _records2.default(_this.explore.components));
      });
      //return new Records(this.explore.components);
    }

    /**
     * Get a pointer to available facets
     * @return {Facets}
     */

  }, {
    key: 'facets',
    get: function get() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        resolve(new _facets2.default(_this2.explore.components));
      });
      //return new Facets(this.explore.components);
    }

    /**
     * Get a pointer to view related metadata
     * @return {View}
     */

  }, {
    key: 'view',
    get: function get() {
      return new Promise(function (resolve, reject) {
        resolve(new _view2.default());
      });
      //return new View();
    }

    /**
     * Get a pointer to user related metadata
     * @return {User}
     */

  }, {
    key: 'user',
    get: function get() {
      return new Promise(function (resolve, reject) {
        _helper2.default.userDetailsHTTP().then(function (userDetails) {
          _helper2.default.userFinesHTTP().then(function (userFines) {
            _helper2.default.userLoansHTTP().then(function (userLoans) {
              resolve(new _user2.default({ details: userDetails, fines: userFines, loans: userLoans }));
            });
          });
        });
      });
    }
  }]);

  return Primo;
}();

exports.default = Primo;

},{"./primo/explore":16,"./primo/explore/helper":18,"./primo/facets":19,"./primo/records":20,"./primo/user":21,"./primo/view":22}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//this is proxy class
var Explore = function () {
  function Explore() {
    _classCallCheck(this, Explore);
  }

  _createClass(Explore, null, [{
    key: 'components',
    get: function get() {
      var c = new _components2.default();
      _helper2.default.componentNames.forEach(function (selector) {
        c.add(selector);
      });

      return c;
    }
  }, {
    key: 'ui',
    get: function get() {
      if (this._ui === undefined) {
        console.error('This is a stub function call "angular.reloadWithDebugInfo()" to activate UI');
      }
      return this._ui;
    }
  }, {
    key: 'helper',
    get: function get() {
      return _helper2.default;
    }
  }]);

  return Explore;
}();

exports.default = Explore;

},{"./explore/components":17,"./explore/helper":18}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cssSelectorGenerator = new (require('../../vendor/css-selector-generator.js').CssSelectorGenerator)();

var Component = function () {
  function Component(element) {
    _classCallCheck(this, Component);

    this.element = element;
  }

  _createClass(Component, [{
    key: 'blink',
    value: function blink() {
      _helper2.default.blink(this);
    }
  }, {
    key: 'scope',
    value: function scope() {
      if (_helper2.default.isDebugEnabled()) {
        return angular.element(this.element).scope();
      } else {
        console.error('Please run "angular.reloadWithDebugInfo()" first');
      }
    }
  }, {
    key: 'ctrl',
    value: function ctrl() {
      var c = angular.element(this.element).controller(this.name);
      if (c) {
        return c;
      } else {
        console.log('using alternative method to get controller');
        var scope = this.scope();
        if (scope) {
          var scopeChild = scope.$$childTail;
          if (Object.keys(scope).includes('$ctrl')) {
            return scope.$ctrl;
          } else if (Object.keys(scope).includes('ctrl')) {
            return scope.ctrl;
          } else if (scopeChild && Object.keys(scopeChild).includes('$ctrl')) {
            return scopeChild.$ctrl;
          } else if (scopeChild && Object.keys(scopeChild).includes('ctrl')) {
            return scopeChild.ctrl;
          } else {
            console.error('No $ctrl defined');
          }
        }
      }

      return null;
    }
  }, {
    key: 'cssPath',
    get: function get() {
      return cssSelectorGenerator.getSelector(this.element);
    }
  }, {
    key: 'name',
    get: function get() {
      return this.element.localName;
    }
  }]);

  return Component;
}();

var Components = function () {
  function Components() {
    _classCallCheck(this, Components);

    this._components = {};
  }

  _createClass(Components, [{
    key: 'add',
    value: function add(selector) {
      var elements = _helper2.default.querySelectorAll(selector);
      var elementsArray = this._components[selector] || [];

      elements.forEach(function (element) {
        elementsArray.push(new Component(element));
      });

      this._components[selector] = elementsArray;

      return elementsArray;
    }
  }, {
    key: 'get',
    value: function get(selector) {
      return this._components[selector] || null;
    }
  }, {
    key: 'keys',
    value: function keys() {
      return Object.keys(this._components);
    }
  }]);

  return Components;
}();

exports.default = Components;

},{"../../vendor/css-selector-generator.js":23,"./helper":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'isDebugEnabled',
    value: function isDebugEnabled() {
      return window.name === 'NG_ENABLE_DEBUG_INFO!' || typeof angular.element(document.querySelector('prm-logo')).scope() != 'undefined' ? true : false;
    }
  }, {
    key: 'isPrimoAvailable',
    value: function isPrimoAvailable() {
      if ('undefined' !== typeof window.angular) {
        if (document.querySelector('primo-explore') !== null) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'querySelectorAll',
    value: function querySelectorAll(selector) {
      return Array.from(document.querySelectorAll(selector));
    }
  }, {
    key: 'injector',
    value: function injector() {
      var c = Primo.explore.components.get('primo-explore');
      if (c && c.length > 0) {
        var primoExplore = angular.element(c[0].element);
        var injector = primoExplore.injector();
        if (injector) {
          return injector;
        }
      }

      return null;
    }
  }, {
    key: 'loadScript',
    value: function loadScript(scriptURL) {
      if (window.angular) {
        var appInjector = angular.injector(['ng', 'angularLoad']);
        if (appInjector) {
          var angularLoad = appInjector.get('angularLoad');
          if (angularLoad) {
            return angularLoad.loadScript(scriptURL);
          }
        }
      }
    }
  }, {
    key: 'rootScope',
    value: function rootScope() {
      var injector = this.injector();
      if (injector) {
        var rootScope = injector.get('$rootScope');
        if (rootScope) {
          return rootScope;
        }
      }

      return null;
    }
  }, {
    key: 'userSessionManagerService',
    value: function userSessionManagerService() {
      var rootScope = this.rootScope();
      if (rootScope) {
        return rootScope.$$childHead.$ctrl.userSessionManagerService;
      }

      return null;
    }
  }, {
    key: 'jwtData',
    value: function jwtData() {
      var uSMS = this.userSessionManagerService();
      if (uSMS) {
        var jwtData = uSMS.jwtUtilService.getDecodedToken() || {};
        return jwtData;
      }
    }
  }, {
    key: 'userDetails',
    value: function userDetails() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.userSessionManagerService().$localForage.getItem('userDetails').then(function (userDetails) {
          return resolve(userDetails);
        });
      });
    }
  }, {
    key: 'userDetailsHTTP',
    value: function userDetailsHTTP() {
      var _this2 = this;

      var viewCode = this.jwtData().viewId || window.appConfig['vid'];
      return new Promise(function (resolve, reject) {
        _this2.http.get('/primo_library/libweb/webservices/rest/v1/usersettings?vid=' + viewCode).then(function (userDetails) {
          return resolve(userDetails.data);
        });
      });
    }
  }, {
    key: 'userFinesHTTP',
    value: function userFinesHTTP() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.http.get('/primo_library/libweb/webservices/rest/v1/myaccount/fines').then(function (userFines) {
          try {
            var data = userFines.data;
            if (data.status == 'ok') {
              var fines = data.data.fines;
              resolve(fines.fine);
            } else {
              console.log('No fines');
              resolve([]);
            }
          } catch (error) {
            resolve([]);
          }
        });
      });
    }
  }, {
    key: 'userLoansHTTP',
    value: function userLoansHTTP() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.http.get('/primo_library/libweb/webservices/rest/v1/myaccount/loans').then(function (userLoans) {
          try {
            var data = userLoans.data;
            if (data.status == 'ok') {
              var loans = data.data.loans;
              resolve(loans.loan);
            } else {
              console.log('No loans');
              resolve([]);
            }
          } catch (error) {
            resolve([]);
          }
        });
      });
    }
  }, {
    key: 'blink',
    value: function blink(component) {
      var numberOfBlinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

      var intervalId = null;
      var borderElement = null;
      var index = Math.floor(Math.random() * (1000 - 1)) + 1;
      var borderSelector = component.element.cssPath + index + 'Rect';

      var createBorderElement = function createBorderElement() {
        if (component && component.element) {
          var elementRect = component.element.getBoundingClientRect();
          var _borderElement = document.createElement('div');
          var _index = Math.floor(Math.random() * (1000 - 1)) + 1;
          _borderElement.setAttribute('id', borderSelector);
          _borderElement.style.border = '3px solid red';
          _borderElement.style.position = 'absolute';
          _borderElement.style.top = elementRect.top + 'px';
          _borderElement.style.height = elementRect.height + 'px';
          _borderElement.style.width = elementRect.width + 'px';
          _borderElement.style.left = elementRect.left + 'px';
          document.body.appendChild(_borderElement);

          return document.querySelector('#' + borderSelector);
        }

        return null;
      };

      var removeBorderElement = function removeBorderElement() {
        if (borderElement) {
          borderElement.remove();
        }
      };

      var blinkBorderElement = function blinkBorderElement() {
        var numberOfBlinks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

        window.clearInterval(intervalId);

        if (numberOfBlinks < 0) {
          removeBorderElement();
        } else {
          borderElement.style.display = numberOfBlinks % 2 == 0 ? 'none' : 'block';
          numberOfBlinks--;
          intervalId = window.setInterval(blinkBorderElement, 1000, numberOfBlinks);
        }
      };

      borderElement = createBorderElement();
      blinkBorderElement(numberOfBlinks);
    }
  }, {
    key: 'componentNames',
    get: function get() {
      var tags = Array.from(document.getElementsByTagName('*'));
      var componentNames = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;

          var tagName = tag.localName;
          if (/^prm-/.test(tagName) || /^primo-/.test(tagName)) {
            if (!componentNames.includes(tagName)) {
              componentNames.push(tagName);
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      componentNames = componentNames.sort().filter(function (e, i, a) {
        return i === a.findIndex(function (e2) {
          return e === e2;
        });
      });
      return componentNames;
    }
  }, {
    key: 'http',
    get: function get() {
      var injector = this.injector();
      if (injector) {
        var h = injector.get('$http');
        if (h) {
          return h;
        }
      }

      return null;
    }
  }]);

  return Helper;
}();

exports.default = Helper;

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Facets = function () {
    function Facets(components) {
        _classCallCheck(this, Facets);

        return this._facets(components);
    }

    _createClass(Facets, [{
        key: '_facets',
        value: function _facets(components) {
            try {
                if (components) {
                    var c = components.get('prm-facet-after');
                    if (c && c.length > 0) {
                        var ctrl = c[0].ctrl;
                        return ctrl.facetService.results;
                    }
                }
            } catch (e) {
                console.log('trying to get facets through the rootScope');
                try {
                    return _helper2.default.userSessionManagerService().searchStateService.resultObject.facets;
                } catch (e) {
                    console.error('unable to retrieve facets');
                }
            }

            return [];
        }
    }]);

    return Facets;
}();

exports.default = Facets;

},{"./explore/components":17,"./explore/helper":18}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Records = function () {
    function Records(components) {
        _classCallCheck(this, Records);

        return this._items(components);
    }

    _createClass(Records, [{
        key: '_items',
        value: function _items(components) {
            try {
                if (components) {
                    var c = components.get('prm-search-result-list-after');
                    if (c && c.length > 0) {
                        var ctrl = c[0].ctrl();
                        if (ctrl) {
                            return ctrl.itemlist;
                        }
                        throw "try again";
                    }
                }
            } catch (e) {
                console.log('trying to get records through the rootScope');
                try {
                    return _helper2.default.userSessionManagerService().searchStateService.resultObject.data;
                } catch (e) {
                    console.error('unable to retrieve items');
                }
            }

            return [];
        }
    }]);

    return Records;
}();

exports.default = Records;

},{"./explore/components":17,"./explore/helper":18}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _skelUser;

    _classCallCheck(this, User);

    var uSms = _helper2.default.userSessionManagerService();
    var jwtData = _helper2.default.jwtData();
    var self = this;

    return {
      id: jwtData.user || '',
      email: user.details.email || '',
      name: jwtData.userName || 'Guest',
      display_name: uSms.getUserNameForDisplay(),
      isLoggedIn: function isLoggedIn() {
        return uSms.getUserName().length > 0;
      },
      isOnCampus: function isOnCampus() {
        return jwtData.onCampus == "true" ? true : false;
      },
      fines: user.fines,
      loans: user.loans
    };
  }

  _createClass(User, [{
    key: '_skelUser',
    get: function get() {
      return {
        details: {},
        fines: {},
        loans: {}
      };
    }
  }]);

  return User;
}();

exports.default = User;

},{"./explore/helper":18}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View() {
  _classCallCheck(this, View);

  var uSms = _helper2.default.userSessionManagerService();
  var jwtData = _helper2.default.jwtData();

  return {
    code: jwtData.viewId || window.appConfig['vid'],
    institution: {
      code: jwtData.viewInstitutionCode,
      name: window.appConfig['primo-view']['attributes-map'].institution
    },
    interfaceLanguage: uSms.getUserLanguage() || window.appConfig['primo-view']['attributes-map'].interfaceLanguage,
    ip: {
      address: jwtData.ip
    }
  };
};

exports.default = View;

},{"./explore/helper":18}],23:[function(require,module,exports){
'use strict';

(function () {
  var CssSelectorGenerator,
      root,
      indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  CssSelectorGenerator = function () {
    CssSelectorGenerator.prototype.default_options = {
      selectors: ['id', 'class', 'tag', 'nthchild']
    };

    function CssSelectorGenerator(options) {
      if (options == null) {
        options = {};
      }
      this.options = {};
      this.setOptions(this.default_options);
      this.setOptions(options);
    }

    CssSelectorGenerator.prototype.setOptions = function (options) {
      var key, results, val;
      if (options == null) {
        options = {};
      }
      results = [];
      for (key in options) {
        val = options[key];
        if (this.default_options.hasOwnProperty(key)) {
          results.push(this.options[key] = val);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    CssSelectorGenerator.prototype.isElement = function (element) {
      return !!((element != null ? element.nodeType : void 0) === 1);
    };

    CssSelectorGenerator.prototype.getParents = function (element) {
      var current_element, result;
      result = [];
      if (this.isElement(element)) {
        current_element = element;
        while (this.isElement(current_element)) {
          result.push(current_element);
          current_element = current_element.parentNode;
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getTagSelector = function (element) {
      return this.sanitizeItem(element.tagName.toLowerCase());
    };

    CssSelectorGenerator.prototype.sanitizeItem = function (item) {
      var characters;
      characters = item.split('').map(function (character) {
        if (character === ':') {
          return "\\" + ':'.charCodeAt(0).toString(16).toUpperCase() + " ";
        } else if (/[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/.test(character)) {
          return "\\" + character;
        } else {
          return escape(character).replace(/\%/g, '\\');
        }
      });
      return characters.join('');
    };

    CssSelectorGenerator.prototype.getIdSelector = function (element) {
      var id, sanitized_id;
      id = element.getAttribute('id');
      if (id != null && id !== '' && !/\s/.exec(id) && !/^\d/.exec(id)) {
        sanitized_id = "#" + this.sanitizeItem(id);
        if (element.ownerDocument.querySelectorAll(sanitized_id).length === 1) {
          return sanitized_id;
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getClassSelectors = function (element) {
      var class_string, item, result;
      result = [];
      class_string = element.getAttribute('class');
      if (class_string != null) {
        class_string = class_string.replace(/\s+/g, ' ');
        class_string = class_string.replace(/^\s|\s$/g, '');
        if (class_string !== '') {
          result = function () {
            var k, len, ref, results;
            ref = class_string.split(/\s+/);
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              item = ref[k];
              results.push("." + this.sanitizeItem(item));
            }
            return results;
          }.call(this);
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getAttributeSelectors = function (element) {
      var attribute, blacklist, k, len, ref, ref1, result;
      result = [];
      blacklist = ['id', 'class'];
      ref = element.attributes;
      for (k = 0, len = ref.length; k < len; k++) {
        attribute = ref[k];
        if (ref1 = attribute.nodeName, indexOf.call(blacklist, ref1) < 0) {
          result.push("[" + attribute.nodeName + "=" + attribute.nodeValue + "]");
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getNthChildSelector = function (element) {
      var counter, k, len, parent_element, sibling, siblings;
      parent_element = element.parentNode;
      if (parent_element != null) {
        counter = 0;
        siblings = parent_element.childNodes;
        for (k = 0, len = siblings.length; k < len; k++) {
          sibling = siblings[k];
          if (this.isElement(sibling)) {
            counter++;
            if (sibling === element) {
              return ":nth-child(" + counter + ")";
            }
          }
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.testSelector = function (element, selector) {
      var is_unique, result;
      is_unique = false;
      if (selector != null && selector !== '') {
        result = element.ownerDocument.querySelectorAll(selector);
        if (result.length === 1 && result[0] === element) {
          is_unique = true;
        }
      }
      return is_unique;
    };

    CssSelectorGenerator.prototype.getAllSelectors = function (element) {
      var result;
      result = {
        t: null,
        i: null,
        c: null,
        a: null,
        n: null
      };
      if (indexOf.call(this.options.selectors, 'tag') >= 0) {
        result.t = this.getTagSelector(element);
      }
      if (indexOf.call(this.options.selectors, 'id') >= 0) {
        result.i = this.getIdSelector(element);
      }
      if (indexOf.call(this.options.selectors, 'class') >= 0) {
        result.c = this.getClassSelectors(element);
      }
      if (indexOf.call(this.options.selectors, 'attribute') >= 0) {
        result.a = this.getAttributeSelectors(element);
      }
      if (indexOf.call(this.options.selectors, 'nthchild') >= 0) {
        result.n = this.getNthChildSelector(element);
      }
      return result;
    };

    CssSelectorGenerator.prototype.testUniqueness = function (element, selector) {
      var found_elements, parent;
      parent = element.parentNode;
      found_elements = parent.querySelectorAll(selector);
      return found_elements.length === 1 && found_elements[0] === element;
    };

    CssSelectorGenerator.prototype.testCombinations = function (element, items, tag) {
      var item, k, l, len, len1, ref, ref1;
      ref = this.getCombinations(items);
      for (k = 0, len = ref.length; k < len; k++) {
        item = ref[k];
        if (this.testUniqueness(element, item)) {
          return item;
        }
      }
      if (tag != null) {
        ref1 = items.map(function (item) {
          return tag + item;
        });
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          item = ref1[l];
          if (this.testUniqueness(element, item)) {
            return item;
          }
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getUniqueSelector = function (element) {
      var found_selector, k, len, ref, selector_type, selectors;
      selectors = this.getAllSelectors(element);
      ref = this.options.selectors;
      for (k = 0, len = ref.length; k < len; k++) {
        selector_type = ref[k];
        switch (selector_type) {
          case 'id':
            if (selectors.i != null) {
              return selectors.i;
            }
            break;
          case 'tag':
            if (selectors.t != null) {
              if (this.testUniqueness(element, selectors.t)) {
                return selectors.t;
              }
            }
            break;
          case 'class':
            if (selectors.c != null && selectors.c.length !== 0) {
              found_selector = this.testCombinations(element, selectors.c, selectors.t);
              if (found_selector) {
                return found_selector;
              }
            }
            break;
          case 'attribute':
            if (selectors.a != null && selectors.a.length !== 0) {
              found_selector = this.testCombinations(element, selectors.a, selectors.t);
              if (found_selector) {
                return found_selector;
              }
            }
            break;
          case 'nthchild':
            if (selectors.n != null) {
              return selectors.n;
            }
        }
      }
      return '*';
    };

    CssSelectorGenerator.prototype.getSelector = function (element) {
      var all_selectors, item, k, l, len, len1, parents, result, selector, selectors;
      all_selectors = [];
      parents = this.getParents(element);
      for (k = 0, len = parents.length; k < len; k++) {
        item = parents[k];
        selector = this.getUniqueSelector(item);
        if (selector != null) {
          all_selectors.push(selector);
        }
      }
      selectors = [];
      for (l = 0, len1 = all_selectors.length; l < len1; l++) {
        item = all_selectors[l];
        selectors.unshift(item);
        result = selectors.join(' > ');
        if (this.testSelector(element, result)) {
          return result;
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getCombinations = function (items) {
      var i, j, k, l, ref, ref1, result;
      if (items == null) {
        items = [];
      }
      result = [[]];
      for (i = k = 0, ref = items.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
        for (j = l = 0, ref1 = result.length - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
          result.push(result[j].concat(items[i]));
        }
      }
      result.shift();
      result = result.sort(function (a, b) {
        return a.length - b.length;
      });
      result = result.map(function (item) {
        return item.join('');
      });
      return result;
    };

    return CssSelectorGenerator;
  }();

  if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
    define([], function () {
      return CssSelectorGenerator;
    });
  } else {
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    root.CssSelectorGenerator = CssSelectorGenerator;
  }
}).call(undefined);

},{}],24:[function(require,module,exports){
'use strict';

/*
  General 

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map(function (d, i, a) {
    return i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d;
  }).join('');
};

},{}],25:[function(require,module,exports){
'use strict';

var _primo = require('./primo-explore-dom/js/primo');

var _primo2 = _interopRequireDefault(_primo);

var _helper = require('./primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _messageService = require('./factories/messageService');

var _messageService2 = _interopRequireDefault(_messageService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Central Package Loader

  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
var locationItemsHTML = '<h3 class="section-title" style="margin-bottom: .75em !important;">\n  <span translate="nui.aria.locationItems.locationItems"></span>\n</h3>\n<div layout="row" layout-align="space-between center">\n  <md-button class="button-link link-alt-color zero-margin" ng-if="$ctrl.showRegisterUser()" (click)="$ctrl.reloadWithRegisterUser()" aria-label="{{\'fulldisplay.otherLocations.register\' | translate}}"><span class="bold-text padding-small" translate="fulldisplay.otherLocations.register"></span></md-button>\n</div>\n<div class="tab-content-header margin-bottom-small margin-left-medium" layout="row" layout-align="space-between end">\n  <div layout="column" flex>\n    <h4 ng-if="$ctrl.currLoc.location && $ctrl.getLibraryName($ctrl.currLoc.location)" class="md-title ng-binding zero-margin">\n      <span>{{$ctrl.currLoc.location.librarycodeTranslation}}</span>\n      <zbl-lib-info location-code="$ctrl.currLoc.location.mainLocation"></zbl-lib-info>\n    </h4>\n    <h5 ng-if="$ctrl.currLoc.location.relatedTitle != null && $ctrl.currLoc.location.relatedTitle !== \'\'" class="related-title">\n      <prm-icon icon-type="{{$ctrl.opacLocations.relatedArrow.type}}" svg-icon-set="{{$ctrl.opacLocations.relatedArrow.iconSet}}" icon-definition="{{$ctrl.opacLocations.relatedArrow.icon}}" class="related-title-icon h-flipped"></prm-icon>\n      <span translate="nui.location.related_title" class="related-title-label"></span>\n      <span class="related-title-name">{{$ctrl.currLoc.location.relatedTitle}}</span>\n    </h5>\n    <p ng-if="$ctrl.currLoc.location.availabilityStatus" class="ng-binding ng-scope zero-margin">\n      <span class="availability-status {{$ctrl.currLoc.location.availabilityStatus}}" translate="fulldisplay.availabilty.{{$ctrl.currLoc.location.availabilityStatus}}"></span>\n      <span ng-if="$ctrl.currLoc.location.subLocation">,</span>\n      <span ng-if="$ctrl.currLoc.location && $ctrl.currLoc.location.subLocation && $ctrl.getSubLibraryName($ctrl.currLoc.location)">{{$ctrl.currLoc.location.collectionTranslation}} </span>\n      <span ng-if="$ctrl.currLoc.location.callNumber"></span>\n      <span ng-if="$ctrl.currLoc.location.callNumber">{{$ctrl.currLoc.location.callNumber}}</span>\n      <zbl-vscout library-code=\'$ctrl.currLoc.location.libraryCode\'\n                  location-code="$ctrl.currLoc.location.callNumber">\n      </zbl-vscout>\n    </p>\n    <p ng-if="$ctrl.currLoc.location.availabilityStatement" class="ng-binding ng-scope zero-margin">{{$ctrl.currLoc.location.availabilityStatement}}</p>\n    <div ng-if="!$ctrl.currLoc.locationNoItems">\n      <div ng-if="!$ctrl.summaryLinesVisible" layout="row" layout-align="start start">\n        <div layout="column" style="max-width: calc(100% - 70px);">\n          <div class="weak-text text-trim-ellipsis" ng-repeat="line in $ctrl.currLoc.summaryHoldings.baseSummaryShort track by $index" layout="row">\n            <div translate="{{line.key}}" class="margin-right-small"></div><span class="summary-brief" class="" layout="row"><a ng-if="line.value.includes(\'http:\')" href="{{line.value}}">{{line.value}}</a> <span title="{{line.value}}" ng-if="!line.value.includes(\'http:\')">{{line.value}}</span></span>\n          </div>\n        </div>\n        <div>\n          <md-button class="button-as-link link-alt-color" (click)="$ctrl.summaryLinesVisible = true" ng-if="!$ctrl.summaryLinesVisible && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData" aria-label="{{\'nui.locations.expand\' | translate}}"><span translate="nui.locations.expand" class="bold-text"></span></md-button>\n        </div>\n      </div>\n      <div ng-if="$ctrl.summaryLinesVisible" layout="row" layout-align="start start">\n        <div layout="column">\n          <div ng-repeat="line in $ctrl.currLoc.summaryHoldings.allLines track by $index">\n            <div class="margin-top-small"><span class="bold-text" translate="{{line.key}}"></span></div>\n            <div ng-repeat="lineItem in line.value track by $index" class="padding-left-medium"><span><a ng-if="lineItem.includes(\'http:\')" href="{{lineItem}}">{{lineItem}}</a> <span ng-if="!lineItem.includes(\'http:\')">{{lineItem}}</span></span>\n            </div>\n          </div>\n        </div>\n        <md-button class="button-as-link link-alt-color" (click)="$ctrl.summaryLinesVisible = false" ng-if="$ctrl.summaryLinesVisible && \t$ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData"><span translate="nui.locations.collapse" class="bold-text"></span></md-button>\n      </div>\n    </div>\n    <div class="layout-column" ng-if="$ctrl.currLoc.locationNoItems" flex layout="row">\n      <div flex="70"><span class="weak-text text-trim-ellipsis" ng-if="$ctrl.summaryLinesVisible" ng-repeat="line in $ctrl.currLoc.summaryHoldings.baseSummaryShort track by $index"><div><div translate="{{line.key}}"></div><a class="text-trim-ellipsis" ng-if="line.value.includes(\'http:\')" href="{{line.value}}">{{line.value}}</a> <span class="text-trim-ellipsis" ng-if="!line.value.includes(\'http:\')">{{line.value}}<md-tooltip>{{line.value}}</md-tooltip></span></div>\n      </span>\n      <div ng-if="!$ctrl.summaryLinesVisible">\n        <div ng-repeat="line in $ctrl.currLoc.summaryHoldings.allLines track by $index">\n          <div class="margin-top-small"><span class="bold-text" translate="{{line.key}}"></span></div>\n          <div ng-repeat="lineItem in line.value track by $index" class="padding-left-medium"><span><a ng-if="lineItem.includes(\'http:\')" href="{{lineItem}}">{{lineItem}}</a> <span ng-if="!lineItem.includes(\'http:\')">{{lineItem}}</span></span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div flex><span class="text-link" (click)="$ctrl.summaryLinesVisible = !$ctrl.summaryLinesVisible"><span ng-if="!$ctrl.summaryLinesVisible && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData" translate="nui.locations.collapse"></span>      <span ng-if="$ctrl.summaryLinesVisible && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData" translate="nui.locations.expand"></span></span>\n    </div>\n  </div>\n</div>\n<div layout="row">\n  <prm-stack-map ng-if="$ctrl.isSuprima() && $ctrl.currLoc.location.stackMapUrl" [map-url]="$ctrl.currLoc.location.stackMapUrl"></prm-stack-map>\n</div>\n<div layout="row" ng-hide="$ctrl.currLoc.locationNoItems" layout-align="end center">\n  <md-button class="md-icon-button md-mini" aria-label="{{\'nui.aria.locationItems.filterButton\' | translate}}" ng-if="($ctrl.isFilter || $ctrl.isFiltered) && $ctrl.isAnyFilterFilled()" (click)="$ctrl.filterClick();">\n    <md-tooltip><span ng-if="$ctrl.isLocationsFilterVisible" translate="nui.aria.locationItems.filterOut"></span> <span ng-if="!$ctrl.isLocationsFilterVisible" translate="nui.aria.locationItems.filter"></span></md-tooltip>\n    <prm-icon ng-if="!$ctrl.isLocationsFilterVisible"\n      icon-type="{{$ctrl.opacLocations.filter.type}}" svg-icon-set="{{$ctrl.opacLocations.filter.iconSet}}" icon-definition="{{$ctrl.opacLocations.filter.icon}}"></prm-icon>\n    <prm-icon ng-if="$ctrl.isLocationsFilterVisible" icon-type="{{$ctrl.opacLocations.filterOut.type}}" svg-icon-set="{{$ctrl.opacLocations.filterOut.iconSet}}" icon-definition="{{$ctrl.opacLocations.filterOut.icon}}"></prm-icon>\n  </md-button>\n  <div class="vertical-divider transparent-divider"></div>\n  <md-button aria-label="{{\'nui.locItems.collapse\' | translate}}" class="md-icon-button header-action expand-collapse-button" (click)="$ctrl.toggleExpandAll($ctrl.currLoc)">\n    <md-tooltip md-autohide="true"><span ng-if="$ctrl.currLoc.isExpandAll" translate="nui.locItems.collapse"></span> <span ng-if="!$ctrl.currLoc.isExpandAll" translate="nui.locItems.expand"></span></md-tooltip><span ng-if="!$ctrl.currLoc.isExpandAll"><prm-icon icon-type="{{$ctrl.opacLocations.expandAllIcon.type}}" svg-icon-set="{{$ctrl.opacLocations.expandAllIcon.iconSet}}" icon-definition="{{$ctrl.opacLocations.expandAllIcon.icon}}"></prm-icon></span>\n    <span\n      ng-if="$ctrl.currLoc.isExpandAll">\n      <prm-icon icon-type="{{$ctrl.opacLocations.collapseAllIcon.type}}" svg-icon-set="{{$ctrl.opacLocations.collapseAllIcon.iconSet}}" icon-definition="{{$ctrl.opacLocations.collapseAllIcon.icon}}"></prm-icon>\n      </span>\n  </md-button>\n</div>\n</div>\n<prm-locations-filter ng-if="$ctrl.isLocationsFilterVisible && $ctrl.isAnyFilterFilled()" [item]="$ctrl.item" [is-disabled]="$ctrl.isItemsFilterDisable($ctrl.item)" (filter-event)="$ctrl.handleFilterEvent($event)" [is-after-filtering]="$ctrl.isFiltered"\n  [drop-down-options]="$ctrl.dropDownOptions" [filters]="$ctrl.filters" (clear-filters-event)="$ctrl.clearFilters(true)"></prm-locations-filter>\n<div ng-if="$ctrl.currLoc.locationNoItems" class="padding-left-medium">\n  <div class="bar alert-bar margin-bottom-medium" layout="row" layout-align="start center"><span flex ng-if="$ctrl.isLoggedIn();" translate="nui.locations.noitems.signin"></span> <span flex ng-if="!$ctrl.isLoggedIn();" translate="nui.locations.noitems.guest"></span></div>\n</div>\n<md-list layout="column" ng-hide="$ctrl.currLoc.locationNoItems" class="separate-list-items margin-left-medium">\n  <md-list-item ng-repeat="item in $ctrl.currLoc.items track by $index" class="md-2-line has-expand" ng-if="!$ctrl.currLoc.isMore || !$last" ng-class="item.isExpanded?\'item-expanded\':\'\'" (click)="item.isExpanded = !item.isExpanded">\n    <div layout="row" flex>\n      <div class="md-list-item-text" layout="row" layout-wrap flex>\n        <div flex flex-xs="100">\n          <div ng-if="item.itemFields[0]">\n            <h3><span translate="nui.item.brief.1"></span> {{item.itemFields[0]}}</h3>\n            <md-tooltip>{{item.itemFields[0]}}</md-tooltip>\n          </div>\n          <div ng-if="item.itemFields[1]">\n            <h4><span translate="nui.item.brief.2"></span> {{item.itemFields[1]}}</h4>\n            <md-tooltip>{{item.itemFields[1]}}</md-tooltip>\n          </div>\n        </div>\n        <div class="weak-text" flex flex-xs="100">\n          <div ng-if="item.itemFields[2]">\n            <p><span translate="nui.item.brief.3"></span> {{item.itemFields[2]}}</p>\n            <md-tooltip>{{item.itemFields[2]}}</md-tooltip>\n          </div>\n          <div ng-if="item.itemFields[3]">\n            <p><span translate="nui.item.brief.4"></span> {{item.itemFields[3]}}</p>\n            <md-tooltip>{{item.itemFields[3]}}</md-tooltip>\n          </div>\n          <div ng-if="item.isExpanded">\n            <div ng-repeat="full in item.fullItemFields track by $index">\n              <p>{{full}}</p>\n              <md-tooltip>{{item.fullItemValues[$index]}}</md-tooltip>\n            </div>\n          </div>\n        </div>\n        <div layout-align="end center" layout="row" layout-wrap flex-xs="100" flex-sm="30">\n          <div ng-if="!$ctrl.currLoc.location.isValidUser"><span translate="item.request.not_available"></span></div>\n          <div ng-if="$ctrl.currLoc.location.isValidUser && item.listOfServices.length === 0"><span translate="item.request.blocked"></span></div>\n          <div layout="row" layout-align="center center" ng-repeat="service in item.listOfServices track by $index" ng-if="$ctrl.isLoggedIn()">\n            <prm-service-button ng-if="$ctrl.allowService()" [service]="service" (change-tab-event)="::$ctrl.onChangeTabEvent($event)" [parent-tab]="::$ctrl.tabId" [request-parameters]="$ctrl.getServiceAdditionalParams(item, service)" method="GET"></prm-service-button>\n            <div class="skewed-divider" ng-if="!$last"></div>\n          </div>\n        </div>\n      </div>\n      <div class="align-self-stretch">\n        <md-button class="md-secondary item-expand-button" aria-label="{{\'nui.aria.locationItems.expandcollapse\' | translate}}">\n          <prm-icon ng-class="{\'rotate-180\': item.isExpanded}" icon-type="{{$ctrl.opacLocations.expandIcon.type}}" svg-icon-set="{{$ctrl.opacLocations.expandIcon.iconSet}}" icon-definition="{{$ctrl.opacLocations.expandIcon.icon}}"></prm-icon>\n        </md-button>\n      </div>\n    </div>\n    <prm-location-item-after parent-ctrl="$ctrl"></prm-location-item-after>\n  </md-list-item>\n  <prm-spinner ng-if="$ctrl.inProgress" class="inline-loader half-transparent no-text" layout="row" layout-align="center center"></prm-spinner>\n</md-list>\n<md-button ng-if="!$ctrl.currLoc.locationNoItems && $ctrl.currLoc.isMore" class="button-link link-alt-color zero-margin" (click)="$ctrl.getlocationsItems($ctrl.currLoc, true);" ng-hide="!$ctrl.currLoc.isMore" aria-label="{{\'fulldisplay.locations.showmore\' | translate}}"><span class="bold-text padding-small" translate="fulldisplay.locations.showmore"></span></md-button>\n<prm-location-items-after parent-ctrl="$ctrl"></prm-location-items-after>\n';

//make Primo public

window.Primo = _primo2.default;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function () {
  if (_primo2.default.isDebugEnabled()) {
    var uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';

    _helper2.default.loadScript(uiURL).then(function () {
      console.log('Injecting UI');
      _primo2.default.explore.ui.toggle();
    });
  }
}, 2000);

// standard google analytics tracking code
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-22162390-13', 'auto');
ga('send', 'pageview');

//Create the centralCustom module;
var app = angular.module('centralCustom', ['ngMaterial']).constant('feedbackServiceURL', 'https://services.libis.be/feedback').config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}).run(function ($templateCache) {
  _helper2.default.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(function () {
    console.log('hotkeys.js loaded');
  });

  _helper2.default.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics.js loaded');
  });

  _helper2.default.loadScript('https://recommender.bibtip.de/js/bibtip_zhb_luzern.js').then(function () {
    console.log('bibtip.js loaded');
  });
}).run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
  //send to GA every time the URL changes
  $rootScope.$on('$locationChangeSuccess', function (event) {
    $window.ga('send', 'pageview', { location: $location.url() });
  });
}]).service('MessageService', _messageService2.default).run(function ($templateCache) {
  $templateCache.put('components/search/fullView/getit/opac/locations/location-items.html', locationItemsHTML);
});

//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
_components2.default.all.forEach(function (component) {
  console.log(component.name);
  if (component.enabled) {
    if (component.appendTo) {
      var elements = afterComponents[component.appendTo] || [];
      //elements.push(component.name);
      elements.push({ 'name': component.name, 'enableInView': component.enableInView });
      afterComponents[component.appendTo] = elements;
    }
    app.constant('afterComponents', afterComponents);
    app.component(component.name.toCamelCase(), component.config);
  }
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach(function (component, i) {
  var subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(function (m) {
      return '<' + m.name + ' parent-ctrl="$ctrl"></' + m.name + '>';
    }).join("")
  });
});

},{"./components":1,"./factories/messageService":14,"./primo-explore-dom/js/primo":15,"./primo-explore-dom/js/primo/explore/helper":18}]},{},[25])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9saWJJbmZvLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvbGlua3MuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9sb2NhdGlvbkxpbmtzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvdlNjb3V0LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvc2VhcmNoQWxzby5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHkuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtU2VhcmNoQmFyQWZ0ZXIvYnJvd3NlQnV0dG9uLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYWxlcnRNZXNzYWdlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVmlld09ubGluZUFmdGVyL3NmeExpbmtzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9mYWN0b3JpZXMvbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9mYWNldHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL3JlY29yZHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL3VzZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL3ZpZXcuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy91dGlscy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBRkE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7SUFFcUIsZTs7Ozs7Ozt3QkFFRjtBQUNmOzs7Ozs7Ozs7OztBQVlBLGFBQU8sQ0FBQztBQUNKLGNBQU0sU0FERjtBQUVKLG9DQUZJO0FBR0osaUJBQVMsSUFITDtBQUlKLGtCQUFVLGtDQUpOO0FBS0osc0JBQWM7QUFMVixPQUFELEVBT0w7QUFDRSxjQUFNLGVBRFI7QUFFRSx3Q0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJTjtBQUNRLGtCQUFVLHVCQUxaO0FBTUUsc0JBQWM7QUFOaEIsT0FQSyxFQWVMO0FBQ0UsY0FBTSxXQURSO0FBRUUsMENBRkY7QUFHRSxpQkFBUyxJQUhYO0FBSUUsa0JBQVUsd0JBSlo7QUFLRSxzQkFBYztBQUxoQixPQWZLLEVBc0JMO0FBQ0UsY0FBTSxVQURSO0FBRUUsa0NBRkY7QUFHRSxpQkFBUyxJQUhYO0FBSUUsa0JBQVUsSUFKWjtBQUtFLHNCQUFjO0FBTGhCLE9BdEJLLEVBNkJMO0FBQ0UsY0FBTSx5QkFEUjtBQUVFLGtEQUZGO0FBR0UsaUJBQVMsSUFIWDtB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TUFBSSxVQUFVLE9BQWQsRUFBdUI7QUFDckIsUUFBSSxVQUFVLFFBQWQsRUFBd0I7QUFDdEIsVUFBSSxXQUFXLGdCQUFnQixVQUFVLFFBQTFCLEtBQXVDLEVBQXREO0FBQ0E7QUFDQSxlQUFTLElBQVQsQ0FBYyxFQUFFLFFBQVEsVUFBVSxJQUFwQixFQUEwQixnQkFBZ0IsVUFBVSxZQUFwRCxFQUFkO0FBQ0Esc0JBQWdCLFVBQVUsUUFBMUIsSUFBc0MsUUFBdEM7QUFFRDtBQUNELFFBQUksUUFBSixDQUFhLGlCQUFiLEVBQWdDLGVBQWhDO0FBQ0EsUUFBSSxTQUFKLENBQWMsVUFBVSxJQUFWLENBQWUsV0FBZixFQUFkLEVBQTRDLFVBQVUsTUFBdEQ7QUFDRDtBQUNGLENBYkQ7O0FBZ0JBO0FBQ0EsT0FBTyxJQUFQLENBQVksZUFBWixFQUE2QixPQUE3QixDQUFxQyxVQUFDLFNBQUQsRUFBVyxDQUFYLEVBQWlCO0FBQ3BELE1BQUksZ0JBQWdCLGdCQUFnQixTQUFoQixDQUFwQjs7QUFFQSxNQUFJLFNBQUosQ0FBYyxVQUFVLFdBQVYsRUFBZCxFQUF1QztBQUNyQyxjQUFTO0FBQ1Asa0JBQVk7QUFETCxLQUQ0QjtBQUlyQyxjQUFVLGNBQWMsR0FBZCxDQUFrQjtBQUFBLG1CQUFTLEVBQUUsSUFBWCwrQkFBeUMsRUFBRSxJQUEzQztBQUFBLEtBQWxCLEVBQXNFLElBQXRFLENBQTJFLEVBQTNFO0FBSjJCLEdBQXZDO0FBTUQsQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xuaW1wb3J0IHtzZnhMaW5rc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVZpZXdPbmxpbmVBZnRlci9zZnhMaW5rcy5qcydcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXG5pbXBvcnQge2xpbmtzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9saW5rcydcbmltcG9ydCB7bG9jYXRpb25MaW5rc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvbG9jYXRpb25MaW5rcydcbmltcG9ydCB7c2VhcmNoQWxzb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvc2VhcmNoQWxzbydcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHknXG5pbXBvcnQge2Jyb3dzZUJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaEJhckFmdGVyL2Jyb3dzZUJ1dHRvbidcbmltcG9ydCB7ZmluZXNNZXNzYWdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZSdcbmltcG9ydCB7YWxlcnRNZXNzYWdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2FsZXJ0TWVzc2FnZSdcbmltcG9ydCB7dlNjb3V0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC92U2NvdXQnXG5pbXBvcnQge2xpYkluZm9Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2xpYkluZm8nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XG5cbiAgc3RhdGljIGdldCBhbGwoKSB7XG4gICAgLypcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcbiAgICAgIGNvbmZpZyA9IHRoZSBpbXBvcnRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxuXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cbiAgICAgIHJlc3VsdHMgaW46XG4gICAgICAgIDxwcm0tbG9nby1hZnRlciBwYXJlbnRDdHJsPSckY3RybCc+XG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XG4gICAgKi9cbiAgICByZXR1cm4gW3tcbiAgICAgICAgbmFtZTogJ3BueC14bWwnLFxuICAgICAgICBjb25maWc6IHBueFhtbENvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1zZngtbGlua3MnLFxuICAgICAgICBjb25maWc6IHNmeExpbmtzQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuLy8gICAgICAgIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS12aWV3LW9ubGluZS1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FsdG1ldHJpYycsXG4gICAgICAgIGNvbmZpZzogYWx0bWV0cmljQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtbGluaycsXG4gICAgICAgIGNvbmZpZzogbGlua3NDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiBudWxsLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtbG9jYXRpb24taXRlbXMtbGluaycsXG4gICAgICAgIGNvbmZpZzogbG9jYXRpb25MaW5rc0NvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tbG9jYXRpb24taXRlbXMtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6Ymwtc2VhcmNoLWFsc28nLFxuICAgICAgICBjb25maWc6IHNlYXJjaEFsc29Db25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLXNlYXJjaC1hbHNvLWJvZHknLFxuICAgICAgICBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSwgICAgICBcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1icm93c2UtYnV0dG9uJyxcbiAgICAgICAgY29uZmlnOiBicm93c2VCdXR0b25Db25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLXNlYXJjaC1iYXItYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtYWxlcnQtbWVzc2FnZScsXG4gICAgICAgIGNvbmZpZzogYWxlcnRNZXNzYWdlQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1maW5lcy1tZXNzYWdlJyxcbiAgICAgICAgY29uZmlnOiBmaW5lc01lc3NhZ2VDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLXZzY291dCcsXG4gICAgICAgIGNvbmZpZzogdlNjb3V0Q29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogbnVsbCxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLWxpYi1pbmZvJyxcbiAgICAgICAgY29uZmlnOiBsaWJJbmZvQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogbnVsbCxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9XG4gICAgXS5maWx0ZXIoKGNvbXBvbmVudCkgPT4gKGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IGxpYkluZm9IVE1MIGZyb20gJy4vbGliSW5mby5odG1sJ1xuXG5jbGFzcyBMaWJJbmZvQ29udHJvbGxlcntcbiAgY29uc3RydWN0b3IoKXtcbiAgfVxuXG4gIGdldCBzb3VyY2VVUkwoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChgaHR0cDovL2lsdS56aGJsdXplcm4uY2gvRj9mdW5jPWxpYnJhcnkmc3ViX2xpYnJhcnk9JHt0aGlzLmxvY2F0aW9uQ29kZX1gKVxuICB9XG59XG5cbmV4cG9ydCBsZXQgbGliSW5mb0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtsb2NhdGlvbkNvZGU6JzwnfSxcbiAgY29udHJvbGxlcjogTGliSW5mb0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBsaWJJbmZvSFRNTFxufVxuIiwiaW1wb3J0IGxpbmtzSE1UTCBmcm9tICcuL2xpbmtzLmh0bWwnXG5cbmNsYXNzIExpbmtzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgc2VsZi5pc09uQ2FtcHVzID0gdXNlci5pc09uQ2FtcHVzKCk7XG4gICAgICBzZWxmLmlzTG9nZ2VkSW4gPSB1c2VyLmlzTG9nZ2VkSW4oKTtcbiAgICAgIHNlbGYuYWxsRmluZXMgPSAge1xuICAgICAgICBjb3VudDogdXNlci5maW5lcy5sZW5ndGgsXG4gICAgICAgIHN1bTogKHVzZXIuZmluZXMgPyB1c2VyLmZpbmVzLm1hcChmID0+IHBhcnNlRmxvYXQoZi5maW5lc3VtKSkucmVkdWNlKChwLGMpPT4gcCtjLCAwKSA6IDApXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgb25DYW1wdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPbkNhbXB1cztcbiAgfVxuXG4gIGdldCBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvZ2dlZEluO1xuICB9XG5cbiAgZ2V0IGZpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbEZpbmVzO1xuICB9XG5cbiAgZ2V0IGxpbmtDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBsaW5rVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0IHx8ICcnO1xuICB9XG5cbiAgZ2V0IGxpbmtVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsIHx8ICcnO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgbGlua3NDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgY2xhc3M6ICdAJyxcbiAgICB0ZXh0OiAnQCcsXG4gICAgdXJsOiAnQCdcbiAgfSxcbiAgY29udHJvbGxlcjogTGlua3NDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogbGlua3NITVRMXG59XG4iLCJpbXBvcnQgbG9jYXRpb25MaW5rc0hUTUwgZnJvbSAnLi9sb2NhdGlvbkxpbmtzLmh0bWwnXG5cbmV4cG9ydCBsZXQgbG9jYXRpb25MaW5rc0NvbmZpZyA9IHtcbiAgdGVtcGxhdGU6IGxvY2F0aW9uTGlua3NIVE1MXG59XG4iLCJpbXBvcnQge3ZTY291dEhUTUx9IGZyb20gJy4vdlNjb3V0Lmh0bWwnXG5cbmNsYXNzIFZTY291dENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG5cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gYGh0dHA6Ly9yYXVtaW5mby11cGcuemhibHV6ZXJuLmNoJHt0aGlzLnByb3h5U3VmZml4fS8/c2lnPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMubG9jYXRpb25Db2RlKX1gXG4gIH1cblxuICBnZXQgcHJveHlTdWZmaXgoKSB7XG4gICAgbGV0IGN1cnJlbnRIb3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgbGV0IHByb3h5U3VmZml4ID0gJyc7XG4gICAgaWYgKGN1cnJlbnRIb3N0Lm1hdGNoKC9leGxpYnJpc2dyb3VwLmNvbS9nKSAhPSBudWxsKSB7XG4gICAgICBwcm94eVN1ZmZpeCA9IGN1cnJlbnRIb3N0LnJlcGxhY2UoLy4rXFwuZXhsaWJyaXNncm91cFxcLmNvbS9nLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3h5U3VmZml4O1xuICB9XG5cbiAgZ2V0IHNob3dWU2NvdXQoKSB7XG4gICAgcmV0dXJuIFsnNDFaQkxfTFVQSEwnXS5pbmNsdWRlcyh0aGlzLmxpYnJhcnlDb2RlKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IHZTY291dENvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtsb2NhdGlvbkNvZGU6ICc8JywgbGlicmFyeUNvZGU6JzwnfSxcbiAgY29udHJvbGxlcjogVlNjb3V0Q29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHZTY291dEhUTUxcbn1cbiIsImltcG9ydCBhbHRtZXRyaWNIVE1MIGZyb20gJy4vYWx0bWV0cmljLmh0bWwnXG5cbi8qXG4vL3NjcmlwdCBuZWVkcyB0byBiZSBsb2FkZWQgZmlyc3QuIENhbiBiZSBwdXQgaW4gdGhlICRvbkluaXQoKSBmdW5jdGlvblxuLy9vciBiZXR0ZXIgaW4gcnVuIG1ldGhvZC5cbmFwcC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XG4gIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL2QxYnhoOHVhczFtbnc3LmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9lbWJlZC5qcz8nICsgRGF0ZS5ub3coKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2FsdG1lcmljcy5qcyBsb2FkZWQnKTtcbiAgfSk7XG59KTtcbiovXG5cblxuY2xhc3MgQWx0TWV0cmljQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkd2luZG93LCAkc2NvcGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtO1xuXG4gICAgc2VsZi5kb2kgPSAnJztcbiAgICBzZWxmLmlzYm4gPSAnJztcbiAgICBzZWxmLmlkID0gc2VsZi5ndWlkKCk7XG4gICAgc2VsZi5yZWNvcmRpZCA9ICcnO1xuXG5cbiAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEpIHtcbiAgICAgIHNlbGYucmVjb3JkaWQgPSBpdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xuICAgICAgaWYgKGl0ZW0ucG54LmFkZGF0YS5kb2kpIHtcbiAgICAgICAgc2VsZi5kb2kgPSBpdGVtLnBueC5hZGRhdGEuZG9pWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5wbnguYWRkYXRhLmlzYm4pIHtcbiAgICAgICAgc2VsZi5pc2JuID0gaXRlbS5wbnguYWRkYXRhLmlzYm5bMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy90aGlzIGlzIGEgd2F0Y2hlciBvbiB0aGUgbG9jYWwgc2NvcGUgYW5kIHdpbGwgdHJpZ2dlciBhbHRtZXRyaWNcbiAgICBsZXQgYWx0bWV0cmljV2F0Y2hlciA9ICRzY29wZS4kd2F0Y2goKCkgPT4ge1xuICAgICAgbGV0IGFsdG1ldHJpY0xvYWRlZCA9ICh0eXBlb2Ygd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdCkgPT09ICdmdW5jdGlvbic7XG4gICAgICBsZXQgaXNibkV4aXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhbHRtZXRyaWMtaXNibi0ke3NlbGYuaWR9YCkgIT0gbnVsbDtcbiAgICAgIGxldCBkb2lFeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWx0bWV0cmljLWRvaS0ke3NlbGYuaWR9YCkgIT0gbnVsbDtcbiAgICAgIGxldCBydW5UcmlnZ2VyID0gKCBhbHRtZXRyaWNMb2FkZWQgJiYgKGlzYm5FeGlzdHMgfHwgZG9pRXhpc3RzKSApO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHNlbGYuaWQsIGFsdG1ldHJpY0xvYWRlZCwgaXNibkV4aXN0cywgZG9pRXhpc3RzLCBydW5UcmlnZ2VyKTtcbiAgICAgIHJldHVybiBydW5UcmlnZ2VyO1xuICAgIH0sIChuLCBvKSA9PiB7XG4gICAgICBpZiAobiA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlciBhbHRtZXRyaWMgZm9yOlwiLCBzZWxmLnJlY29yZGlkKTtcbiAgICAgICAgJHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQoYCNhbHRtZXRyaWMtaXNibi0ke3NlbGYuaWR9YCk7XG4gICAgICAgICR3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KGAjYWx0bWV0cmljLWRvaS0ke3NlbGYuaWR9YCk7XG4gICAgICAgIGFsdG1ldHJpY1dhdGNoZXIoKTsgLy9kZXJlZ2lzdGVyIHdhdGNoZXJcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICBndWlkKCkge1xuICAgIGxldCBzNCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICB9O1xuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcbiAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG4gIH1cbn1cblxuQWx0TWV0cmljQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckd2luZG93JywgJyRzY29wZSddO1xuXG5leHBvcnQgbGV0IGFsdG1ldHJpY0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogQWx0TWV0cmljQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGFsdG1ldHJpY0hUTUxcbn1cbiIsIi8vZmFjZXRzLmZhY2V0LmZhY2V0X3NlYXJjaF9hbHNvXG5jbGFzcyBTZWFyY2hBbHNvQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCR0cmFuc2xhdGUsICRzY29wZSl7XG5cbiAgICAkc2NvcGUuJHdhdGNoKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xuICAgIH0sIChuLG8pID0+IHtcbiAgICAgIGlmIChuICE9IG8pIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLmZpbHRlcihmID0+IHtyZXR1cm4gZi5uYW1lID09ICdzZWFyY2hfYWxzbyd9KS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcbiAgICAgICAgICAgIGRpc3BsYXllZFR5cGU6ICdleGFjdCcsXG4gICAgICAgICAgICBsaW1pdENvdW50OiAwLFxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gIH1cbn1cblxuU2VhcmNoQWxzb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHRyYW5zbGF0ZScsICckc2NvcGUnXTtcblxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xuICBiaW5kaW5nczp7cGFyZW50Q3RybDonPCd9LFxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQ29udHJvbGxlclxufVxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXG5cbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XG4gICAgdGhpcy5sb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XG4gIH1cblxuICBnZXQgc2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5O1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0R3JvdXAubmFtZTtcbiAgfVxuXG4gIF90YXJnZXRzKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgXCJuYW1lXCI6IFwiU3dpc3NiaWJcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc3dpc3NiaWIuY2gvc2VhcmNoL3Jlc3VsdHM/Jmxvb2tmb3I9XCIsXG4gICAgICBcImltZ1wiOiBcImh0dHBzOi8vcHJpbW8tZGlyZWN0LWV1LXNiLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wcmltby1leHBsb3JlL2N1c3RvbS80MVpCTC9pbWcvc3dpc3NiaWJfaWNvbi5wbmdcIixcbiAgICAgIFwidG9vbHRpcFwiOiBcIm51aS5jdXN0b21pemluZy5pZHNsdS5zZWFyY2hfYWxzby50b29sdGlwLnN3aXNzYmliXCIsXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJHb29nbGUgU2Nob2xhclwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9zY2hvbGFyP3E9XCIsXG4gICAgICBcImltZ1wiOiBcImh0dHBzOi8vcHJpbW8tZGlyZWN0LWV1LXNiLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wcmltby1leHBsb3JlL2N1c3RvbS80MVpCTC9pbWcvZ29vZ2xlX2ljb24ucG5nXCIsXG4gICAgICBcInRvb2x0aXBcIjogXCJudWkuY3VzdG9taXppbmcuaWRzbHUuc2VhcmNoX2Fsc28udG9vbHRpcC5nb29nbGVfc2NvbGFyXCIsXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJXb3JsZGNhdFwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy53b3JsZGNhdC5vcmcvc2VhcmNoP3E9XCIsXG4gICAgICBcImltZ1wiOiBcImh0dHBzOi8vcHJpbW8tZGlyZWN0LWV1LXNiLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wcmltby1leHBsb3JlL2N1c3RvbS80MVpCTC9pbWcvd29ybGRjYXRfaWNvbi5wbmdcIixcbiAgICAgIFwidG9vbHRpcFwiOiBcIm51aS5jdXN0b21pemluZy5pZHNsdS5zZWFyY2hfYWxzby50b29sdGlwLndvcmxkY2F0XCIsXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xuICAgICAgICB2YXIgdHlwZV9tYXBwaW5ncyA9IHtcbiAgICAgICAgICBcImFueVwiOiBcImt3XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcInRpXCIsXG4gICAgICAgICAgXCJjcmVhdG9yXCI6IFwiYXVcIixcbiAgICAgICAgICBcInN1YmplY3RcIjogXCJzdVwiXG4gICAgICAgIH07XG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgXCJrd1wiO1xuICAgICAgICB2YXIgcXVlcnkgPSB0ZXJtc1syXSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gdHlwZSArICc6JyArIHF1ZXJ5O1xuXG4gICAgICB9XG4gICAgfV07XG4gIH1cbn1cblxuU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xuXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Cb2R5Q29uZmlnID0ge1xuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxufVxuIiwiaW1wb3J0IGJyb3dzZUJ1dHRvbkhUTUwgZnJvbSAnLi9icm93c2VCdXR0b24uaHRtbCdcblxuY2xhc3MgQnJvd3NlQnV0dG9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSwgJGNvbXBpbGUsICRzY29wZSkge1xuICAgIHRoaXMuc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLmNvbXBpbGUgPSAkY29tcGlsZTtcbiAgfVxuXG4gICRvbkluaXQoKSB7XG4gICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtc3dpdGNoLWJ1dHRvbnMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5jb21waWxlKGJyb3dzZUJ1dHRvbkhUTUwpKHRoaXMuc2NvcGUpKTsgICAgXG4gIH1cblxuICBzd2l0Y2hCcm93c2UoKSB7XG4gICAgdGhpcy5zdGF0ZS5nbygnZXhwbG9yZU1haW4uYnJvd3NlU2VhcmNoJywge3ZpZDogd2luZG93LmFwcENvbmZpZy52aWR9KTtcbiAgfVxufVxuXG5Ccm93c2VCdXR0b25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZScsICckY29tcGlsZScsICckc2NvcGUnXTtcblxuZXhwb3J0IGxldCBicm93c2VCdXR0b25Db25maWcgPSB7XG4gIGJpbmRpbmdzIDoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBCcm93c2VCdXR0b25Db250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImltcG9ydCBwbnhYbWxIVE1MIGZyb20gJy4vcG54WG1sLmh0bWwnXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gICRvbkluaXQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChob3RrZXlzKSB7XG4gICAgICBob3RrZXlzKFwiY3RybCtlbnRlclwiLCAoZSkgPT4ge1xuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xuXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncG54LXhtbC10cmlnZ2VyJyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7Ym90dG9tOjA7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDt6LWluZGV4OjEwMDA7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi4wMycpO1xuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcblxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG5cbiAgfVxufVxuXG5leHBvcnQgbGV0IHBueFhtbENvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHBueFhtbEhUTUxcbn1cbiIsImNsYXNzIEFsZXJ0TWVzc2FnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsIE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgTWVzc2FnZVNlcnZpY2Uuc2hvdygnJywgJHNjb3BlKTtcbiAgfVxufVxuXG5BbGVydE1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdNZXNzYWdlU2VydmljZSddO1xuXG5leHBvcnQgbGV0IGFsZXJ0TWVzc2FnZUNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxuICBjb250cm9sbGVyOiBBbGVydE1lc3NhZ2VDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImNsYXNzIEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihNZXNzYWdlU2VydmljZSwgJHRyYW5zbGF0ZSwgJHJvb3RTY29wZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvL1RPRE86ZXh0cmFjdCBodG1sIHRvIGl0cyBvd24gZmlsZS4gZmluZCBvdXQgaG93IHRvIHJlc29sdmUge3t9fVxuXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdudWkuY3VzdG9taXppbmcuaWRzbHUueW91SGF2ZUZpbmVzJyk7XG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IHBheSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbnVpLmN1c3RvbWl6aW5nLmlkc2x1LnlvdUhhdmVGaW5lcy5wYXknKTtcblxuICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGBcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiYWxpZ24tc2VsZjpjZW50ZXI7XCI+JHttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLXNlY3VuZGFyeVwiIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgaHJlZj0nIyc+JHtwYXl9PC9hPlxuICAgICAgICAgIGApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbkZpbmVzTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnTWVzc2FnZVNlcnZpY2UnLCAnJHRyYW5zbGF0ZScsICckcm9vdFNjb3BlJ107XG5cbmV4cG9ydCBsZXQgZmluZXNNZXNzYWdlQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBGaW5lc01lc3NhZ2VDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImltcG9ydCBzZnhMaW5rc0hUTUwgZnJvbSAnLi9zZnhMaW5rcy5odG1sJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuLi8uLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlcidcblxuY2xhc3MgU2Z4TGlua3NDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XG4gICAgLy9zZWxmLml0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtO1xuICAgIGxldCBjb250YWluZXJzID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcicpO1xuICAgIGlmIChjb250YWluZXJzICYmIGNvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgc2VsZi5pdGVtID0gY29udGFpbmVyc1swXS5jdHJsKCkuaXRlbTtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLml0ZW0pO1xuICAgIH1cbiAgICBzZWxmLnRhcmdldHMgPSB7fTtcbiAgICBzZWxmLnVwZGF0ZVRhcmdldHNXaGVuT3BlblVSTEF2YWlsYWJsZSgpO1xuICB9XG5cbiAgdXBkYXRlVGFyZ2V0c1doZW5PcGVuVVJMQXZhaWxhYmxlKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgd2F0Y2hlciA9IHNlbGYuc2NvcGUuJHdhdGNoKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxmLm9wZW51cmwgJiYgc2VsZi5vcGVudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgKG4sIG8pID0+IHtcbiAgICAgIGlmIChuID09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi50YXJnZXRzVXJscyk7XG4gICAgICAgIHNlbGYudGFyZ2V0c1VybHMuZm9yRWFjaCh0YXJnZXRzVXJsID0+IHtcbiAgICAgICAgICBIZWxwZXIuaHR0cC5nZXQodGFyZ2V0c1VybCkudGhlbihyYXdUYXJnZXRzID0+IHtcbiAgICAgICAgICAgIGlmIChyYXdUYXJnZXRzLmRhdGEgJiYgcmF3VGFyZ2V0cy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZWxmLnRhcmdldHMsIHNlbGYubm9ybWFsaXplVGFyZ2V0cyhyYXdUYXJnZXRzLmRhdGEpKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzID0gZGF0YTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3YXRjaGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBub3JtYWxpemVUYXJnZXRzKHRhcmdldHMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG5vcm1hbGl6ZWRUYXJnZXRzID0ge307XG5cbiAgICB0YXJnZXRzLnJlZHVjZSgodCwgYykgPT4ge1xuICAgICAgbGV0IGQgPSB0Lmhhc093blByb3BlcnR5KGMuZmFjaWxpdHkpID8gdFtjLmZhY2lsaXR5XSA6IFtdO1xuICAgICAgZC5wdXNoKGMpO1xuICAgICAgdFtjLmZhY2lsaXR5XSA9IGQ7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LCBub3JtYWxpemVkVGFyZ2V0cyk7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFRhcmdldHM7XG4gIH1cblxuICBnZXQgdGFyZ2V0c1VybHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BlbnVybC5tYXAobSA9PiAoYCR7dGhpcy5sb29rdXBVUkx9P3R5cGU9dGFyZ2V0cyZzb3VyY2VVUkw9JHtlbmNvZGVVUklDb21wb25lbnQobSl9JnByb3h5U3VmZml4PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucHJveHlTdWZmaXgpfWApKTtcbiAgfVxuXG4gIGdldCBvcGVudXJsKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGlmIChzZWxmLml0ZW0gJiYgc2VsZi5pdGVtLmRlbGl2ZXJ5KSB7XG4gICAgICBsZXQgb3BlblVybExpc3QgPSBzZWxmLml0ZW0uZGVsaXZlcnkubGluay5maWx0ZXIoZiA9PiAvXm9wZW51cmwvLnRlc3QoZi5kaXNwbGF5TGFiZWwpKS5tYXAobSA9PiBtLmxpbmtVUkwpO1xuICAgICAgaWYgKG9wZW5VcmxMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGlzdC5wdXNoKG9wZW5VcmxMaXN0WzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5saW5rRWxlbWVudCkgeyAgICAgIFxuICAgICAgbGV0IG9wZW5VcmxMaXN0ID0gc2VsZi5pdGVtLmxpbmtFbGVtZW50LmxpbmtzLmZpbHRlcihmID0+IC9eb3BlbnVybC8udGVzdChmLmRpc3BsYXlUZXh0KSkubWFwKG0gPT4gbS5saW5rKTtcbiAgICAgIGlmIChvcGVuVXJsTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxpc3QucHVzaChvcGVuVXJsTGlzdFswXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBnZXQgcHJveHlTdWZmaXgoKSB7XG4gICAgbGV0IGN1cnJlbnRIb3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgbGV0IHByb3h5U3VmZml4ID0gJyc7XG4gICAgaWYgKGN1cnJlbnRIb3N0Lm1hdGNoKC9leGxpYnJpc2dyb3VwLmNvbS9nKSAhPSBudWxsKSB7XG4gICAgICBwcm94eVN1ZmZpeCA9IGN1cnJlbnRIb3N0LnJlcGxhY2UoLy4rXFwuZXhsaWJyaXNncm91cFxcLmNvbS9nLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3h5U3VmZml4O1xuICB9XG5cbiAgZ2V0IGxvb2t1cFVSTCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyAnLy9wcmltby5hZHZlc3RhLmNvbS9pbmRleC5waHAnO1xuICB9XG59XG5cblNmeExpbmtzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuZXhwb3J0IGxldCBzZnhMaW5rc0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogU2Z4TGlua3NDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogc2Z4TGlua3NIVE1MXG59XG4iLCJpbXBvcnQgbWVzc2FnZVNlcnZpY2VIVE1MIGZyb20gJy4vbWVzc2FnZVNlcnZpY2UuaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICRzY2UsICR0cmFuc2xhdGUsICR0aW1lb3V0KSB7XG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XG4gICAgdGhpcy5zY2UgPSAkc2NlO1xuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcbiAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcbiAgICB0aGlzLmNvbXBpbGUgPSAkY29tcGlsZTtcbiAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gIH1cblxuICBzaG93KG1lc3NhZ2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgbnVsbDtcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXkgfHwgMDtcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgbnVsbDtcbiAgICBsZXQgYWN0aW9uTGFiZWwgPSBvcHRpb25zLmFjdGlvbkxhYmVsIHx8ICd1bmtub3duJztcblxuICAgIHRoaXMudGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIC8vIGNvZGUgdGFibGUgZW50cmllcyBjYW4gbm90IGhhdmUgZW1wdHkgZGVzY3JpcHRpb25zLlxuICAgICAgICAvLyBtZXNzYWdlIDw9IDEgd2lsbCBub3QgYmUgZGlzcGxheWVkISEhIVxuICAgICAgICBsZXQgbWVzc2FnZUtleSA9ICdudWkuY3VzdG9taXppbmcuaWRzbHUuYWxlcnRNZXNzYWdlJztcbiAgICAgICAgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQobWVzc2FnZUtleSk7XG4gICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSA9PSBtZXNzYWdlS2V5IHx8IG1lc3NhZ2UgPD0gMSkgPyAnJyA6IG1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xuICAgICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcblxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLm9uQWN0aW9uID0gKCRldmVudCA9IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNlbGYucm9vdFNjb3BlKS5odG1sKCkpO1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2NvcGUpLmh0bWwoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxuICAgICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gbWVzc2FnZSB0byBkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxufVxuXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xuIiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xuaW1wb3J0IEZhY2V0cyBmcm9tICcuL3ByaW1vL2ZhY2V0cydcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby9leHBsb3JlL2hlbHBlcidcblxuLyoqXG4gKiBQcmltbyBtYWluIGVudHJ5IGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcbiAgLyoqXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC4xMFwiO1xuICAgIHJldHVybiBgTGlicmFyeToke192ZXJzaW9ufSAtIFByaW1vOiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19WZXJzaW9uX051bWJlcn06JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX0hvdEZpeF9OdW1iZXJ9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpZCB0aGUgc2NyaXB0IHJhbiBvbiBhIFByaW1vIHNpdGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcm94eSBjbGFzc1xuICAgKiBAcmV0dXJuIHtFeHBsb3JlfVxuICAgKi9cbiAgc3RhdGljIGdldCBleHBsb3JlKCkge1xuICAgIHJldHVybiBFeHBsb3JlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcbiAgICogQHJldHVybiB7UmVjb3Jkc31cbiAgICovXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgZmFjZXRzXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cbiAgICovXG4gIHN0YXRpYyBnZXQgZmFjZXRzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byB2aWV3IHJlbGF0ZWQgbWV0YWRhdGFcbiAgICogQHJldHVybiB7Vmlld31cbiAgICovXG4gIHN0YXRpYyBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBWaWV3KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcbiAgICogQHJldHVybiB7VXNlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSGVscGVyLnVzZXJEZXRhaWxzSFRUUCgpLnRoZW4oKHVzZXJEZXRhaWxzKT0+e1xuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xuICAgICAgICAgIEhlbHBlci51c2VyTG9hbnNIVFRQKCkudGhlbigodXNlckxvYW5zKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUobmV3IFVzZXIoe2RldGFpbHM6IHVzZXJEZXRhaWxzLCBmaW5lczogdXNlckZpbmVzLCBsb2FuczogdXNlckxvYW5zfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuLy90aGlzIGlzIHByb3h5IGNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3JlIHtcbiAgc3RhdGljIGdldCBjb21wb25lbnRzKCkge1xuICAgIGxldCBjID0gbmV3IENvbXBvbmVudHMoKTtcbiAgICBIZWxwZXIuY29tcG9uZW50TmFtZXMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgIGMuYWRkKHNlbGVjdG9yKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHVpKCkge1xuICAgIGlmICh0aGlzLl91aSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGlzIGlzIGEgc3R1YiBmdW5jdGlvbiBjYWxsIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiB0byBhY3RpdmF0ZSBVSScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdWk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGhlbHBlcigpIHtcbiAgICByZXR1cm4gSGVscGVyO1xuICB9XG59XG4iLCJ2YXIgY3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBuZXcocmVxdWlyZSgnLi4vLi4vdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMnKSkuQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG5cbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInXG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBibGluaygpe1xuICAgIEhlbHBlci5ibGluayh0aGlzKTtcbiAgfVxuXG4gIGdldCBjc3NQYXRoKCl7XG4gICAgcmV0dXJuIGNzc1NlbGVjdG9yR2VuZXJhdG9yLmdldFNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXQgbmFtZSgpe1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubG9jYWxOYW1lO1xuICB9XG5cbiAgc2NvcGUoKXtcbiAgICBpZiAoSGVscGVyLmlzRGVidWdFbmFibGVkKCkpe1xuICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLnNjb3BlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBydW4gXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIGZpcnN0Jyk7XG4gICAgfVxuICB9XG5cbiAgY3RybCgpe1xuICAgIGxldCBjID0gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuY29udHJvbGxlcih0aGlzLm5hbWUpO1xuICAgIGlmIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3VzaW5nIGFsdGVybmF0aXZlIG1ldGhvZCB0byBnZXQgY29udHJvbGxlcicpO1xuICAgICAgbGV0IHNjb3BlID0gdGhpcy5zY29wZSgpO1xuICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgIGxldCBzY29wZUNoaWxkID0gc2NvcGUuJCRjaGlsZFRhaWw7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJyRjdHJsJykpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZS4kY3RybFxuICAgICAgICB9IGVsc2UgaWYoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCdjdHJsJykpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5jdHJsXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnJGN0cmwnKSl7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC4kY3RybDtcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCdjdHJsJykpe1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuY3RybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vICRjdHJsIGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gIH1cblxuICBhZGQoc2VsZWN0b3IpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgbGV0IGVsZW1lbnRzQXJyYXkgPSB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBbXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XG4gICAgICBlbGVtZW50c0FycmF5LnB1c2gobmV3IENvbXBvbmVudChlbGVtZW50KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSA9IGVsZW1lbnRzQXJyYXk7XG5cbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcbiAgfVxuXG4gIGdldChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAga2V5cygpe1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICAgIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcbiAgICAgICAgICAgIGlmICgvXnBybS0vLnRlc3QodGFnTmFtZSkgfHwgL15wcmltby0vLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluamVjdG9yKCkge1xuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlID0gYW5ndWxhci5lbGVtZW50KGNbMF0uZWxlbWVudCk7XG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xuICAgICAgICAgIGlmIChpbmplY3Rvcil7XG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3I7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XG4gICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XG4gICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcbiAgICAgIGlmICh3aW5kb3cuYW5ndWxhcikge1xuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xuICAgICAgICAgICAgICBsZXQgYW5ndWxhckxvYWQgPSBhcHBJbmplY3Rvci5nZXQoJ2FuZ3VsYXJMb2FkJyk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcbiAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcbiAgICAgICAgICBpZiAocm9vdFNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XG4gICAgICBsZXQgcm9vdFNjb3BlID0gdGhpcy5yb290U2NvcGUoKTtcbiAgICAgIGlmIChyb290U2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgand0RGF0YSgpIHtcbiAgICAgIGxldCB1U01TID0gdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgICBpZiAodVNNUykge1xuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XG4gICAgICAgIHJldHVybiBqd3REYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLiRsb2NhbEZvcmFnZS5nZXRJdGVtKCd1c2VyRGV0YWlscycpLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckZpbmVzLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmVzLmZpbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJMb2Fucy5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2Fucy5sb2FuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBudWxsO1xuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcbiAgICAgICAgbGV0IGJvcmRlclNlbGVjdG9yID0gY29tcG9uZW50LmVsZW1lbnQuY3NzUGF0aCArIGluZGV4ICsgJ1JlY3QnO1xuXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUud2lkdGggPSBlbGVtZW50UmVjdC53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xuICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG5cbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGJsaW5rQm9yZGVyRWxlbWVudCwgMTAwMCwgbnVtYmVyT2ZCbGlua3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBfZmFjZXRzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLWZhY2V0LWFmdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5mYWNldHM7XG4gICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcbiAgICB9XG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGl0ZW1zJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXG4gICAgICAgIG5hbWU6IGp3dERhdGEudXNlck5hbWUgfHwgJ0d1ZXN0JyxcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcbiAgICAgICAgaXNPbkNhbXB1czogKCkgPT4gand0RGF0YS5vbkNhbXB1cyA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXG4gICAgICB9O1xuICB9XG5cbiAgZ2V0IF9za2VsVXNlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV0YWlsczoge30sXG4gICAgICBmaW5lczoge30sXG4gICAgICBsb2Fuczoge31cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxuICAgICAgICBpbnN0aXR1dGlvbjoge1xuICAgICAgICAgICAgY29kZTogand0RGF0YS52aWV3SW5zdGl0dXRpb25Db2RlLFxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGludGVyZmFjZUxhbmd1YWdlOiB1U21zLmdldFVzZXJMYW5ndWFnZSgpIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZSxcbiAgICAgICAgaXA6IHtcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcbiAgICBpbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmRlZmF1bHRfb3B0aW9ucyA9IHtcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5zZXRPcHRpb25zKHRoaXMuZGVmYXVsdF9vcHRpb25zKTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5pc0VsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB3aGlsZSAodGhpcy5pc0VsZW1lbnQoY3VycmVudF9lbGVtZW50KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplSXRlbShlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zYW5pdGl6ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgY2hhcmFjdGVycztcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJzonKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoYXJhY3RlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGlkLCBzYW5pdGl6ZWRfaWQ7XG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcbiAgICAgICAgc2FuaXRpemVkX2lkID0gXCIjXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaWQpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjbGFzc19zdHJpbmcsIGl0ZW0sIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9IG51bGwpIHtcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XG4gICAgICAgIGlmIChjbGFzc19zdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICAgICAgcmVmID0gY2xhc3Nfc3RyaW5nLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IHJlZltrXTtcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJbXCIgKyBhdHRyaWJ1dGUubm9kZU5hbWUgKyBcIj1cIiArIGF0dHJpYnV0ZS5ub2RlVmFsdWUgKyBcIl1cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXROdGhDaGlsZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpZiAocGFyZW50X2VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSBzaWJsaW5ncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XG4gICAgICBpc191bmlxdWUgPSBmYWxzZTtcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgcmVzdWx0WzBdID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHQ6IG51bGwsXG4gICAgICAgIGk6IG51bGwsXG4gICAgICAgIGM6IG51bGwsXG4gICAgICAgIGE6IG51bGwsXG4gICAgICAgIG46IG51bGxcbiAgICAgIH07XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xuICAgICAgdmFyIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcmVmLCByZWYxO1xuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGl0ZW0gPSByZWZba107XG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xuICAgICAgICByZWYxID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobCA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XG4gICAgICBzZWxlY3RvcnMgPSB0aGlzLmdldEFsbFNlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgc2VsZWN0b3JfdHlwZSA9IHJlZltrXTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5pICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIHNlbGVjdG9ycy50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYyAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmEsIHNlbGVjdG9ycy50KTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdudGhjaGlsZCc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnKic7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcbiAgICAgIHBhcmVudHMgPSB0aGlzLmdldFBhcmVudHMoZWxlbWVudCk7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuZ2V0VW5pcXVlU2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0b3JzID0gW107XG4gICAgICBmb3IgKGwgPSAwLCBsZW4xID0gYWxsX3NlbGVjdG9ycy5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICByZXN1bHQgPSBzZWxlY3RvcnMuam9pbignID4gJyk7XG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgdmFyIGksIGosIGssIGwsIHJlZiwgcmVmMSwgcmVzdWx0O1xuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IFtbXV07XG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcbiAgICAgICAgZm9yIChqID0gbCA9IDAsIHJlZjEgPSByZXN1bHQubGVuZ3RoIC0gMTsgMCA8PSByZWYxID8gbCA8PSByZWYxIDogbCA+PSByZWYxOyBqID0gMCA8PSByZWYxID8gKytsIDogLS1sKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQuc2hpZnQoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5qb2luKCcnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xuXG4gIH0pKCk7XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsID8gZGVmaW5lLmFtZCA6IHZvaWQgMCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcbiAgICByb290LkNzc1NlbGVjdG9yR2VuZXJhdG9yID0gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG4gIEdlbmVyYWwgXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcbn1cbiIsIi8qXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcblxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgUHJpbW8gZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltbydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlcidcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcblxuaW1wb3J0IE1lc3NhZ2VTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlJ1xuXG5pbXBvcnQgbG9jYXRpb25JdGVtc0hUTUwgZnJvbSAnY29tcG9uZW50cy9wcm1Mb2NhdGlvbkl0ZW1zL2xvY2F0aW9uLWl0ZW1zLmh0bWwnXG5cbi8vbWFrZSBQcmltbyBwdWJsaWNcbndpbmRvdy5QcmltbyA9IFByaW1vO1xuLy9sb2FkIFByaW1vRXhwbG9yZXIgVUkgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaXMgcmFuXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcbiAgICBsZXQgdWlVUkwgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtZG9tLXVpL2ZjMDg2OGRmL2pzL2N1c3RvbS5qcyc7XG5cbiAgICBIZWxwZXIubG9hZFNjcmlwdCh1aVVSTCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0aW5nIFVJJyk7XG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xuICAgIH0pO1xuICB9XG59LCAyMDAwKTtcblxuLy8gc3RhbmRhcmQgZ29vZ2xlIGFuYWx5dGljcyB0cmFja2luZyBjb2RlXG4oZnVuY3Rpb24gKGksIHMsIG8sIGcsIHIsIGEsIG0pIHtcbiAgaVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J10gPSByO2lbcl0gPSBpW3JdIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAoaVtyXS5xID0gaVtyXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cyk7XG4gIH0sIGlbcl0ubCA9IDEgKiBuZXcgRGF0ZSgpO2EgPSBzLmNyZWF0ZUVsZW1lbnQobyksIG0gPSBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmMgPSAxO2Euc3JjID0gZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIG0pO1xufSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCAnZ2EnKTtcblxuZ2EoJ2NyZWF0ZScsICdVQS0yMjE2MjM5MC0xMycsICdhdXRvJyk7XG5nYSgnc2VuZCcsICdwYWdldmlldycpO1xuXG4vL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NlbnRyYWxDdXN0b20nLFsnbmdNYXRlcmlhbCddKVxuICAgICAgICAgICAgICAgICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcbiAgICAgICAgICAgICAgICAgLmNvbmZpZygoJHNjZURlbGVnYXRlUHJvdmlkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAnKionXG4gICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL2hvdGtleXMtanNAMi4wLjgvZGlzdC9ob3RrZXlzLm1pbi5qcycpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdob3RrZXlzLmpzIGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2VtYmVkLmpzPycgKyBEYXRlLm5vdygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzLmpzIGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vcmVjb21tZW5kZXIuYmlidGlwLmRlL2pzL2JpYnRpcF96aGJfbHV6ZXJuLmpzJykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JpYnRpcC5qcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfSkucnVuKFsnJHJvb3RTY29wZScsICckbG9jYXRpb24nLCAnJHdpbmRvdycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICR3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAvL3NlbmQgdG8gR0EgZXZlcnkgdGltZSB0aGUgVVJMIGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5nYSgnc2VuZCcsICdwYWdldmlldycsIHsgbG9jYXRpb246ICRsb2NhdGlvbi51cmwoKSB9KTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgIC5zZXJ2aWNlKCdNZXNzYWdlU2VydmljZScsIE1lc3NhZ2VTZXJ2aWNlKVxuICAgICAgICAgICAgICAgICAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvZnVsbFZpZXcvZ2V0aXQvb3BhYy9sb2NhdGlvbnMvbG9jYXRpb24taXRlbXMuaHRtbCcsIGxvY2F0aW9uSXRlbXNIVE1MKTtcbiAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxuICBpZiAoY29tcG9uZW50LmVuYWJsZWQpIHtcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICAgIC8vZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XG4gICAgICBlbGVtZW50cy5wdXNoKHsgJ25hbWUnOiBjb21wb25lbnQubmFtZSwgJ2VuYWJsZUluVmlldyc6IGNvbXBvbmVudC5lbmFibGVJblZpZXcgfSk7XG4gICAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xuXG4gICAgfVxuICAgIGFwcC5jb25zdGFudCgnYWZ0ZXJDb21wb25lbnRzJywgYWZ0ZXJDb21wb25lbnRzKTtcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xuICB9XG59KTtcblxuXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LGkpID0+IHtcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcblxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XG4gICAgYmluZGluZ3M6e1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxuICB9KTtcbn0pO1xuIl19
