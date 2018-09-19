(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        enabled: false,
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

var libInfoHTML = '<a href="http://primo.advesta.com/index.php?type=getLibURL&sourceURL={{$ctrl.sourceURL}}" target="_blank">\n  <img ng-src="{{$ctrl.iconUrl}}" title="{{(\'nui.customizing.idslu.informationtooltip\' | translate)}}" border="0">\n</a>\n';

var LibInfoController = function () {
  function LibInfoController($translate) {
    _classCallCheck(this, LibInfoController);

    var self = this;
    self.translate = $translate;
    self.iconUrl = '/custom/' + window.appConfig.vid + '/img/information.png';

    self.translate('nui.customizing.idslu.informationicon').then(function (iconUrl) {
      if (iconUrl !== 'informationicon') {
        self.iconUrl = iconUrl;
      }
    });
  }

  _createClass(LibInfoController, [{
    key: 'sourceURL',
    get: function get() {
      return encodeURIComponent('http://ilu.zhbluzern.ch/F?func=library&sub_library=' + this.locationCode);
    }
  }]);

  return LibInfoController;
}();

LibInfoController.$inject = ['$translate'];

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
var locationLinksHTML = '<zbl-link class="idslu-p-help" url="{{(\'nui.customizing.idslu.phelpurl\' | translate)}}" text="{{(\'nui.customizing.idslu.phelptext\' | translate)}}"></zbl-link>\n<zbl-link class="idslu-libraries" url="{{(\'nui.customizing.idslu.librariesurl\' | translate)}}" text="{{(\'nui.customizing.idslu.librariestext\' | translate)}}"></zbl-link>\n<zbl-link class="idslu-closures" url="{{(\'nui.customizing.idslu.closuresurl\' | translate)}}" text="{{(\'nui.customizing.idslu.closurestext\' | translate)}}"></zbl-link>\n';
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

var vScoutHTML = '<a ng-if="$ctrl.showVScout" href="{{$ctrl.url}}" target="_blank">\n  <img ng-src={{$ctrl.iconUrl}} border="0" title="{{(\'nui.customizing.idslu.vscouttooltip\' | translate)}}" />\n</a>\n';

var VScoutController = function () {
  function VScoutController($translate) {
    _classCallCheck(this, VScoutController);

    var self = this;
    self.translate = $translate;
    self.iconUrl = '/custom/' + window.appConfig.vid + '/img/map-marker.png';
    self.translate('nui.customizing.idslu.vscouticon').then(function (iconUrl) {
      if (iconUrl !== 'vscouticon') {
        self.iconUrl = iconUrl;
      }
    });
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

VScoutController.$inject = ['$translate'];

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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="idslu-furthersearch">\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\n    <div class="section-content animate-max-height-variable">\n      <div class="md-chips md-chips-wrap">\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\n            <strong dir="auto" title="{{ target.name }}">\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\n              </a>\n            </strong>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

var SearchAlsoBodyController = function () {
  function SearchAlsoBodyController($location) {
    _classCallCheck(this, SearchAlsoBodyController);

    this.location = $location;
    this.targets = this._targets();
  }

  _createClass(SearchAlsoBodyController, [{
    key: '_targets',
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
    key: 'search',
    get: function get() {
      return this.location.search().query || '';
    }
  }, {
    key: 'name',
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

var browseButtonHTML = '<md-button aria-label="Browse"\n           class="zbl-browse-button zero-margin button-with-icon md-button md-primoExplore-theme md-ink-ripple"\n           ng-click="$ctrl.switchBrowse()">\n           <span layout="row" layout-align="start center">\n             <span translate=\'nui.customizing.idslu.browse\'></span>\n           </span>\n</md-button>\n';

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

var sfxLinksHTML = '<div class="sfx-links" ng-repeat="(targetFacility, normalizedTargets) in $ctrl.targets">\n  <p class="fulltext-item sfx-links-facility">\n      <span translate="nui.customizing.idslu.sfxlinks.campusnet"></span> {{targetFacility}}\n  </p>\n  <div ng-repeat="target in normalizedTargets">\n    <p class="fulltext-item sfx-links-target">\n      <span translate="nui.customizing.idslu.sfxlinks.fulltext_through"></span>\n      <a href="{{target.target_url_proxy}}" target="_blank">{{(target.target_name | translate)}}</a>\n    </p>\n  </div>\n</div>\n\n<p class="fulltext-item sfx-links-on-campus">\n  <span translate="nui.customizing.idslu.sfxlinks.on_campus"></span>\n  <span class="sfx-links-on-campus-url">\n        <a href="http://www.zhbluzern.ch/index.php?id=3992" target="_blank">\n        <span translate="nui.customizing.idslu.sfxlinks.external_campus_access"></span>\n  </a>\n  </span>\n\n  <zbl-link class="idslu-ehelp" url="{{(\'nui.customizing.idslu.ehelpurl\' | translate)}}" text="{{(\'nui.customizing.idslu.ehelptext\' | translate)}}"></zbl-link>\n  <zbl-link class="idslu-feedback" url="{{(\'nui.customizing.idslu.feedbackurl\' | translate)}}" text="{{(\'nui.customizing.idslu.feedbacktext\' | translate)}}"></zbl-link>\n</p>\n';

/**
 * Controller class to find and parse sfx resources
 * @class
 */
var SfxLinksController = function () {
  function SfxLinksController($scope, $translate) {
    _classCallCheck(this, SfxLinksController);

    var self = this;
    self.scope = $scope;
    self.translate = $translate;
    self.targets = {};
  }

  /**
   * Lifecyle hook for AngularJS
   * Wait for all components are rendered and linked before we lookup and inject the SFX links
   */


  _createClass(SfxLinksController, [{
    key: '$postLink',
    value: function $postLink() {
      var self = this;
      var containers = Primo.explore.components.get('prm-full-view-service-container');
      if (!self.item && containers && containers.length > 0) {
        self.item = containers[containers.length - 1].ctrl().item;
      }

      if (!self.item && angular.element(document.querySelector('prm-full-view-service-container'))) {
        self.item = angular.element(document.querySelector('prm-full-view-service-container')).controller('prm-full-view-service-container').item;
      }

      Primo.view.then(function (v) {
        self.ipAddress = v.ip.address;
        self.updateTargetsWhenOpenURLAvailable();
      });
    }

    /**
     * Wait for openurl method to find data in item.delivery.link or item.linkElement.links
     * Then extract, resolve and normalize the openURL
     */

  }, {
    key: 'updateTargetsWhenOpenURLAvailable',
    value: function updateTargetsWhenOpenURLAvailable() {
      var _this = this;

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
          //Resolve target urls extracted from the openURL
          _this.resolveAndNormalizeTargetUrls(self);

          //Normalize GetIt1 links REMARK: not sure if we should resolve these if target URLs exist
          _this.findGetIt1TargetUrlsAndNormalize(self);

          watcher();
        }
      });
    }

    /**
     * Get GetIt1 urls from self.item.delivery, filter for online or remote resources
     * and normalize the data
     * @param {context} self 
     */

  }, {
    key: 'findGetIt1TargetUrlsAndNormalize',
    value: function findGetIt1TargetUrlsAndNormalize(self) {
      var getItData = (self.item.delivery.GetIt1.filter(function (f) {
        return (/^online resource|remote search resource/i.test(f.category.toLowerCase())
        );
      }).map(function (m) {
        return m.links;
      })[0] || []).map(function (m) {
        var targetName = m.displayText;
        //let translatedFacility = `nui.getit_full.${m.hyperlinkText}`;

        var facility = self.item.pnx.display.source.map(function (m) {
          var f = m.match(/\$\$V(.*)\$\$O/);
          if (!f) {
            f = m;
          } else {
            f = f[1];
          }
          return f;
        }).join(" / ") || '';

        if (/\$\$E/.test(targetName)) {
          targetName = 'fulldisplay.' + targetName.match(/\$\$E(.*)/)[1].trim();
        }
        if (/Campusnetz .*?:<\/b><br ?\/>(.*)/.test(targetName)) {
          targetName = targetName.match(/Campusnetz .*?:<\/b><br ?\/>(.*)/)[1].trim();
        }
        if (/Campusnetz (.*?):/.test(facility)) {
          facility = facility.match(/Campusnetz (.*?):/)[1].trim();
        }
        if (/nicht am campus/i.test(targetName)) {
          return null;
        }

        return {
          target_url: m.link,
          facility: facility,
          target_name: targetName
        };
      }).filter(function (f) {
        return f !== null;
      });

      if (getItData) {
        getItData.forEach(function (getIt) {
          if (/sfx/.test(getIt.target_url)) {
            _helper2.default.http.get(lookupURL, {
              headers: {
                'Access-Control-Allow-Origin': '*'
              },
              params: {
                ip: self.ipAddress,
                url: getIt.target_url
              }
            }).then(function (rawTargets) {
              var data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
              if (data) {
                console.log('Adding target link from GetIt1');
                self.targets = data;
              }
            }).catch(function (e) {
              console.log(e);
            });
          } else {
            var data = Object.assign({}, self.targets, self.normalizeTargets([getIt]));
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

  }, {
    key: 'resolveAndNormalizeTargetUrls',
    value: function resolveAndNormalizeTargetUrls(self) {
      self.targetsUrls.forEach(function (targetsUrl) {
        _helper2.default.http.get(targetsUrl).then(function (rawTargets) {
          if (rawTargets.data && rawTargets.data.length > 0) {
            var data = Object.assign({}, self.targets, self.normalizeTargets(rawTargets.data));
            if (data) {
              console.log('Adding target link from OpenUrl');
              self.targets = data;
            }
          }
        });
      });
    }
  }, {
    key: 'reClassify',
    value: function reClassify(facility, targetName, targetUrl) {
      console.log(targetUrl);
      if (/http:\/\/site.ebrary.com\/lib\/zhbluzern\//.test(targetUrl)) {
        facility = 'ZHB / Uni / PH';
        targetName = 'Ebrary';
        targetUrl = targetUrl;
      } else if (/www.dibizentral.ch/.test(targetUrl)) {
        facility = '';
        targetName = 'DiBiZentral';
        targetUrl = targetUrl;
        //} else if (/univportal.naxosmusiclibrary.com/.test(targetUrl)) {
      } else if (/naxosmusiclibrary.com/.test(targetUrl)) {
        facility = 'HSLU';
        targetName = 'Naxos Music Library';
        targetUrl = targetUrl;
      } else if (/imslp.org/.test(targetUrl)) {
        facility = '';
        targetName = 'International Music Score Library Project';
        targetUrl = targetUrl;
      } else if (/rzblx10.uni-regensburg.de/.test(targetUrl)) {
        facility = 'ZHB / Uni / PH';
        targetName = 'Datenbank-Infosystem';
        targetUrl = targetUrl;
      }

      return {
        target_url: targetUrl,
        facility: facility,
        target_name: targetName
      };
    }

    /**
     * Normalize all targetUrls. 
     * Group them together on facility and create proxy urls
     * @param {arrar of targetUrls} targets 
     */

  }, {
    key: 'normalizeTargets',
    value: function normalizeTargets(targets) {
      var _this2 = this;

      var self = this;
      var normalizedTargets = {};

      if (targets) {
        targets.reduce(function (t, c) {
          c = self.reClassify(c.facility, c.target_name, c.target_url);

          var d = t.hasOwnProperty(c.facility) ? t[c.facility] : [];
          c['target_url_proxy'] = _this2.proxyUrl(c['target_url'], c.facility);
          d.push(c);
          t[c.facility] = d;

          return t;
        }, normalizedTargets);
      }
      return normalizedTargets;
    }

    /**
     * Prepare for openURL lookup on sfxService from advesta
     */

  }, {
    key: 'proxyUrl',


    /**
     * Proxy urls and cleanup in needed.
     * When url belongs to a proxyable facility
     * @param {string} url   
     * @param {string} facility 
     */
    value: function proxyUrl(url, facility) {
      var currentHost = window.location.host;
      var ip = this.ipAddress.split('.');
      var inRange = ip[0] == '147' && ip[1] == '88' && parseInt(ip[2], 10) >= 207 && parseInt(ip[2], 10) <= 254 ? true : false;

      url = url ? url.replace(/^https:\/\/ezproxy.unilu.chhttp/, 'https://ezproxy.unilu.ch/login?url=http') : '';

      //if (!/ezproxy.unilu.ch/.test(currentHost) && /zhb|uni|ph/.test(facility.toLowerCase()) && !inRange) {
      //if (/zhb|uni|ph/.test(facility.toLowerCase())) {
      if (/zhb|uni|ph/.test(facility.toLowerCase()) && /ezproxy.unilu.ch/.test(currentHost)) {
        return 'https://ezproxy.unilu.ch/login?url=' + url;
      }

      if (/zhb|uni|ph/.test(facility.toLowerCase()) && /ezpublic.unilu.ch/.test(currentHost)) {
        return 'https://ezpublic.unilu.ch/login?url=' + url;
      }

      return url;
    }
  }, {
    key: 'targetsUrls',
    get: function get() {
      var _this3 = this;

      //return this.openurl.map(m => (`${this.lookupURL}?type=targets&sourceURL=${encodeURIComponent(m)}&proxySuffix=${encodeURIComponent(this.proxySuffix)}`));
      return this.openurl.map(function (m) {
        return _this3.lookupURL + '?ip=' + _this3.ipAddress + '&url=' + encodeURIComponent(m);
      });
    }

    /**
     * Extract all openURLs from item.delivery.link and item.linkElement.links
     */

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
          list = list.concat(openUrlList);
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
          list = list.concat(_openUrlList);
        }
      }

      return list;
    }
  }, {
    key: 'lookupURL',
    get: function get() {
      return 'https://libis.celik.be';
      //return 'http://127.0.0.1:3000';
    }
  }]);

  return SfxLinksController;
}();

SfxLinksController.$inject = ['$scope', '$translate'];

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
var locationHTML = '<div class="neutralized-button layout-full-width layout-display-flex md-button" tabindex="0" layout="flex" ng-click="$ctrl.onClick()" aria-label="{{$ctrl.location.librarycodeTranslation}} {{$ctrl.location.subLocation | translate}},\n                        {{\'fulldisplay.availabilty.\' + $ctrl.location.availabilityStatus | translate}},\n                         {{$ctrl.getButtonActionLabel() | translate}}" md-ink-ripple="red">\n  <div layout="row" flex="100" layout-align="space-between center">\n    <div class="md-list-item-text" layout="row" layout-wrap flex>\n      <div flex flex-xs="100">\n        <h3 ng-if="$ctrl.location && $ctrl.getLibraryName($ctrl.location)">\n          <span>{{$ctrl.location.librarycodeTranslation}}</span>\n          <zbl-lib-info location-code="$ctrl.location.mainLocation"></zbl-lib-info>\n        </h3>\n        <h5 ng-if="$ctrl.location.relatedTitle != null && $ctrl.location.relatedTitle !== \'\'" class="related-title">\n          <prm-icon icon-type="{{$ctrl.opacLocations.relatedArrow.type}}" svg-icon-set="{{$ctrl.opacLocations.relatedArrow.iconSet}}" icon-definition="{{$ctrl.opacLocations.relatedArrow.icon}}" class="related-title-icon h-flipped"></prm-icon>\n          <span translate="nui.location.related_title" class="related-title-label"></span>\n          <span class="related-title-name">{{$ctrl.location.relatedTitle}}</span>\n        </h5>\n        <p>\n          <span class="availability-status {{$ctrl.location.availabilityStatus}}" translate="fulldisplay.availabilty.{{$ctrl.location.availabilityStatus}}"></span>\n          <span ng-if="$ctrl.location.subLocation">,</span>\n          <span ng-if="$ctrl.location && $ctrl.location.subLocation && $ctrl.getSubLibraryName($ctrl.location)">{{$ctrl.location.collectionTranslation}} </span>\n          <span ng-if="$ctrl.location.callNumber">;</span>\n          <span ng-if="$ctrl.location.callNumber">{{$ctrl.location.callNumber}}</span>\n          <zbl-vscout library-code=\'$ctrl.location.libraryCode\'\n                      location-code="$ctrl.location.callNumber">\n          </zbl-vscout>\n        </p>\n      </div>\n      <div layout-align="end center" layout="row" layout-wrap flex-xs="100" flex-sm="30" flex class="list-item-actions">\n        <prm-stack-map ng-if="$ctrl.isSuprima() && $ctrl.location.stackMapUrl" [map-url]="$ctrl.location.stackMapUrl"></prm-stack-map>\n      </div>\n    </div>\n    <prm-icon ng-if="!$ctrl.isOvp()" class="padding-right-small" icon-type="{{$ctrl.opacLocations.externalLinkIcon.type}}" svg-icon-set="{{$ctrl.opacLocations.externalLinkIcon.iconSet}}" icon-definition="{{$ctrl.opacLocations.externalLinkIcon.icon}}"></prm-icon>\n    <prm-icon ng-if="$ctrl.isOvp()" class="padding-right-small" icon-type="{{$ctrl.opacLocations.rightArrow.type}}" svg-icon-set="{{$ctrl.opacLocations.rightArrow.iconSet}}" icon-definition="{{$ctrl.opacLocations.rightArrow.icon}}"></prm-icon>\n  </div>\n</div>\n<prm-location-after parent-ctrl="$ctrl"></prm-location-after>\n';

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
var app = angular.module('viewCustom', ['ngMaterial']).constant('feedbackServiceURL', 'https://services.libis.be/feedback').config(function ($sceDelegateProvider) {
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
  $templateCache.put('components/search/fullView/getit/opac/locations/location/location.html', locationHTML);
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


//# sourceMappingURL=custom.js.map
