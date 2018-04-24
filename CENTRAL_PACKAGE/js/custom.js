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
      }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/links":2,"./components/general/locationLinks":3,"./components/prmBriefResultAfter/altmetric":4,"./components/prmFacetAfter/searchAlso":5,"./components/prmFacetExactAfter/searchAlsoBody":6,"./components/prmSearchBarAfter/browseButton":7,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":8,"./components/prmTopBarBefore/alertMessage":9,"./components/prmTopBarBefore/finesMessage":10,"./components/prmViewOnlineAfter/sfxLinks.js":11,"./utils":22}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var locationLinksHTML = '<zbl-link class="idslu-libraries" url="{{(\'nui.customizing.idslu.librariesurl\' | translate)}}" text="{{(\'nui.customizing.idslu.librariestext\' | translate)}}"></zbl-link>\n<zbl-link class="idslu-p-help" url="{{(\'nui.customizing.idslu.phelpurl\' | translate)}}" text="{{(\'nui.customizing.idslu.phelptext\' | translate)}}"></zbl-link>\n<zbl-link class="idslu-closures" url="{{(\'nui.customizing.idslu.closuresurl\' | translate)}}" text="{{(\'nui.customizing.idslu.closurestext\' | translate)}}"></zbl-link>\n';
var locationLinksConfig = exports.locationLinksConfig = {
  template: locationLinksHTML
};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//facets.facet.facet_search_also
var SearchAlsoController = function SearchAlsoController($translate) {
  _classCallCheck(this, SearchAlsoController);

  this.parentCtrl.parentCtrl.facetService.results.unshift({
    name: 'search_also',
    displayedType: 'exact',
    limitCount: 0,
    facetGroupCollapsed: false,
    values: undefined
  });
};

SearchAlsoController.$inject = ['$translate'];

var searchAlsoConfig = exports.searchAlsoConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoController
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
        console.log('1111111');
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
        console.log('2222222');
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

},{"../../primo-explore-dom/js/primo/explore/helper":16}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./primo/explore":14,"./primo/explore/helper":16,"./primo/facets":17,"./primo/records":18,"./primo/user":19,"./primo/view":20}],14:[function(require,module,exports){
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

},{"./explore/components":15,"./explore/helper":16}],15:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":21,"./helper":16}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"./explore/components":15,"./explore/helper":16}],18:[function(require,module,exports){
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

},{"./explore/components":15,"./explore/helper":16}],19:[function(require,module,exports){
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

},{"./explore/helper":16}],20:[function(require,module,exports){
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

},{"./explore/helper":16}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

//make Primo public
/*
  Central Package Loader

  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
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
}]).service('MessageService', _messageService2.default);

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

},{"./components":1,"./factories/messageService":12,"./primo-explore-dom/js/primo":13,"./primo-explore-dom/js/primo/explore/helper":16}]},{},[23])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9saW5rcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9nZW5lcmFsL2xvY2F0aW9uTGlua3MuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZWFyY2hCYXJBZnRlci9icm93c2VCdXR0b24uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbGVydE1lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1WaWV3T25saW5lQWZ0ZXIvc2Z4TGlua3MuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2ZhY2V0cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vcmVjb3Jkcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vdXNlci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vdmlldy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3V0aWxzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7Ozs7Ozs7OztBQVdBOzs7QUFGQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztJQUdxQixlOzs7Ozs7O3dCQUVGO0FBQ2Y7Ozs7Ozs7Ozs7O0FBWUEsYUFBTyxDQUFDO0FBQ0osY0FBTSxTQURGO0FBRUosb0NBRkk7QUFHSixpQkFBUyxJQUhMO0FBSUosa0JBQVUsa0NBSk47QUFLSixzQkFBYztBQUxWLE9BQUQsRUFPTDtBQUNFLGNBQU0sZUFEUjtBQUVFLHdDQUZGO0FBR0UsaUJBQVMsSUFIWDtBQUlOO0FBQ1Esa0JBQVUsdUJBTFo7QUFNRSxzQkFBYztBQU5oQixPQVBLLEVBZUw7QUFDRSxjQUFNLFdBRFI7QUFFRSwwQ0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJRSxrQkFBVSx3QkFKWjtBQUtFLHNCQUFjO0FBTGhCLE9BZkssRUFzQkw7QUFDRSxjQUFNLFVBRFI7QUFFRSxrQ0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJRSxrQkFBVSxJQUpaO0FBS0Usc0JBQWM7QUFMaEIsT0F0QkssRUE2Qkw7QUFDRSxjQUFNLHlCQURSO0FBRUUsa0RBRkY7QUFHRSxpQkFBUyxJQUhYO0FBSUUsa0JBQVUsMEJBSlo7QUFLRSxzQkFBYztBQUxoQixPQTdCSyxFQW9DTDtBQUNFLGNBQU0saUJBRFI7QUFFRSw0Q0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJRSxrQkFBVSxpQkFKWjtBQUtFLHNCQUFjO0FBTGhCLE9BcENLLEVBMkNMO0FBQ0UsY0FBTSxzQkFEUjtBQUVFLG9EQUZGO0FB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a0JBQVk7QUFETCxLQUQ0QjtBQUlyQyxjQUFVLGNBQWMsR0FBZCxDQUFrQjtBQUFBLG1CQUFTLEVBQUUsSUFBWCwrQkFBeUMsRUFBRSxJQUEzQztBQUFBLEtBQWxCLEVBQXNFLElBQXRFLENBQTJFLEVBQTNFO0FBSjJCLEdBQXZDO0FBTUQsQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xuaW1wb3J0IHtzZnhMaW5rc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVZpZXdPbmxpbmVBZnRlci9zZnhMaW5rcy5qcydcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXG5pbXBvcnQge2xpbmtzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9saW5rcydcbmltcG9ydCB7bG9jYXRpb25MaW5rc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvbG9jYXRpb25MaW5rcydcbmltcG9ydCB7c2VhcmNoQWxzb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvc2VhcmNoQWxzbydcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHknXG5pbXBvcnQge2Jyb3dzZUJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaEJhckFmdGVyL2Jyb3dzZUJ1dHRvbidcbmltcG9ydCB7ZmluZXNNZXNzYWdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZSdcbmltcG9ydCB7YWxlcnRNZXNzYWdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2FsZXJ0TWVzc2FnZSdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xuXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xuICAgIC8qXG4gICAgICBuYW1lID0gdGhlIHN1YiBlbGVtZW50IGluIHRoZSBhZnRlciBlbGVtZW50XG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcbiAgICAgIGFwcGVuZFRvID0gVGhlIGNvbXBvbmVudCBzaG91bGQgYmUgY3JlYXRlZCBpbiB0aGlzIGFmdGVyIGNvbXBvbmVudC5cblxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XG4gICAgICByZXN1bHRzIGluOlxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxuICAgICAgICA8L3BybS1sb2dvLWFmdGVyPlxuICAgICovXG4gICAgcmV0dXJuIFt7XG4gICAgICAgIG5hbWU6ICdwbngteG1sJyxcbiAgICAgICAgY29uZmlnOiBwbnhYbWxDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6Ymwtc2Z4LWxpbmtzJyxcbiAgICAgICAgY29uZmlnOiBzZnhMaW5rc0NvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbi8vICAgICAgICBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtY29udGFpbmVyLWFmdGVyJyxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tdmlldy1vbmxpbmUtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhbHRtZXRyaWMnLFxuICAgICAgICBjb25maWc6IGFsdG1ldHJpY0NvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLWxpbmsnLFxuICAgICAgICBjb25maWc6IGxpbmtzQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogbnVsbCxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLWxvY2F0aW9uLWl0ZW1zLWxpbmsnLFxuICAgICAgICBjb25maWc6IGxvY2F0aW9uTGlua3NDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLWxvY2F0aW9uLWl0ZW1zLWFmdGVyJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLXNlYXJjaC1hbHNvJyxcbiAgICAgICAgY29uZmlnOiBzZWFyY2hBbHNvQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1zZWFyY2gtYWxzby1ib2R5JyxcbiAgICAgICAgY29uZmlnOiBzZWFyY2hBbHNvQm9keUNvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtYnJvd3NlLWJ1dHRvbicsXG4gICAgICAgIGNvbmZpZzogYnJvd3NlQnV0dG9uQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1zZWFyY2gtYmFyLWFmdGVyJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLWFsZXJ0LW1lc3NhZ2UnLFxuICAgICAgICBjb25maWc6IGFsZXJ0TWVzc2FnZUNvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtZmluZXMtbWVzc2FnZScsXG4gICAgICAgIGNvbmZpZzogZmluZXNNZXNzYWdlQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfVxuICAgIF0uZmlsdGVyKChjb21wb25lbnQpID0+IChjb21wb25lbnQuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKGNvbXBvbmVudC5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpKSk7XG4gIH1cbn1cbiIsImltcG9ydCBsaW5rc0hNVEwgZnJvbSAnLi9saW5rcy5odG1sJ1xuXG5jbGFzcyBMaW5rc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIFxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgIHNlbGYuaXNPbkNhbXB1cyA9IHVzZXIuaXNPbkNhbXB1cygpO1xuICAgICAgc2VsZi5pc0xvZ2dlZEluID0gdXNlci5pc0xvZ2dlZEluKCk7XG4gICAgICBzZWxmLmFsbEZpbmVzID0gIHtcbiAgICAgICAgY291bnQ6IHVzZXIuZmluZXMubGVuZ3RoLFxuICAgICAgICBzdW06ICh1c2VyLmZpbmVzID8gdXNlci5maW5lcy5tYXAoZiA9PiBwYXJzZUZsb2F0KGYuZmluZXN1bSkpLnJlZHVjZSgocCxjKT0+IHArYywgMCkgOiAwKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG9uQ2FtcHVzKCkge1xuICAgIHJldHVybiB0aGlzLmlzT25DYW1wdXM7XG4gIH1cblxuICBnZXQgbG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb2dnZWRJbjtcbiAgfVxuXG4gIGdldCBmaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxGaW5lcztcbiAgfVxuXG4gIGdldCBsaW5rQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgbGlua1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCB8fCAnJztcbiAgfVxuXG4gIGdldCBsaW5rVXJsKCkge1xuICAgIHJldHVybiB0aGlzLnVybCB8fCAnJztcbiAgfVxufVxuXG5leHBvcnQgbGV0IGxpbmtzQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIGNsYXNzOiAnQCcsXG4gICAgdGV4dDogJ0AnLFxuICAgIHVybDogJ0AnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IExpbmtzQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGxpbmtzSE1UTFxufVxuIiwiaW1wb3J0IGxvY2F0aW9uTGlua3NIVE1MIGZyb20gJy4vbG9jYXRpb25MaW5rcy5odG1sJ1xuXG5leHBvcnQgbGV0IGxvY2F0aW9uTGlua3NDb25maWcgPSB7XG4gIHRlbXBsYXRlOiBsb2NhdGlvbkxpbmtzSFRNTFxufVxuIiwiaW1wb3J0IGFsdG1ldHJpY0hUTUwgZnJvbSAnLi9hbHRtZXRyaWMuaHRtbCdcblxuLypcbi8vc2NyaXB0IG5lZWRzIHRvIGJlIGxvYWRlZCBmaXJzdC4gQ2FuIGJlIHB1dCBpbiB0aGUgJG9uSW5pdCgpIGZ1bmN0aW9uXG4vL29yIGJldHRlciBpbiBydW4gbWV0aG9kLlxuYXBwLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2VtYmVkLmpzPycgKyBEYXRlLm5vdygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzLmpzIGxvYWRlZCcpO1xuICB9KTtcbn0pO1xuKi9cblxuXG5jbGFzcyBBbHRNZXRyaWNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICR3aW5kb3csICRzY29wZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XG5cbiAgICBzZWxmLmRvaSA9ICcnO1xuICAgIHNlbGYuaXNibiA9ICcnO1xuICAgIHNlbGYuaWQgPSBzZWxmLmd1aWQoKTtcbiAgICBzZWxmLnJlY29yZGlkID0gJyc7XG5cblxuICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSkge1xuICAgICAgc2VsZi5yZWNvcmRpZCA9IGl0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XG4gICAgICBpZiAoaXRlbS5wbnguYWRkYXRhLmRvaSkge1xuICAgICAgICBzZWxmLmRvaSA9IGl0ZW0ucG54LmFkZGF0YS5kb2lbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBueC5hZGRhdGEuaXNibikge1xuICAgICAgICBzZWxmLmlzYm4gPSBpdGVtLnBueC5hZGRhdGEuaXNiblswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3RoaXMgaXMgYSB3YXRjaGVyIG9uIHRoZSBsb2NhbCBzY29wZSBhbmQgd2lsbCB0cmlnZ2VyIGFsdG1ldHJpY1xuICAgIGxldCBhbHRtZXRyaWNXYXRjaGVyID0gJHNjb3BlLiR3YXRjaCgoKSA9PiB7XG4gICAgICBsZXQgYWx0bWV0cmljTG9hZGVkID0gKHR5cGVvZiB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGxldCBpc2JuRXhpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FsdG1ldHJpYy1pc2JuLSR7c2VsZi5pZH1gKSAhPSBudWxsO1xuICAgICAgbGV0IGRvaUV4aXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhbHRtZXRyaWMtZG9pLSR7c2VsZi5pZH1gKSAhPSBudWxsO1xuICAgICAgbGV0IHJ1blRyaWdnZXIgPSAoIGFsdG1ldHJpY0xvYWRlZCAmJiAoaXNibkV4aXN0cyB8fCBkb2lFeGlzdHMpICk7XG5cbiAgICAgIC8vY29uc29sZS5sb2coc2VsZi5pZCwgYWx0bWV0cmljTG9hZGVkLCBpc2JuRXhpc3RzLCBkb2lFeGlzdHMsIHJ1blRyaWdnZXIpO1xuICAgICAgcmV0dXJuIHJ1blRyaWdnZXI7XG4gICAgfSwgKG4sIG8pID0+IHtcbiAgICAgIGlmIChuID09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIGFsdG1ldHJpYyBmb3I6XCIsIHNlbGYucmVjb3JkaWQpO1xuICAgICAgICAkd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChgI2FsdG1ldHJpYy1pc2JuLSR7c2VsZi5pZH1gKTtcbiAgICAgICAgJHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQoYCNhbHRtZXRyaWMtZG9pLSR7c2VsZi5pZH1gKTtcbiAgICAgICAgYWx0bWV0cmljV2F0Y2hlcigpOyAvL2RlcmVnaXN0ZXIgd2F0Y2hlclxuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIGd1aWQoKSB7XG4gICAgbGV0IHM0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbiAgfVxufVxuXG5BbHRNZXRyaWNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyR3aW5kb3cnLCAnJHNjb3BlJ107XG5cbmV4cG9ydCBsZXQgYWx0bWV0cmljQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBBbHRNZXRyaWNDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogYWx0bWV0cmljSFRNTFxufVxuIiwiLy9mYWNldHMuZmFjZXQuZmFjZXRfc2VhcmNoX2Fsc29cbmNsYXNzIFNlYXJjaEFsc29Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHRyYW5zbGF0ZSl7XG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMudW5zaGlmdCh7XG4gICAgICBuYW1lOiAnc2VhcmNoX2Fsc28nLFxuICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcbiAgICAgIGxpbWl0Q291bnQ6IDAsXG4gICAgICBmYWNldEdyb3VwQ29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIHZhbHVlczogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH1cbn1cblxuU2VhcmNoQWxzb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHRyYW5zbGF0ZSddO1xuXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Db25maWcgPSB7XG4gIGJpbmRpbmdzOntwYXJlbnRDdHJsOic8J30sXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Db250cm9sbGVyXG59XG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcblxuY2xhc3MgU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgIHRoaXMudGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMoKTtcbiAgfVxuXG4gIGdldCBzZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnk7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xuICB9XG5cbiAgX3RhcmdldHMoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBcIm5hbWVcIjogXCJTd2lzc2JpYlwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5zd2lzc2JpYi5jaC9zZWFyY2gvcmVzdWx0cz8mbG9va2Zvcj1cIixcbiAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9wcmltby1kaXJlY3QtZXUtc2IuaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3ByaW1vLWV4cGxvcmUvY3VzdG9tLzQxWkJML2ltZy9zd2lzc2JpYl9pY29uLnBuZ1wiLFxuICAgICAgXCJ0b29sdGlwXCI6IFwibnVpLmN1c3RvbWl6aW5nLmlkc2x1LnNlYXJjaF9hbHNvLnRvb2x0aXAuc3dpc3NiaWJcIixcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XG4gICAgICAgIHJldHVybiB0ZXJtc1syXSB8fCBcIlwiO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL3NjaG9sYXI/cT1cIixcbiAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9wcmltby1kaXJlY3QtZXUtc2IuaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3ByaW1vLWV4cGxvcmUvY3VzdG9tLzQxWkJML2ltZy9nb29nbGVfaWNvbi5wbmdcIixcbiAgICAgIFwidG9vbHRpcFwiOiBcIm51aS5jdXN0b21pemluZy5pZHNsdS5zZWFyY2hfYWxzby50b29sdGlwLmdvb2dsZV9zY29sYXJcIixcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XG4gICAgICAgIHJldHVybiB0ZXJtc1syXSB8fCBcIlwiO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIldvcmxkY2F0XCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LndvcmxkY2F0Lm9yZy9zZWFyY2g/cT1cIixcbiAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9wcmltby1kaXJlY3QtZXUtc2IuaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3ByaW1vLWV4cGxvcmUvY3VzdG9tLzQxWkJML2ltZy93b3JsZGNhdF9pY29uLnBuZ1wiLFxuICAgICAgXCJ0b29sdGlwXCI6IFwibnVpLmN1c3RvbWl6aW5nLmlkc2x1LnNlYXJjaF9hbHNvLnRvb2x0aXAud29ybGRjYXRcIixcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XG4gICAgICAgIHZhciB0eXBlX21hcHBpbmdzID0ge1xuICAgICAgICAgIFwiYW55XCI6IFwia3dcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwidGlcIixcbiAgICAgICAgICBcImNyZWF0b3JcIjogXCJhdVwiLFxuICAgICAgICAgIFwic3ViamVjdFwiOiBcInN1XCJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlX21hcHBpbmdzW3Rlcm1zWzBdXSB8fCBcImt3XCI7XG4gICAgICAgIHZhciBxdWVyeSA9IHRlcm1zWzJdIHx8IFwiXCI7XG4gICAgICAgIHJldHVybiB0eXBlICsgJzonICsgcXVlcnk7XG5cbiAgICAgIH1cbiAgICB9XTtcbiAgfVxufVxuXG5TZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJ107XG5cbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXG59XG4iLCJpbXBvcnQgYnJvd3NlQnV0dG9uSFRNTCBmcm9tICcuL2Jyb3dzZUJ1dHRvbi5odG1sJ1xuXG5jbGFzcyBCcm93c2VCdXR0b25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHN0YXRlLCAkY29tcGlsZSwgJHNjb3BlKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1zd2l0Y2gtYnV0dG9ucycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLmNvbXBpbGUoYnJvd3NlQnV0dG9uSFRNTCkodGhpcy5zY29wZSkpOyAgICBcbiAgfVxuXG4gIHN3aXRjaEJyb3dzZSgpIHtcbiAgICB0aGlzLnN0YXRlLmdvKCdleHBsb3JlTWFpbi5icm93c2VTZWFyY2gnLCB7dmlkOiB3aW5kb3cuYXBwQ29uZmlnLnZpZH0pO1xuICB9XG59XG5cbkJyb3dzZUJ1dHRvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJyRjb21waWxlJywgJyRzY29wZSddO1xuXG5leHBvcnQgbGV0IGJyb3dzZUJ1dHRvbkNvbmZpZyA9IHtcbiAgYmluZGluZ3MgOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEJyb3dzZUJ1dHRvbkNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcbmNsYXNzIFBueFhtbENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWNvcmRpZCA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGhvdGtleXMpIHtcbiAgICAgIGhvdGtleXMoXCJjdHJsK2VudGVyXCIsIChlKSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O3otaW5kZXg6MTAwMDtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjAzJyk7XG4gICAgICBkaXYub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xuXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cblxuICB9XG59XG5cbmV4cG9ydCBsZXQgcG54WG1sQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBQbnhYbWxDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxufVxuIiwiY2xhc3MgQWxlcnRNZXNzYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBNZXNzYWdlU2VydmljZS5zaG93KCcnLCAkc2NvcGUpO1xuICB9XG59XG5cbkFsZXJ0TWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ01lc3NhZ2VTZXJ2aWNlJ107XG5cbmV4cG9ydCBsZXQgYWxlcnRNZXNzYWdlQ29uZmlnID0ge1xuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXG4gIGNvbnRyb2xsZXI6IEFsZXJ0TWVzc2FnZUNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKE1lc3NhZ2VTZXJ2aWNlLCAkdHJhbnNsYXRlLCAkcm9vdFNjb3BlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICBpZiAodXNlci5maW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ251aS5jdXN0b21pemluZy5pZHNsdS55b3VIYXZlRmluZXMnKTtcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFwkMC8sIHVzZXIuZmluZXMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgcGF5ID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdudWkuY3VzdG9taXppbmcuaWRzbHUueW91SGF2ZUZpbmVzLnBheScpO1xuXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJhbGlnbi1zZWxmOmNlbnRlcjtcIj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87Y29sb3I6IHdoaXRlO1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICBocmVmPScjJz4ke3BheX08L2E+XG4gICAgICAgICAgYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuRmluZXNNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydNZXNzYWdlU2VydmljZScsICckdHJhbnNsYXRlJywgJyRyb290U2NvcGUnXTtcblxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiaW1wb3J0IHNmeExpbmtzSFRNTCBmcm9tICcuL3NmeExpbmtzLmh0bWwnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4uLy4uL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuXG5jbGFzcyBTZnhMaW5rc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcbiAgICAvL3NlbGYuaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XG4gICAgbGV0IGNvbnRhaW5lcnMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJyk7XG4gICAgaWYgKGNvbnRhaW5lcnMgJiYgY29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxmLml0ZW0gPSBjb250YWluZXJzWzBdLmN0cmwoKS5pdGVtO1xuICAgICAgY29uc29sZS5sb2coc2VsZi5pdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5pdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbTtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuaXRlbSk7XG4gICAgfVxuICAgIHNlbGYudGFyZ2V0cyA9IHt9O1xuICAgIHNlbGYudXBkYXRlVGFyZ2V0c1doZW5PcGVuVVJMQXZhaWxhYmxlKCk7XG4gIH1cblxuICB1cGRhdGVUYXJnZXRzV2hlbk9wZW5VUkxBdmFpbGFibGUoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB3YXRjaGVyID0gc2VsZi5zY29wZS4kd2F0Y2goKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHNlbGYub3BlbnVybCAmJiBzZWxmLm9wZW51cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAobiwgbykgPT4ge1xuICAgICAgaWYgKG4gPT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRhcmdldHNVcmxzKTtcbiAgICAgICAgc2VsZi50YXJnZXRzVXJscy5mb3JFYWNoKHRhcmdldHNVcmwgPT4ge1xuICAgICAgICAgIEhlbHBlci5odHRwLmdldCh0YXJnZXRzVXJsKS50aGVuKHJhd1RhcmdldHMgPT4ge1xuICAgICAgICAgICAgaWYgKHJhd1RhcmdldHMuZGF0YSAmJiByYXdUYXJnZXRzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNlbGYudGFyZ2V0cywgc2VsZi5ub3JtYWxpemVUYXJnZXRzKHJhd1RhcmdldHMuZGF0YSkpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHMgPSBkYXRhO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdhdGNoZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5vcm1hbGl6ZVRhcmdldHModGFyZ2V0cykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbm9ybWFsaXplZFRhcmdldHMgPSB7fTtcblxuICAgIHRhcmdldHMucmVkdWNlKCh0LCBjKSA9PiB7XG4gICAgICBsZXQgZCA9IHQuaGFzT3duUHJvcGVydHkoYy5mYWNpbGl0eSkgPyB0W2MuZmFjaWxpdHldIDogW107XG4gICAgICBkLnB1c2goYyk7XG4gICAgICB0W2MuZmFjaWxpdHldID0gZDtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sIG5vcm1hbGl6ZWRUYXJnZXRzKTtcblxuICAgIHJldHVybiBub3JtYWxpemVkVGFyZ2V0cztcbiAgfVxuXG4gIGdldCB0YXJnZXRzVXJscygpIHtcbiAgICByZXR1cm4gdGhpcy5vcGVudXJsLm1hcChtID0+IChgJHt0aGlzLmxvb2t1cFVSTH0/dHlwZT10YXJnZXRzJnNvdXJjZVVSTD0ke2VuY29kZVVSSUNvbXBvbmVudChtKX0mcHJveHlTdWZmaXg9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm94eVN1ZmZpeCl9YCkpO1xuICB9XG5cbiAgZ2V0IG9wZW51cmwoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgaWYgKHNlbGYuaXRlbSAmJiBzZWxmLml0ZW0uZGVsaXZlcnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcxMTExMTExJyk7XG4gICAgICBsZXQgb3BlblVybExpc3QgPSBzZWxmLml0ZW0uZGVsaXZlcnkubGluay5maWx0ZXIoZiA9PiAvXm9wZW51cmwvLnRlc3QoZi5kaXNwbGF5TGFiZWwpKS5tYXAobSA9PiBtLmxpbmtVUkwpO1xuICAgICAgaWYgKG9wZW5VcmxMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGlzdC5wdXNoKG9wZW5VcmxMaXN0WzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5saW5rRWxlbWVudCkge1xuICAgICAgY29uc29sZS5sb2coJzIyMjIyMjInKTtcbiAgICAgIGxldCBvcGVuVXJsTGlzdCA9IHNlbGYuaXRlbS5saW5rRWxlbWVudC5saW5rcy5maWx0ZXIoZiA9PiAvXm9wZW51cmwvLnRlc3QoZi5kaXNwbGF5VGV4dCkpLm1hcChtID0+IG0ubGluayk7XG4gICAgICBpZiAob3BlblVybExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBsaXN0LnB1c2gob3BlblVybExpc3RbMF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgZ2V0IHByb3h5U3VmZml4KCkge1xuICAgIGxldCBjdXJyZW50SG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIGxldCBwcm94eVN1ZmZpeCA9ICcnO1xuICAgIGlmIChjdXJyZW50SG9zdC5tYXRjaCgvZXhsaWJyaXNncm91cC5jb20vZykgIT0gbnVsbCkge1xuICAgICAgcHJveHlTdWZmaXggPSBjdXJyZW50SG9zdC5yZXBsYWNlKC8uK1xcLmV4bGlicmlzZ3JvdXBcXC5jb20vZywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm94eVN1ZmZpeDtcbiAgfVxuXG4gIGdldCBsb29rdXBVUkwoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vcHJpbW8uYWR2ZXN0YS5jb20vaW5kZXgucGhwJztcbiAgfVxufVxuXG5TZnhMaW5rc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XG5cbmV4cG9ydCBsZXQgc2Z4TGlua3NDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFNmeExpbmtzQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHNmeExpbmtzSFRNTFxufVxuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xuICAgIHRoaXMuc2NlID0gJHNjZTtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XG4gICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICB9XG5cbiAgc2hvdyhtZXNzYWdlID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5IHx8IDA7XG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XG5cbiAgICB0aGlzLnRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobWVzc2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyBjb2RlIHRhYmxlIGVudHJpZXMgY2FuIG5vdCBoYXZlIGVtcHR5IGRlc2NyaXB0aW9ucy5cbiAgICAgICAgLy8gbWVzc2FnZSA8PSAxIHdpbGwgbm90IGJlIGRpc3BsYXllZCEhISFcbiAgICAgICAgbGV0IG1lc3NhZ2VLZXkgPSAnbnVpLmN1c3RvbWl6aW5nLmlkc2x1LmFsZXJ0TWVzc2FnZSc7XG4gICAgICAgIG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2VLZXkpO1xuICAgICAgICBtZXNzYWdlID0gKG1lc3NhZ2UgPT0gbWVzc2FnZUtleSB8fCBtZXNzYWdlIDw9IDEpID8gJycgOiBtZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCB0b2FzdENvbmZpZyA9IHtcbiAgICAgICAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkxhYmVsID0gYWN0aW9uTGFiZWw7XG5cbiAgICAgICAgICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5vbkFjdGlvbiA9ICgkZXZlbnQgPSBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY29wZSkge1xuICAgICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzZWxmLnJvb3RTY29wZSkuaHRtbCgpKTtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNjb3BlKS5odG1sKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRlbXBsYXRlOiBtZXNzYWdlU2VydmljZUhUTUwsXG4gICAgICAgICAgcG9zaXRpb246ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5tZFRvYXN0LnNob3codG9hc3RDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIG1lc3NhZ2UgdG8gZGlzcGxheScpO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuICB9XG5cbn1cblxuTWVzc2FnZVNlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckc2NlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnXTtcbiIsImltcG9ydCBFeHBsb3JlIGZyb20gJy4vcHJpbW8vZXhwbG9yZSdcbmltcG9ydCBSZWNvcmRzIGZyb20gJy4vcHJpbW8vcmVjb3JkcydcbmltcG9ydCBGYWNldHMgZnJvbSAnLi9wcmltby9mYWNldHMnXG5pbXBvcnQgVmlldyBmcm9tICcuL3ByaW1vL3ZpZXcnXG5pbXBvcnQgVXNlciBmcm9tICcuL3ByaW1vL3VzZXInXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8vZXhwbG9yZS9oZWxwZXInXG5cbi8qKlxuICogUHJpbW8gbWFpbiBlbnRyeSBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmltbyB7XG4gIC8qKlxuICAgKiBSZXR1cm4gdmVyc2lvbiBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgbGV0IF92ZXJzaW9uID0gXCIwLjAuMTBcIjtcbiAgICByZXR1cm4gYExpYnJhcnk6JHtfdmVyc2lvbn0gLSBQcmltbzoke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fVmVyc2lvbl9OdW1iZXJ9OiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19Ib3RGaXhfTnVtYmVyfWA7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaGFzIHJhblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xuICAgIHJldHVybiBIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaWQgdGhlIHNjcmlwdCByYW4gb24gYSBQcmltbyBzaXRlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcbiAgICByZXR1cm4gSGVscGVyLmlzUHJpbW9BdmFpbGFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJveHkgY2xhc3NcbiAgICogQHJldHVybiB7RXhwbG9yZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZXhwbG9yZSgpIHtcbiAgICByZXR1cm4gRXhwbG9yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSByZWNvcmRzXG4gICAqIEByZXR1cm4ge1JlY29yZHN9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHJlY29yZHMoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIGZhY2V0c1xuICAgKiBAcmV0dXJuIHtGYWNldHN9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGZhY2V0cygpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdmlldyByZWxhdGVkIG1ldGFkYXRhXG4gICAqIEByZXR1cm4ge1ZpZXd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHZpZXcoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IFZpZXcoKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgVmlldygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdXNlciByZWxhdGVkIG1ldGFkYXRhXG4gICAqIEByZXR1cm4ge1VzZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEhlbHBlci51c2VyRGV0YWlsc0hUVFAoKS50aGVuKCh1c2VyRGV0YWlscyk9PntcbiAgICAgICAgSGVscGVyLnVzZXJGaW5lc0hUVFAoKS50aGVuKCh1c2VyRmluZXMpID0+IHtcbiAgICAgICAgICBIZWxwZXIudXNlckxvYW5zSFRUUCgpLnRoZW4oKHVzZXJMb2FucykgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVc2VyKHtkZXRhaWxzOiB1c2VyRGV0YWlscywgZmluZXM6IHVzZXJGaW5lcywgbG9hbnM6IHVzZXJMb2Fuc30pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbi8vdGhpcyBpcyBwcm94eSBjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9yZSB7XG4gIHN0YXRpYyBnZXQgY29tcG9uZW50cygpIHtcbiAgICBsZXQgYyA9IG5ldyBDb21wb25lbnRzKCk7XG4gICAgSGVscGVyLmNvbXBvbmVudE5hbWVzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICBjLmFkZChzZWxlY3Rvcik7XG4gICAgfSlcblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgc3RhdGljIGdldCB1aSgpIHtcbiAgICBpZiAodGhpcy5fdWkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcignVGhpcyBpcyBhIHN0dWIgZnVuY3Rpb24gY2FsbCBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgdG8gYWN0aXZhdGUgVUknKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VpO1xuICB9XG5cbiAgc3RhdGljIGdldCBoZWxwZXIoKSB7XG4gICAgcmV0dXJuIEhlbHBlcjtcbiAgfVxufVxuIiwidmFyIGNzc1NlbGVjdG9yR2VuZXJhdG9yID0gbmV3KHJlcXVpcmUoJy4uLy4uL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzJykpLkNzc1NlbGVjdG9yR2VuZXJhdG9yO1xuXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVyJ1xuXG5jbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmxpbmsoKXtcbiAgICBIZWxwZXIuYmxpbmsodGhpcyk7XG4gIH1cblxuICBnZXQgY3NzUGF0aCgpe1xuICAgIHJldHVybiBjc3NTZWxlY3RvckdlbmVyYXRvci5nZXRTZWxlY3Rvcih0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IG5hbWUoKXtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmxvY2FsTmFtZTtcbiAgfVxuXG4gIHNjb3BlKCl7XG4gICAgaWYgKEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpKXtcbiAgICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5zY29wZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcnVuIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiBmaXJzdCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0cmwoKXtcbiAgICBsZXQgYyA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLmNvbnRyb2xsZXIodGhpcy5uYW1lKTtcbiAgICBpZiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2luZyBhbHRlcm5hdGl2ZSBtZXRob2QgdG8gZ2V0IGNvbnRyb2xsZXInKTtcbiAgICAgIGxldCBzY29wZSA9IHRoaXMuc2NvcGUoKTtcbiAgICAgIGlmIChzY29wZSkge1xuICAgICAgICBsZXQgc2NvcGVDaGlsZCA9IHNjb3BlLiQkY2hpbGRUYWlsO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCckY3RybCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuJGN0cmxcbiAgICAgICAgfSBlbHNlIGlmKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnY3RybCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuY3RybFxuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJyRjdHJsJykpe1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuJGN0cmw7XG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnY3RybCcpKXtcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLmN0cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyAkY3RybCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IoKXtcblxuICAgICAgdGhpcy5fY29tcG9uZW50cyA9IHt9O1xuICB9XG5cbiAgYWRkKHNlbGVjdG9yKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gSGVscGVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGxldCBlbGVtZW50c0FycmF5ID0gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgW107XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KT0+e1xuICAgICAgZWxlbWVudHNBcnJheS5wdXNoKG5ldyBDb21wb25lbnQoZWxlbWVudCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gPSBlbGVtZW50c0FycmF5O1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzQXJyYXk7XG4gIH1cblxuICBnZXQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGtleXMoKXtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVyIHtcbiAgICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubmFtZSA9PT0gJ05HX0VOQUJMRV9ERUJVR19JTkZPIScgfHwgdHlwZW9mKGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tbG9nbycpKS5zY29wZSgpKSAhPSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcbiAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Yod2luZG93LmFuZ3VsYXIpKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgY29tcG9uZW50TmFtZXMoKSB7XG4gICAgICAgIGxldCB0YWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWVzID0gW107XG4gICAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICBsZXQgdGFnTmFtZSA9IHRhZy5sb2NhbE5hbWU7XG4gICAgICAgICAgICBpZiAoL15wcm0tLy50ZXN0KHRhZ05hbWUpIHx8IC9ecHJpbW8tLy50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lcy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lcy5wdXNoKHRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZXMuc29ydCgpLmZpbHRlcigoZSwgaSwgYSkgPT4gaSA9PT0gYS5maW5kSW5kZXgoKGUyKSA9PiBlID09PSBlMikpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50TmFtZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbmplY3RvcigpIHtcbiAgICAgIGxldCBjID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJpbW8tZXhwbG9yZScpO1xuICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHByaW1vRXhwbG9yZSA9IGFuZ3VsYXIuZWxlbWVudChjWzBdLmVsZW1lbnQpO1xuICAgICAgICAgIGxldCBpbmplY3RvciAgICAgPSBwcmltb0V4cGxvcmUuaW5qZWN0b3IoKTtcbiAgICAgICAgICBpZiAoaW5qZWN0b3Ipe1xuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBodHRwKCkge1xuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xuICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgIGxldCBoID0gaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xuICAgICAgICBpZiAoaCkge1xuICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGxvYWRTY3JpcHQoc2NyaXB0VVJMKSB7XG4gICAgICBpZiAod2luZG93LmFuZ3VsYXIpIHtcbiAgICAgICAgICBsZXQgYXBwSW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCdhbmd1bGFyTG9hZCddKTtcbiAgICAgICAgICBpZiAoYXBwSW5qZWN0b3IpIHtcbiAgICAgICAgICAgICAgbGV0IGFuZ3VsYXJMb2FkID0gYXBwSW5qZWN0b3IuZ2V0KCdhbmd1bGFyTG9hZCcpO1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhckxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhckxvYWQubG9hZFNjcmlwdChzY3JpcHRVUkwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByb290U2NvcGUoKSB7XG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XG4gICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgICBsZXQgcm9vdFNjb3BlICAgID0gaW5qZWN0b3IuZ2V0KCckcm9vdFNjb3BlJyk7XG4gICAgICAgICAgaWYgKHJvb3RTY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RTY29wZTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkge1xuICAgICAgbGV0IHJvb3RTY29wZSA9IHRoaXMucm9vdFNjb3BlKCk7XG4gICAgICBpZiAocm9vdFNjb3BlKSB7XG4gICAgICAgIHJldHVybiByb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGp3dERhdGEoKSB7XG4gICAgICBsZXQgdVNNUyA9IHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xuICAgICAgaWYgKHVTTVMpIHtcbiAgICAgICAgbGV0IGp3dERhdGEgPSB1U01TLmp3dFV0aWxTZXJ2aWNlLmdldERlY29kZWRUb2tlbigpIHx8IHt9O1xuICAgICAgICByZXR1cm4gand0RGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckRldGFpbHMoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS4kbG9jYWxGb3JhZ2UuZ2V0SXRlbSgndXNlckRldGFpbHMnKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyRGV0YWlsc0hUVFAoKSB7XG4gICAgICBsZXQgdmlld0NvZGUgPSB0aGlzLmp3dERhdGEoKS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ107XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KGAvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS91c2Vyc2V0dGluZ3M/dmlkPSR7dmlld0NvZGV9YCkudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzLmRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyRmluZXNIVFRQKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2ZpbmVzJykudGhlbih1c2VyRmluZXMgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJGaW5lcy5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmluZXMgPSBkYXRhLmRhdGEuZmluZXM7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5lcy5maW5lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBmaW5lcycpO1xuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckxvYW5zSFRUUCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9sb2FucycpLnRoZW4odXNlckxvYW5zID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyTG9hbnMuZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvYW5zID0gZGF0YS5kYXRhLmxvYW5zO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9hbnMubG9hbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbG9hbnMnKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGJsaW5rKGNvbXBvbmVudCwgbnVtYmVyT2ZCbGlua3MgPSA0KSB7XG4gICAgICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBudWxsO1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XG4gICAgICAgIGxldCBib3JkZXJTZWxlY3RvciA9IGNvbXBvbmVudC5lbGVtZW50LmNzc1BhdGggKyBpbmRleCArICdSZWN0JztcblxuICAgICAgICBsZXQgY3JlYXRlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlY3QgPSBjb21wb25lbnQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBib3JkZXJTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnM3B4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50UmVjdC50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudFJlY3QuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLndpZHRoID0gZWxlbWVudFJlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9yZGVyRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib3JkZXJTZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbW92ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGJvcmRlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJsaW5rQm9yZGVyRWxlbWVudCA9IChudW1iZXJPZkJsaW5rcyA9IDQpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSWQpO1xuXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZCbGlua3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQm9yZGVyRWxlbWVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoKG51bWJlck9mQmxpbmtzICUgMikgPT0gMCkgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICAgICAgICAgIG51bWJlck9mQmxpbmtzLS07XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChibGlua0JvcmRlckVsZW1lbnQsIDEwMDAsIG51bWJlck9mQmxpbmtzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJvcmRlckVsZW1lbnQgPSBjcmVhdGVCb3JkZXJFbGVtZW50KCk7XG4gICAgICAgIGJsaW5rQm9yZGVyRWxlbWVudChudW1iZXJPZkJsaW5rcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0cyB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZhY2V0cyhjb21wb25lbnRzKTtcbiAgICB9XG4gICAgX2ZhY2V0cyhjb21wb25lbnRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldC1hZnRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgZmFjZXRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZmFjZXRzO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgZmFjZXRzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMoY29tcG9uZW50cyk7XG4gICAgfVxuICAgIF9pdGVtcyhjb21wb25lbnRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1zZWFyY2gtcmVzdWx0LWxpc3QtYWZ0ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLml0ZW1saXN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwidHJ5IGFnYWluXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgcmVjb3JkcyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmRhdGE7XG4gICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBpdGVtcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyID0gX3NrZWxVc2VyKSB7XG4gICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xuICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogand0RGF0YS51c2VyIHx8ICcnLFxuICAgICAgICBlbWFpbDogdXNlci5kZXRhaWxzLmVtYWlsIHx8ICcnLFxuICAgICAgICBuYW1lOiBqd3REYXRhLnVzZXJOYW1lIHx8ICdHdWVzdCcsXG4gICAgICAgIGRpc3BsYXlfbmFtZTogdVNtcy5nZXRVc2VyTmFtZUZvckRpc3BsYXkoKSxcbiAgICAgICAgaXNMb2dnZWRJbjogKCkgPT4gdVNtcy5nZXRVc2VyTmFtZSgpLmxlbmd0aCA+IDAsXG4gICAgICAgIGlzT25DYW1wdXM6ICgpID0+IGp3dERhdGEub25DYW1wdXMgPT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGZpbmVzOiB1c2VyLmZpbmVzLFxuICAgICAgICBsb2FuczogdXNlci5sb2Fuc1xuICAgICAgfTtcbiAgfVxuXG4gIGdldCBfc2tlbFVzZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldGFpbHM6IHt9LFxuICAgICAgZmluZXM6IHt9LFxuICAgICAgbG9hbnM6IHt9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xuICAgICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXSxcbiAgICAgICAgaW5zdGl0dXRpb246IHtcbiAgICAgICAgICAgIGNvZGU6IGp3dERhdGEudmlld0luc3RpdHV0aW9uQ29kZSxcbiAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnN0aXR1dGlvblxuICAgICAgICB9LFxuICAgICAgICBpbnRlcmZhY2VMYW5ndWFnZTogdVNtcy5nZXRVc2VyTGFuZ3VhZ2UoKSB8fCB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2UsXG4gICAgICAgIGlwOiB7XG4gICAgICAgICAgYWRkcmVzczogand0RGF0YS5pcFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxufVxuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgQ3NzU2VsZWN0b3JHZW5lcmF0b3IsIHJvb3QsXG4gICAgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG4gIENzc1NlbGVjdG9yR2VuZXJhdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5kZWZhdWx0X29wdGlvbnMgPSB7XG4gICAgICBzZWxlY3RvcnM6IFsnaWQnLCAnY2xhc3MnLCAndGFnJywgJ250aGNoaWxkJ11cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQ3NzU2VsZWN0b3JHZW5lcmF0b3Iob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmRlZmF1bHRfb3B0aW9ucyk7XG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIga2V5LCByZXN1bHRzLCB2YWw7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgdmFsID0gb3B0aW9uc1trZXldO1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0X29wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLm9wdGlvbnNba2V5XSA9IHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuaXNFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuICEhKChlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Lm5vZGVUeXBlIDogdm9pZCAwKSA9PT0gMSk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRQYXJlbnRzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGN1cnJlbnRfZWxlbWVudCwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgY3VycmVudF9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaXNFbGVtZW50KGN1cnJlbnRfZWxlbWVudCkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50X2VsZW1lbnQpO1xuICAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGN1cnJlbnRfZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VGFnU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZUl0ZW0oZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2FuaXRpemVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGNoYXJhY3RlcnM7XG4gICAgICBjaGFyYWN0ZXJzID0gKGl0ZW0uc3BsaXQoJycpKS5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICc6Jykge1xuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArICgnOicuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkgKyBcIiBcIjtcbiAgICAgICAgfSBlbHNlIGlmICgvWyAhXCIjJCUmJygpKissLlxcLzs8PT4/QFxcW1xcXFxcXF1eYHt8fX5dLy50ZXN0KGNoYXJhY3RlcikpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaGFyYWN0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZShjaGFyYWN0ZXIpLnJlcGxhY2UoL1xcJS9nLCAnXFxcXCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXJzLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0SWRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBpZCwgc2FuaXRpemVkX2lkO1xuICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIGlmICgoaWQgIT0gbnVsbCkgJiYgKGlkICE9PSAnJykgJiYgISgvXFxzLy5leGVjKGlkKSkgJiYgISgvXlxcZC8uZXhlYyhpZCkpKSB7XG4gICAgICAgIHNhbml0aXplZF9pZCA9IFwiI1wiICsgKHRoaXMuc2FuaXRpemVJdGVtKGlkKSk7XG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzYW5pdGl6ZWRfaWQpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBzYW5pdGl6ZWRfaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0Q2xhc3NTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY2xhc3Nfc3RyaW5nLCBpdGVtLCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGNsYXNzX3N0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPSBudWxsKSB7XG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9eXFxzfFxccyQvZywgJycpO1xuICAgICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9PSAnJykge1xuICAgICAgICAgIHJlc3VsdCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBrLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICAgICAgICAgIHJlZiA9IGNsYXNzX3N0cmluZy5zcGxpdCgvXFxzKy8pO1xuICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSByZWZba107XG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChcIi5cIiArICh0aGlzLnNhbml0aXplSXRlbShpdGVtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGUsIGJsYWNrbGlzdCwgaywgbGVuLCByZWYsIHJlZjEsIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgYmxhY2tsaXN0ID0gWydpZCcsICdjbGFzcyddO1xuICAgICAgcmVmID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IHJlZltrXTtcbiAgICAgICAgaWYgKHJlZjEgPSBhdHRyaWJ1dGUubm9kZU5hbWUsIGluZGV4T2YuY2FsbChibGFja2xpc3QsIHJlZjEpIDwgMCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiW1wiICsgYXR0cmlidXRlLm5vZGVOYW1lICsgXCI9XCIgKyBhdHRyaWJ1dGUubm9kZVZhbHVlICsgXCJdXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0TnRoQ2hpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjb3VudGVyLCBrLCBsZW4sIHBhcmVudF9lbGVtZW50LCBzaWJsaW5nLCBzaWJsaW5ncztcbiAgICAgIHBhcmVudF9lbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaWYgKHBhcmVudF9lbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHNpYmxpbmdzID0gcGFyZW50X2VsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChrID0gMCwgbGVuID0gc2libGluZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZ3Nba107XG4gICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KHNpYmxpbmcpKSB7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gXCI6bnRoLWNoaWxkKFwiICsgY291bnRlciArIFwiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgdmFyIGlzX3VuaXF1ZSwgcmVzdWx0O1xuICAgICAgaXNfdW5pcXVlID0gZmFsc2U7XG4gICAgICBpZiAoKHNlbGVjdG9yICE9IG51bGwpICYmIHNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICByZXN1bHQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxICYmIHJlc3VsdFswXSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgIGlzX3VuaXF1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpc191bmlxdWU7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBbGxTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0OiBudWxsLFxuICAgICAgICBpOiBudWxsLFxuICAgICAgICBjOiBudWxsLFxuICAgICAgICBhOiBudWxsLFxuICAgICAgICBuOiBudWxsXG4gICAgICB9O1xuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAndGFnJykgPj0gMCkge1xuICAgICAgICByZXN1bHQudCA9IHRoaXMuZ2V0VGFnU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdpZCcpID49IDApIHtcbiAgICAgICAgcmVzdWx0LmkgPSB0aGlzLmdldElkU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdjbGFzcycpID49IDApIHtcbiAgICAgICAgcmVzdWx0LmMgPSB0aGlzLmdldENsYXNzU2VsZWN0b3JzKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnYXR0cmlidXRlJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuYSA9IHRoaXMuZ2V0QXR0cmlidXRlU2VsZWN0b3JzKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnbnRoY2hpbGQnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5uID0gdGhpcy5nZXROdGhDaGlsZFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RVbmlxdWVuZXNzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHZhciBmb3VuZF9lbGVtZW50cywgcGFyZW50O1xuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgZm91bmRfZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICByZXR1cm4gZm91bmRfZWxlbWVudHMubGVuZ3RoID09PSAxICYmIGZvdW5kX2VsZW1lbnRzWzBdID09PSBlbGVtZW50O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGl0ZW1zLCB0YWcpIHtcbiAgICAgIHZhciBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHJlZiwgcmVmMTtcbiAgICAgIHJlZiA9IHRoaXMuZ2V0Q29tYmluYXRpb25zKGl0ZW1zKTtcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBpdGVtID0gcmVmW2tdO1xuICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGFnICE9IG51bGwpIHtcbiAgICAgICAgcmVmMSA9IGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZyArIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcbiAgICAgICAgICBpdGVtID0gcmVmMVtsXTtcbiAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFVuaXF1ZVNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGZvdW5kX3NlbGVjdG9yLCBrLCBsZW4sIHJlZiwgc2VsZWN0b3JfdHlwZSwgc2VsZWN0b3JzO1xuICAgICAgc2VsZWN0b3JzID0gdGhpcy5nZXRBbGxTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICByZWYgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzO1xuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIHNlbGVjdG9yX3R5cGUgPSByZWZba107XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3JfdHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMuaSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMuaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBzZWxlY3RvcnMudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmMgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5jLCBzZWxlY3RvcnMudCk7XG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmEgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5hLCBzZWxlY3RvcnMudCk7XG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbnRoY2hpbGQnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyonO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgYWxsX3NlbGVjdG9ycywgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCBwYXJlbnRzLCByZXN1bHQsIHNlbGVjdG9yLCBzZWxlY3RvcnM7XG4gICAgICBhbGxfc2VsZWN0b3JzID0gW107XG4gICAgICBwYXJlbnRzID0gdGhpcy5nZXRQYXJlbnRzKGVsZW1lbnQpO1xuICAgICAgZm9yIChrID0gMCwgbGVuID0gcGFyZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBpdGVtID0gcGFyZW50c1trXTtcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLmdldFVuaXF1ZVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCkge1xuICAgICAgICAgIGFsbF9zZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGVjdG9ycyA9IFtdO1xuICAgICAgZm9yIChsID0gMCwgbGVuMSA9IGFsbF9zZWxlY3RvcnMubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XG4gICAgICAgIGl0ZW0gPSBhbGxfc2VsZWN0b3JzW2xdO1xuICAgICAgICBzZWxlY3RvcnMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLmpvaW4oJyA+ICcpO1xuICAgICAgICBpZiAodGhpcy50ZXN0U2VsZWN0b3IoZWxlbWVudCwgcmVzdWx0KSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgIHZhciBpLCBqLCBrLCBsLCByZWYsIHJlZjEsIHJlc3VsdDtcbiAgICAgIGlmIChpdGVtcyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBbW11dO1xuICAgICAgZm9yIChpID0gayA9IDAsIHJlZiA9IGl0ZW1zLmxlbmd0aCAtIDE7IDAgPD0gcmVmID8gayA8PSByZWYgOiBrID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytrIDogLS1rKSB7XG4gICAgICAgIGZvciAoaiA9IGwgPSAwLCByZWYxID0gcmVzdWx0Lmxlbmd0aCAtIDE7IDAgPD0gcmVmMSA/IGwgPD0gcmVmMSA6IGwgPj0gcmVmMTsgaiA9IDAgPD0gcmVmMSA/ICsrbCA6IC0tbCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdFtqXS5jb25jYXQoaXRlbXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnNoaWZ0KCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgICByZXN1bHQgPSByZXN1bHQubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uam9pbignJyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcblxuICB9KSgpO1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCA/IGRlZmluZS5hbWQgOiB2b2lkIDApIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG4gICAgcm9vdC5Dc3NTZWxlY3RvckdlbmVyYXRvciA9IENzc1NlbGVjdG9yR2VuZXJhdG9yO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKlxuICBHZW5lcmFsIFxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3BsaXQoJy0nKS5tYXAoKGQsaSxhKSA9PiAgaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6ZCkuam9pbignJyk7XG59XG4iLCIvKlxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXG5cbiAgQWxsIGNvbXBvbmVudHMgYXJlIGRlY2xhcmVkIGluIFwiY29tcG9uZW50cy5qc1wiXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0IFByaW1vIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8nXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXInXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcblxuLy9tYWtlIFByaW1vIHB1YmxpY1xud2luZG93LlByaW1vID0gUHJpbW87XG4vL2xvYWQgUHJpbW9FeHBsb3JlciBVSSBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBpcyByYW5cbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICBpZiAoUHJpbW8uaXNEZWJ1Z0VuYWJsZWQoKSkge1xuICAgIGxldCB1aVVSTCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1kb20tdWkvZmMwODY4ZGYvanMvY3VzdG9tLmpzJztcblxuICAgIEhlbHBlci5sb2FkU2NyaXB0KHVpVVJMKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RpbmcgVUknKTtcbiAgICAgIFByaW1vLmV4cGxvcmUudWkudG9nZ2xlKCk7XG4gICAgfSk7XG4gIH1cbn0sIDIwMDApO1xuXG4vLyBzdGFuZGFyZCBnb29nbGUgYW5hbHl0aWNzIHRyYWNraW5nIGNvZGVcbihmdW5jdGlvbiAoaSwgcywgbywgZywgciwgYSwgbSkge1xuICBpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IHI7aVtyXSA9IGlbcl0gfHwgZnVuY3Rpb24gKCkge1xuICAgIChpW3JdLnEgPSBpW3JdLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKTtcbiAgfSwgaVtyXS5sID0gMSAqIG5ldyBEYXRlKCk7YSA9IHMuY3JlYXRlRWxlbWVudChvKSwgbSA9IHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYyA9IDE7YS5zcmMgPSBnO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgbSk7XG59KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsICdnYScpO1xuXG5nYSgnY3JlYXRlJywgJ1VBLTIyMTYyMzkwLTEzJywgJ2F1dG8nKTtcbmdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG5cbi8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnY2VudHJhbEN1c3RvbScsWyduZ01hdGVyaWFsJ10pXG4gICAgICAgICAgICAgICAgIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZGJhY2snKVxuICAgICAgICAgICAgICAgICAuY29uZmlnKCgkc2NlRGVsZWdhdGVQcm92aWRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICRzY2VEZWxlZ2F0ZVByb3ZpZGVyLnJlc291cmNlVXJsV2hpdGVsaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICcqKidcbiAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vaG90a2V5cy1qc0AyLjAuOC9kaXN0L2hvdGtleXMubWluLmpzJykudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hvdGtleXMuanMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9kMWJ4aDh1YXMxbW53Ny5jbG91ZGZyb250Lm5ldC9hc3NldHMvZW1iZWQuanM/JyArIERhdGUubm93KCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbHRtZXJpY3MuanMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9yZWNvbW1lbmRlci5iaWJ0aXAuZGUvanMvYmlidGlwX3poYl9sdXplcm4uanMnKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmlidGlwLmpzIGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICB9KS5ydW4oWyckcm9vdFNjb3BlJywgJyRsb2NhdGlvbicsICckd2luZG93JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgIC8vc2VuZCB0byBHQSBldmVyeSB0aW1lIHRoZSBVUkwgY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAkd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgeyBsb2NhdGlvbjogJGxvY2F0aW9uLnVybCgpIH0pO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICAgLnNlcnZpY2UoJ01lc3NhZ2VTZXJ2aWNlJywgTWVzc2FnZVNlcnZpY2UpO1xuXG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxuICBpZiAoY29tcG9uZW50LmVuYWJsZWQpIHtcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICAgIC8vZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XG4gICAgICBlbGVtZW50cy5wdXNoKHsgJ25hbWUnOiBjb21wb25lbnQubmFtZSwgJ2VuYWJsZUluVmlldyc6IGNvbXBvbmVudC5lbmFibGVJblZpZXcgfSk7XG4gICAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xuXG4gICAgfVxuICAgIGFwcC5jb25zdGFudCgnYWZ0ZXJDb21wb25lbnRzJywgYWZ0ZXJDb21wb25lbnRzKTtcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xuICB9XG59KTtcblxuXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LGkpID0+IHtcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcblxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XG4gICAgYmluZGluZ3M6e1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxuICB9KTtcbn0pO1xuIl19
