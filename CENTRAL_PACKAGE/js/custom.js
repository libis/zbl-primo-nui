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
    self.item = self.parentCtrl.parentCtrl.item;
    self.targets = {};
    window.lastItem = self.item;
    self.updateTargetsWhenOpenURLAvailable();
  }

  _createClass(SfxLinksController, [{
    key: 'updateTargetsWhenOpenURLAvailable',
    value: function updateTargetsWhenOpenURLAvailable() {
      var self = this;
      self.scope.$watch(function () {
        try {
          if (self.openurl && self.openurl.length > 0) {
            return self.openurl;
          } else {
            return '';
          }
        } catch (e) {
          return '';
        }
      }, function (n, o) {
        if (n && n.length > 0) {
          _helper2.default.http.get(self.targetsUrl).then(function (targets) {
            self.targets = self.normalizeTargets(targets.data);
            //console.log(self.targets);
          });
        }
      });
    }
  }, {
    key: 'normalizeTargets',
    value: function normalizeTargets(targets) {
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
    key: 'targetsUrl',
    get: function get() {
      return this.lookupURL + '?type=targets&sourceURL=' + encodeURIComponent(this.openurl) + '&proxySuffix=' + encodeURIComponent(this.proxySuffix);
    }
  }, {
    key: 'sfxLinksUrl',
    get: function get() {
      return this.lookupURL + '?type=targets&sourceURL=' + encodeURIComponent(this.openurl) + '&proxySuffix=' + encodeURIComponent(this.proxySuffix) + '&noProxy=1';
    }
  }, {
    key: 'openurl',
    get: function get() {
      var self = this;

      if (self.item && self.item.delivery) {
        var openUrlList = self.item.delivery.link.filter(function (f) {
          return (/^openurl/.test(f.displayLabel)
          );
        }).map(function (m) {
          return m.linkURL;
        });
        if (openUrlList.length > 0) {
          return openUrlList[0];
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
          return _openUrlList[0];
        }
      }

      return '';
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
  bindings: { parentCtrl: '<' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9saW5rcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9nZW5lcmFsL2xvY2F0aW9uTGlua3MuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZWFyY2hCYXJBZnRlci9icm93c2VCdXR0b24uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbGVydE1lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1WaWV3T25saW5lQWZ0ZXIvc2Z4TGlua3MuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2ZhY2V0cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vcmVjb3Jkcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vdXNlci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vdmlldy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL3V0aWxzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7Ozs7Ozs7OztBQVdBOzs7QUFGQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztJQUdxQixlOzs7Ozs7O3dCQUVGO0FBQ2Y7Ozs7Ozs7Ozs7O0FBWUEsYUFBTyxDQUFDO0FBQ0osY0FBTSxTQURGO0FBRUosb0NBRkk7QUFHSixpQkFBUyxJQUhMO0FBSUosa0JBQVUsa0NBSk47QUFLSixzQkFBYztBQUxWLE9BQUQsRUFPTDtBQUNFLGNBQU0sZUFEUjtBQUVFLHdDQUZGO0FBR0UsaUJBQVMsSUFIWDtBQUlOO0FBQ1Esa0JBQVUsdUJBTFo7QUFNRSxzQkFBYztBQU5oQixPQVBLLEVBZUw7QUFDRSxjQUFNLFdBRFI7QUFFRSwwQ0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJRSxrQkFBVSx3QkFKWjtBQUtFLHNCQUFjO0FBTGhCLE9BZkssRUFzQkw7QUFDRSxjQUFNLFVBRFI7QUFFRSxrQ0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJRSxrQkFBVSxJQUpaO0FBS0Usc0JBQWM7QUFMaEIsT0F0QkssRUE2Qkw7QUFDRSxjQUFNLHlCQURSO0FBRUUsa0RBRkY7QUFHRSxpQkFBUyxJQUhYO0FBSUUsa0JBQVUsMEJBSlo7QUFLRSxzQkFBYztBQUxoQixPQTdCSyxFQW9DTDtBQUNFLGNBQU0saUJBRFI7QUFFRSw0Q0FGRjtBQUdFLGlCQUFTLElBSFg7QUFJRSxrQkFBVSxpQkFKWjtBQUtFLHNCQUFjO0FBTGhCLE9BcENLLEVBMkNMO0FBQ0UsY0FBTSxzQkFEUjtBQUVFLG9EQUZGO0FB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QTBCLGdCQUFnQixVQUFVLFlBQXBELEVBQWQ7QUFDQSxzQkFBZ0IsVUFBVSxRQUExQixJQUFzQyxRQUF0QztBQUVEO0FBQ0QsUUFBSSxRQUFKLENBQWEsaUJBQWIsRUFBZ0MsZUFBaEM7QUFDQSxRQUFJLFNBQUosQ0FBYyxVQUFVLElBQVYsQ0FBZSxXQUFmLEVBQWQsRUFBNEMsVUFBVSxNQUF0RDtBQUNEO0FBQ0YsQ0FiRDs7QUFnQkE7QUFDQSxPQUFPLElBQVAsQ0FBWSxlQUFaLEVBQTZCLE9BQTdCLENBQXFDLFVBQUMsU0FBRCxFQUFXLENBQVgsRUFBaUI7QUFDcEQsTUFBSSxnQkFBZ0IsZ0JBQWdCLFNBQWhCLENBQXBCOztBQUVBLE1BQUksU0FBSixDQUFjLFVBQVUsV0FBVixFQUFkLEVBQXVDO0FBQ3JDLGNBQVM7QUFDUCxrQkFBWTtBQURMLEtBRDRCO0FBSXJDLGNBQVUsY0FBYyxHQUFkLENBQWtCO0FBQUEsbUJBQVMsRUFBRSxJQUFYLCtCQUF5QyxFQUFFLElBQTNDO0FBQUEsS0FBbEIsRUFBc0UsSUFBdEUsQ0FBMkUsRUFBM0U7QUFKMkIsR0FBdkM7QUFNRCxDQVREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIvKlxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxuXG4gIFJld3JpdGUgdGhpcyB3aGVuIGltcG9ydHMgY2FuIGJlIGRvbmUgZHluYW1pY2FsbHlcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCAnLi91dGlscydcblxuLyogaW1wb3J0IHlvdXIgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24qL1xuaW1wb3J0IHtwbnhYbWxDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwnXG5pbXBvcnQge3NmeExpbmtzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVmlld09ubGluZUFmdGVyL3NmeExpbmtzLmpzJ1xuaW1wb3J0IHthbHRtZXRyaWNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL2FsdG1ldHJpYydcbmltcG9ydCB7bGlua3NDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2xpbmtzJ1xuaW1wb3J0IHtsb2NhdGlvbkxpbmtzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9sb2NhdGlvbkxpbmtzJ1xuaW1wb3J0IHtzZWFyY2hBbHNvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvJ1xuaW1wb3J0IHtzZWFyY2hBbHNvQm9keUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keSdcbmltcG9ydCB7YnJvd3NlQnV0dG9uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoQmFyQWZ0ZXIvYnJvd3NlQnV0dG9uJ1xuaW1wb3J0IHtmaW5lc01lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlJ1xuaW1wb3J0IHthbGVydE1lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYWxlcnRNZXNzYWdlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XG5cbiAgc3RhdGljIGdldCBhbGwoKSB7XG4gICAgLypcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcbiAgICAgIGNvbmZpZyA9IHRoZSBpbXBvcnRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxuXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cbiAgICAgIHJlc3VsdHMgaW46XG4gICAgICAgIDxwcm0tbG9nby1hZnRlciBwYXJlbnRDdHJsPSckY3RybCc+XG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XG4gICAgKi9cbiAgICByZXR1cm4gW3tcbiAgICAgICAgbmFtZTogJ3BueC14bWwnLFxuICAgICAgICBjb25maWc6IHBueFhtbENvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1zZngtbGlua3MnLFxuICAgICAgICBjb25maWc6IHNmeExpbmtzQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuLy8gICAgICAgIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS12aWV3LW9ubGluZS1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FsdG1ldHJpYycsXG4gICAgICAgIGNvbmZpZzogYWx0bWV0cmljQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtbGluaycsXG4gICAgICAgIGNvbmZpZzogbGlua3NDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiBudWxsLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtbG9jYXRpb24taXRlbXMtbGluaycsXG4gICAgICAgIGNvbmZpZzogbG9jYXRpb25MaW5rc0NvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tbG9jYXRpb24taXRlbXMtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6Ymwtc2VhcmNoLWFsc28nLFxuICAgICAgICBjb25maWc6IHNlYXJjaEFsc29Db25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLXNlYXJjaC1hbHNvLWJvZHknLFxuICAgICAgICBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1icm93c2UtYnV0dG9uJyxcbiAgICAgICAgY29uZmlnOiBicm93c2VCdXR0b25Db25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLXNlYXJjaC1iYXItYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtYWxlcnQtbWVzc2FnZScsXG4gICAgICAgIGNvbmZpZzogYWxlcnRNZXNzYWdlQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1maW5lcy1tZXNzYWdlJyxcbiAgICAgICAgY29uZmlnOiBmaW5lc01lc3NhZ2VDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9XG4gICAgXS5maWx0ZXIoKGNvbXBvbmVudCkgPT4gKGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IGxpbmtzSE1UTCBmcm9tICcuL2xpbmtzLmh0bWwnXG5cbmNsYXNzIExpbmtzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgc2VsZi5pc09uQ2FtcHVzID0gdXNlci5pc09uQ2FtcHVzKCk7XG4gICAgICBzZWxmLmlzTG9nZ2VkSW4gPSB1c2VyLmlzTG9nZ2VkSW4oKTtcbiAgICAgIHNlbGYuYWxsRmluZXMgPSAge1xuICAgICAgICBjb3VudDogdXNlci5maW5lcy5sZW5ndGgsXG4gICAgICAgIHN1bTogKHVzZXIuZmluZXMgPyB1c2VyLmZpbmVzLm1hcChmID0+IHBhcnNlRmxvYXQoZi5maW5lc3VtKSkucmVkdWNlKChwLGMpPT4gcCtjLCAwKSA6IDApXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgb25DYW1wdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPbkNhbXB1cztcbiAgfVxuXG4gIGdldCBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvZ2dlZEluO1xuICB9XG5cbiAgZ2V0IGZpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbEZpbmVzO1xuICB9XG5cbiAgZ2V0IGxpbmtDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBsaW5rVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0IHx8ICcnO1xuICB9XG5cbiAgZ2V0IGxpbmtVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsIHx8ICcnO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgbGlua3NDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgY2xhc3M6ICdAJyxcbiAgICB0ZXh0OiAnQCcsXG4gICAgdXJsOiAnQCdcbiAgfSxcbiAgY29udHJvbGxlcjogTGlua3NDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogbGlua3NITVRMXG59XG4iLCJpbXBvcnQgbG9jYXRpb25MaW5rc0hUTUwgZnJvbSAnLi9sb2NhdGlvbkxpbmtzLmh0bWwnXG5cbmV4cG9ydCBsZXQgbG9jYXRpb25MaW5rc0NvbmZpZyA9IHtcbiAgdGVtcGxhdGU6IGxvY2F0aW9uTGlua3NIVE1MXG59XG4iLCJpbXBvcnQgYWx0bWV0cmljSFRNTCBmcm9tICcuL2FsdG1ldHJpYy5odG1sJ1xuXG4vKlxuLy9zY3JpcHQgbmVlZHMgdG8gYmUgbG9hZGVkIGZpcnN0LiBDYW4gYmUgcHV0IGluIHRoZSAkb25Jbml0KCkgZnVuY3Rpb25cbi8vb3IgYmV0dGVyIGluIHJ1biBtZXRob2QuXG5hcHAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xuICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9kMWJ4aDh1YXMxbW53Ny5jbG91ZGZyb250Lm5ldC9hc3NldHMvZW1iZWQuanM/JyArIERhdGUubm93KCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdhbHRtZXJpY3MuanMgbG9hZGVkJyk7XG4gIH0pO1xufSk7XG4qL1xuXG5cbmNsYXNzIEFsdE1ldHJpY0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJHdpbmRvdywgJHNjb3BlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGxldCBpdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbTtcblxuICAgIHNlbGYuZG9pID0gJyc7XG4gICAgc2VsZi5pc2JuID0gJyc7XG4gICAgc2VsZi5pZCA9IHNlbGYuZ3VpZCgpO1xuICAgIHNlbGYucmVjb3JkaWQgPSAnJztcblxuXG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5wbnggJiYgaXRlbS5wbnguYWRkYXRhKSB7XG4gICAgICBzZWxmLnJlY29yZGlkID0gaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcbiAgICAgIGlmIChpdGVtLnBueC5hZGRhdGEuZG9pKSB7XG4gICAgICAgIHNlbGYuZG9pID0gaXRlbS5wbnguYWRkYXRhLmRvaVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0ucG54LmFkZGF0YS5pc2JuKSB7XG4gICAgICAgIHNlbGYuaXNibiA9IGl0ZW0ucG54LmFkZGF0YS5pc2JuWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vdGhpcyBpcyBhIHdhdGNoZXIgb24gdGhlIGxvY2FsIHNjb3BlIGFuZCB3aWxsIHRyaWdnZXIgYWx0bWV0cmljXG4gICAgbGV0IGFsdG1ldHJpY1dhdGNoZXIgPSAkc2NvcGUuJHdhdGNoKCgpID0+IHtcbiAgICAgIGxldCBhbHRtZXRyaWNMb2FkZWQgPSAodHlwZW9mIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQpID09PSAnZnVuY3Rpb24nO1xuICAgICAgbGV0IGlzYm5FeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWx0bWV0cmljLWlzYm4tJHtzZWxmLmlkfWApICE9IG51bGw7XG4gICAgICBsZXQgZG9pRXhpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FsdG1ldHJpYy1kb2ktJHtzZWxmLmlkfWApICE9IG51bGw7XG4gICAgICBsZXQgcnVuVHJpZ2dlciA9ICggYWx0bWV0cmljTG9hZGVkICYmIChpc2JuRXhpc3RzIHx8IGRvaUV4aXN0cykgKTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhzZWxmLmlkLCBhbHRtZXRyaWNMb2FkZWQsIGlzYm5FeGlzdHMsIGRvaUV4aXN0cywgcnVuVHJpZ2dlcik7XG4gICAgICByZXR1cm4gcnVuVHJpZ2dlcjtcbiAgICB9LCAobiwgbykgPT4ge1xuICAgICAgaWYgKG4gPT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyaWdnZXIgYWx0bWV0cmljIGZvcjpcIiwgc2VsZi5yZWNvcmRpZCk7XG4gICAgICAgICR3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KGAjYWx0bWV0cmljLWlzYm4tJHtzZWxmLmlkfWApO1xuICAgICAgICAkd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChgI2FsdG1ldHJpYy1kb2ktJHtzZWxmLmlkfWApO1xuICAgICAgICBhbHRtZXRyaWNXYXRjaGVyKCk7IC8vZGVyZWdpc3RlciB3YXRjaGVyXG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgZ3VpZCgpIHtcbiAgICBsZXQgczQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgfTtcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICB9XG59XG5cbkFsdE1ldHJpY0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJHdpbmRvdycsICckc2NvcGUnXTtcblxuZXhwb3J0IGxldCBhbHRtZXRyaWNDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEFsdE1ldHJpY0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBhbHRtZXRyaWNIVE1MXG59XG4iLCIvL2ZhY2V0cy5mYWNldC5mYWNldF9zZWFyY2hfYWxzb1xuY2xhc3MgU2VhcmNoQWxzb0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkdHJhbnNsYXRlKXtcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy51bnNoaWZ0KHtcbiAgICAgIG5hbWU6ICdzZWFyY2hfYWxzbycsXG4gICAgICBkaXNwbGF5ZWRUeXBlOiAnZXhhY3QnLFxuICAgICAgbGltaXRDb3VudDogMCxcbiAgICAgIGZhY2V0R3JvdXBDb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgdmFsdWVzOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfVxufVxuXG5TZWFyY2hBbHNvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckdHJhbnNsYXRlJ107XG5cbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6e3BhcmVudEN0cmw6JzwnfSxcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0NvbnRyb2xsZXJcbn1cbiIsImltcG9ydCBzZWFyY2hBbHNvQm9keUhUTUwgZnJvbSAnLi9zZWFyY2hBbHNvQm9keS5odG1sJ1xuXG5jbGFzcyBTZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkbG9jYXRpb24pe1xuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xuICB9XG5cbiAgZ2V0IHNlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5zZWFyY2goKS5xdWVyeTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XG4gIH1cblxuICBfdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIFwibmFtZVwiOiBcIlN3aXNzYmliXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnN3aXNzYmliLmNoL3NlYXJjaC9yZXN1bHRzPyZsb29rZm9yPVwiLFxuICAgICAgXCJpbWdcIjogXCJodHRwczovL3ByaW1vLWRpcmVjdC1ldS1zYi5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcHJpbW8tZXhwbG9yZS9jdXN0b20vNDFaQkwvaW1nL3N3aXNzYmliX2ljb24ucG5nXCIsXG4gICAgICBcInRvb2x0aXBcIjogXCJudWkuY3VzdG9taXppbmcuaWRzbHUuc2VhcmNoX2Fsc28udG9vbHRpcC5zd2lzc2JpYlwiLFxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlIFNjaG9sYXJcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxuICAgICAgXCJpbWdcIjogXCJodHRwczovL3ByaW1vLWRpcmVjdC1ldS1zYi5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcHJpbW8tZXhwbG9yZS9jdXN0b20vNDFaQkwvaW1nL2dvb2dsZV9pY29uLnBuZ1wiLFxuICAgICAgXCJ0b29sdGlwXCI6IFwibnVpLmN1c3RvbWl6aW5nLmlkc2x1LnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiV29ybGRjYXRcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cud29ybGRjYXQub3JnL3NlYXJjaD9xPVwiLFxuICAgICAgXCJpbWdcIjogXCJodHRwczovL3ByaW1vLWRpcmVjdC1ldS1zYi5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcHJpbW8tZXhwbG9yZS9jdXN0b20vNDFaQkwvaW1nL3dvcmxkY2F0X2ljb24ucG5nXCIsXG4gICAgICBcInRvb2x0aXBcIjogXCJudWkuY3VzdG9taXppbmcuaWRzbHUuc2VhcmNoX2Fsc28udG9vbHRpcC53b3JsZGNhdFwiLFxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcbiAgICAgICAgdmFyIHR5cGVfbWFwcGluZ3MgPSB7XG4gICAgICAgICAgXCJhbnlcIjogXCJrd1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJ0aVwiLFxuICAgICAgICAgIFwiY3JlYXRvclwiOiBcImF1XCIsXG4gICAgICAgICAgXCJzdWJqZWN0XCI6IFwic3VcIlxuICAgICAgICB9O1xuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xuICAgICAgICB2YXIgdHlwZSA9IHR5cGVfbWFwcGluZ3NbdGVybXNbMF1dIHx8IFwia3dcIjtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGVybXNbMl0gfHwgXCJcIjtcbiAgICAgICAgcmV0dXJuIHR5cGUgKyAnOicgKyBxdWVyeTtcblxuICAgICAgfVxuICAgIH1dO1xuICB9XG59XG5cblNlYXJjaEFsc29Cb2R5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcblxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keUNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBzZWFyY2hBbHNvQm9keUhUTUxcbn1cbiIsImltcG9ydCBicm93c2VCdXR0b25IVE1MIGZyb20gJy4vYnJvd3NlQnV0dG9uLmh0bWwnXG5cbmNsYXNzIEJyb3dzZUJ1dHRvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc3RhdGUsICRjb21waWxlLCAkc2NvcGUpIHtcbiAgICB0aGlzLnN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXN3aXRjaC1idXR0b25zJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuY29tcGlsZShicm93c2VCdXR0b25IVE1MKSh0aGlzLnNjb3BlKSk7ICAgIFxuICB9XG5cbiAgc3dpdGNoQnJvd3NlKCkge1xuICAgIHRoaXMuc3RhdGUuZ28oJ2V4cGxvcmVNYWluLmJyb3dzZVNlYXJjaCcsIHt2aWQ6IHdpbmRvdy5hcHBDb25maWcudmlkfSk7XG4gIH1cbn1cblxuQnJvd3NlQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJ107XG5cbmV4cG9ydCBsZXQgYnJvd3NlQnV0dG9uQ29uZmlnID0ge1xuICBiaW5kaW5ncyA6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogQnJvd3NlQnV0dG9uQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xuY2xhc3MgUG54WG1sQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoaG90a2V5cykge1xuICAgICAgaG90a2V5cyhcImN0cmwrZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcblxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwbngteG1sLXRyaWdnZXInKS5sZW5ndGggPT0gMCkge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BueC14bWwtdHJpZ2dlcicpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuXG4gIH1cbn1cblxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXG59XG4iLCJjbGFzcyBBbGVydE1lc3NhZ2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCBNZXNzYWdlU2VydmljZSkge1xuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XG4gIH1cbn1cblxuQWxlcnRNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnTWVzc2FnZVNlcnZpY2UnXTtcblxuZXhwb3J0IGxldCBhbGVydE1lc3NhZ2VDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogQWxlcnRNZXNzYWdlQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJjbGFzcyBGaW5lc01lc3NhZ2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgc2VsZi51c2VyID0gdXNlcjtcbiAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy9UT0RPOmV4dHJhY3QgaHRtbCB0byBpdHMgb3duIGZpbGUuIGZpbmQgb3V0IGhvdyB0byByZXNvbHZlIHt7fX1cblxuICAgICAgICBsZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbnVpLmN1c3RvbWl6aW5nLmlkc2x1LnlvdUhhdmVGaW5lcycpO1xuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXCQwLywgdXNlci5maW5lcy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ251aS5jdXN0b21pemluZy5pZHNsdS55b3VIYXZlRmluZXMucGF5Jyk7XG5cbiAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhgXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICA8YSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRvbWF0bztjb2xvcjogd2hpdGU7XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibWQtYnV0dG9uIG1kLXJhaXNlZCBtZC1zZWN1bmRhcnlcIiB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgIGhyZWY9JyMnPiR7cGF5fTwvYT5cbiAgICAgICAgICBgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xuXG5leHBvcnQgbGV0IGZpbmVzTWVzc2FnZUNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJpbXBvcnQgc2Z4TGlua3NIVE1MIGZyb20gJy4vc2Z4TGlua3MuaHRtbCdcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vLi4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXInXG5cbmNsYXNzIFNmeExpbmtzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSl7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XG4gICAgc2VsZi5pdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbTtcbiAgICBzZWxmLnRhcmdldHMgPSB7fTtcbiAgICB3aW5kb3cubGFzdEl0ZW0gPSBzZWxmLml0ZW07XG4gICAgc2VsZi51cGRhdGVUYXJnZXRzV2hlbk9wZW5VUkxBdmFpbGFibGUoKTtcbiAgfVxuXG4gIHVwZGF0ZVRhcmdldHNXaGVuT3BlblVSTEF2YWlsYWJsZSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7ICAgIFxuICAgIHNlbGYuc2NvcGUuJHdhdGNoKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxmLm9wZW51cmwgJiYgc2VsZi5vcGVudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5vcGVudXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSwgKG4sbykgPT57XG4gICAgICBpZiAobiAmJiBuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgSGVscGVyLmh0dHAuZ2V0KHNlbGYudGFyZ2V0c1VybCkudGhlbih0YXJnZXRzID0+IHtcbiAgICAgICAgICBzZWxmLnRhcmdldHMgPSBzZWxmLm5vcm1hbGl6ZVRhcmdldHModGFyZ2V0cy5kYXRhKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGYudGFyZ2V0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuXG4gIG5vcm1hbGl6ZVRhcmdldHModGFyZ2V0cyl7XG4gICAgbGV0IG5vcm1hbGl6ZWRUYXJnZXRzID0ge307XG5cbiAgICB0YXJnZXRzLnJlZHVjZSgodCwgYyk9PiB7ICAgICAgIFxuICAgICAgbGV0IGQgPSB0Lmhhc093blByb3BlcnR5KGMuZmFjaWxpdHkpID8gdFtjLmZhY2lsaXR5XSA6IFtdO1xuICAgICAgZC5wdXNoKGMpO1xuICAgICAgdFtjLmZhY2lsaXR5XSA9IGQ7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LCBub3JtYWxpemVkVGFyZ2V0cyk7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFRhcmdldHM7XG4gIH1cblxuICBnZXQgdGFyZ2V0c1VybCgpIHtcbiAgICByZXR1cm4gKGAke3RoaXMubG9va3VwVVJMfT90eXBlPXRhcmdldHMmc291cmNlVVJMPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMub3BlbnVybCl9JnByb3h5U3VmZml4PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucHJveHlTdWZmaXgpfWApO1xuICB9XG5cbiAgZ2V0IHNmeExpbmtzVXJsKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmxvb2t1cFVSTH0/dHlwZT10YXJnZXRzJnNvdXJjZVVSTD0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wZW51cmwpfSZwcm94eVN1ZmZpeD0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb3h5U3VmZml4KX0mbm9Qcm94eT0xYDtcbiAgfVxuXG4gIGdldCBvcGVudXJsKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmIChzZWxmLml0ZW0gJiYgc2VsZi5pdGVtLmRlbGl2ZXJ5KSB7XG4gICAgICBsZXQgb3BlblVybExpc3QgPSBzZWxmLml0ZW0uZGVsaXZlcnkubGluay5maWx0ZXIoZiA9PiAvXm9wZW51cmwvLnRlc3QoZi5kaXNwbGF5TGFiZWwpKS5tYXAobSA9PiBtLmxpbmtVUkwpO1xuICAgICAgaWYgKG9wZW5VcmxMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG9wZW5VcmxMaXN0WzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxmLml0ZW0gJiYgc2VsZi5pdGVtLmxpbmtFbGVtZW50KSB7XG4gICAgICAgIGxldCBvcGVuVXJsTGlzdCA9IHNlbGYuaXRlbS5saW5rRWxlbWVudC5saW5rcy5maWx0ZXIoZiA9PiAvXm9wZW51cmwvLnRlc3QoZi5kaXNwbGF5VGV4dCkpLm1hcChtID0+IG0ubGluayk7XG4gICAgICAgIGlmIChvcGVuVXJsTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9wZW5VcmxMaXN0WzBdO1xuICAgICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXQgcHJveHlTdWZmaXgoKSB7XG4gICAgbGV0IGN1cnJlbnRIb3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgbGV0IHByb3h5U3VmZml4ID0gJyc7XG4gICAgaWYgKGN1cnJlbnRIb3N0Lm1hdGNoKC9leGxpYnJpc2dyb3VwLmNvbS9nKSAhPSBudWxsKSB7XG4gICAgICBwcm94eVN1ZmZpeCA9IGN1cnJlbnRIb3N0LnJlcGxhY2UoLy4rXFwuZXhsaWJyaXNncm91cFxcLmNvbS9nLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3h5U3VmZml4O1xuICB9XG5cbiAgZ2V0IGxvb2t1cFVSTCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyAnLy9wcmltby5hZHZlc3RhLmNvbS9pbmRleC5waHAnO1xuICB9XG59XG5cblNmeExpbmtzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuZXhwb3J0IGxldCBzZnhMaW5rc0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxuICBjb250cm9sbGVyOiBTZnhMaW5rc0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBzZnhMaW5rc0hUTUxcbn1cbiIsImltcG9ydCBtZXNzYWdlU2VydmljZUhUTUwgZnJvbSAnLi9tZXNzYWdlU2VydmljZS5odG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICRjb21waWxlLCAkbWRUb2FzdCwgJHNjZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQpIHtcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcbiAgICB0aGlzLnNjZSA9ICRzY2U7XG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xuICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xuICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xuICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgfVxuXG4gIHNob3cobWVzc2FnZSA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCBudWxsO1xuICAgIGxldCBoaWRlRGVsYXkgPSBvcHRpb25zLmhpZGVEZWxheSB8fCAwO1xuICAgIGxldCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBudWxsO1xuICAgIGxldCBhY3Rpb25MYWJlbCA9IG9wdGlvbnMuYWN0aW9uTGFiZWwgfHwgJ3Vua25vd24nO1xuXG4gICAgdGhpcy50aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gY29kZSB0YWJsZSBlbnRyaWVzIGNhbiBub3QgaGF2ZSBlbXB0eSBkZXNjcmlwdGlvbnMuXG4gICAgICAgIC8vIG1lc3NhZ2UgPD0gMSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQhISEhXG4gICAgICAgIGxldCBtZXNzYWdlS2V5ID0gJ251aS5jdXN0b21pemluZy5pZHNsdS5hbGVydE1lc3NhZ2UnO1xuICAgICAgICBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudChtZXNzYWdlS2V5KTtcbiAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlID09IG1lc3NhZ2VLZXkgfHwgbWVzc2FnZSA8PSAxKSA/ICcnIDogbWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgdG9hc3RDb25maWcgPSB7XG4gICAgICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25MYWJlbCA9IGFjdGlvbkxhYmVsO1xuXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMub25BY3Rpb24gPSAoJGV2ZW50ID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2VsZi5yb290U2NvcGUpLmh0bWwoKSk7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzY29wZSkuaHRtbCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZW1wbGF0ZTogbWVzc2FnZVNlcnZpY2VIVE1MLFxuICAgICAgICAgIHBvc2l0aW9uOiAndG9wIGNlbnRlcicsXG4gICAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXlcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYubWRUb2FzdC5zaG93KHRvYXN0Q29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBtZXNzYWdlIHRvIGRpc3BsYXknKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG59XG5cbk1lc3NhZ2VTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGNvbXBpbGUnLCAnJG1kVG9hc3QnLCAnJHNjZScsICckdHJhbnNsYXRlJywgJyR0aW1lb3V0J107XG4iLCJpbXBvcnQgRXhwbG9yZSBmcm9tICcuL3ByaW1vL2V4cGxvcmUnXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9wcmltby92aWV3J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuXG4vKipcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xuICAvKipcbiAgICogUmV0dXJuIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGhhcyByYW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIEhlbHBlci5pc1ByaW1vQXZhaWxhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XG4gICAgcmV0dXJuIEV4cGxvcmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgcmVjb3Jkc1xuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxuICAgKi9cbiAgc3RhdGljIGdldCByZWNvcmRzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcbiAgICogQHJldHVybiB7RmFjZXRzfVxuICAgKi9cbiAgc3RhdGljIGdldCBmYWNldHMoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtWaWV3fVxuICAgKi9cbiAgc3RhdGljIGdldCB2aWV3KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBWaWV3KCkpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHVzZXIgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtVc2VyfVxuICAgKi9cbiAgc3RhdGljIGdldCB1c2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XG4gICAgICAgIEhlbHBlci51c2VyRmluZXNIVFRQKCkudGhlbigodXNlckZpbmVzKSA9PiB7XG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG4vL3RoaXMgaXMgcHJveHkgY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xuICBzdGF0aWMgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgbGV0IGMgPSBuZXcgQ29tcG9uZW50cygpO1xuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgYy5hZGQoc2VsZWN0b3IpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdWkoKSB7XG4gICAgaWYgKHRoaXMuX3VpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91aTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaGVscGVyKCkge1xuICAgIHJldHVybiBIZWxwZXI7XG4gIH1cbn1cbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcblxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcidcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJsaW5rKCl7XG4gICAgSGVscGVyLmJsaW5rKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNzc1BhdGgoKXtcbiAgICByZXR1cm4gY3NzU2VsZWN0b3JHZW5lcmF0b3IuZ2V0U2VsZWN0b3IodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldCBuYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XG4gIH1cblxuICBzY29wZSgpe1xuICAgIGlmIChIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKSl7XG4gICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuc2NvcGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJ1biBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgZmlyc3QnKTtcbiAgICB9XG4gIH1cblxuICBjdHJsKCl7XG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XG4gICAgaWYgKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygndXNpbmcgYWx0ZXJuYXRpdmUgbWV0aG9kIHRvIGdldCBjb250cm9sbGVyJyk7XG4gICAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XG4gICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXG4gICAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgfVxuXG4gIGFkZChzZWxlY3Rvcikge1xuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcblxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xuICB9XG5cbiAgZ2V0KHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBrZXlzKCl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gd2luZG93Lm5hbWUgPT09ICdOR19FTkFCTEVfREVCVUdfSU5GTyEnIHx8IHR5cGVvZihhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWxvZ28nKSkuc2NvcGUoKSkgIT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNvbXBvbmVudE5hbWVzKCkge1xuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0YWcgb2YgdGFncykge1xuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZXMuaW5jbHVkZXModGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudE5hbWVzLnNvcnQoKS5maWx0ZXIoKGUsIGksIGEpID0+IGkgPT09IGEuZmluZEluZGV4KChlMikgPT4gZSA9PT0gZTIpKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XG4gICAgICBsZXQgYyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3ByaW1vLWV4cGxvcmUnKTtcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcbiAgICAgICAgICBsZXQgaW5qZWN0b3IgICAgID0gcHJpbW9FeHBsb3JlLmluamVjdG9yKCk7XG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgaHR0cCgpIHtcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcbiAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICBsZXQgaCA9IGluamVjdG9yLmdldCgnJGh0dHAnKTtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XG4gICAgICAgICAgbGV0IGFwcEluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJywnYW5ndWxhckxvYWQnXSk7XG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXJMb2FkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xuICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiByb290U2NvcGU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xuICAgICAgaWYgKHJvb3RTY29wZSkge1xuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICAgIGlmICh1U01TKSB7XG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckRldGFpbHNIVFRQKCkge1xuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldChgL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvdXNlcnNldHRpbmdzP3ZpZD0ke3ZpZXdDb2RlfWApLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscy5kYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9maW5lcycpLnRoZW4odXNlckZpbmVzID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvbG9hbnMnKS50aGVuKHVzZXJMb2FucyA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XG5cbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSZWN0ID0gY29tcG9uZW50LmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYm9yZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUudG9wID0gZWxlbWVudFJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYm9yZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW1vdmVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibGlua0JvcmRlckVsZW1lbnQgPSAobnVtYmVyT2ZCbGlua3MgPSA0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcblxuICAgICAgICAgICAgaWYgKG51bWJlck9mQmxpbmtzIDwgMCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKChudW1iZXJPZkJsaW5rcyAlIDIpID09IDApID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBib3JkZXJFbGVtZW50ID0gY3JlYXRlQm9yZGVyRWxlbWVudCgpO1xuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9mYWNldHMoY29tcG9uZW50cyk7XG4gICAgfVxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IGZhY2V0cyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBfaXRlbXMoY29tcG9uZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tc2VhcmNoLXJlc3VsdC1saXN0LWFmdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInRyeSBhZ2FpblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5kYXRhO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlciA9IF9za2VsVXNlcikge1xuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGp3dERhdGEudXNlciB8fCAnJyxcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxuICAgICAgICBkaXNwbGF5X25hbWU6IHVTbXMuZ2V0VXNlck5hbWVGb3JEaXNwbGF5KCksXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBmaW5lczogdXNlci5maW5lcyxcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcbiAgICAgIH07XG4gIH1cblxuICBnZXQgX3NrZWxVc2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXRhaWxzOiB7fSxcbiAgICAgIGZpbmVzOiB7fSxcbiAgICAgIGxvYW5zOiB7fVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogand0RGF0YS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ10sXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXG4gICAgICAgICAgICBuYW1lOiB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW5zdGl0dXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxuICAgICAgICBpcDoge1xuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xuICAgICAgc2VsZWN0b3JzOiBbJ2lkJywgJ2NsYXNzJywgJ3RhZycsICdudGhjaGlsZCddXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENzc1NlbGVjdG9yR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5vcHRpb25zW2tleV0gPSB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAhISgoZWxlbWVudCAhPSBudWxsID8gZWxlbWVudC5ub2RlVHlwZSA6IHZvaWQgMCkgPT09IDEpO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudF9lbGVtZW50KTtcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBjaGFyYWN0ZXJzO1xuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyAoJzonLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpICsgXCIgXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcbiAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2FuaXRpemVkX2lkKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICByZXN1bHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goXCIuXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaXRlbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGJsYWNrbGlzdCA9IFsnaWQnLCAnY2xhc3MnXTtcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBhdHRyaWJ1dGUgPSByZWZba107XG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY291bnRlciwgaywgbGVuLCBwYXJlbnRfZWxlbWVudCwgc2libGluZywgc2libGluZ3M7XG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmdzW2tdO1xuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xuICAgICAgaWYgKChzZWxlY3RvciAhPSBudWxsKSAmJiBzZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBpc191bmlxdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNfdW5pcXVlO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QWxsU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdDogbnVsbCxcbiAgICAgICAgaTogbnVsbCxcbiAgICAgICAgYzogbnVsbCxcbiAgICAgICAgYTogbnVsbCxcbiAgICAgICAgbjogbnVsbFxuICAgICAgfTtcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ3RhZycpID49IDApIHtcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnaWQnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnY2xhc3MnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2F0dHJpYnV0ZScpID49IDApIHtcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ250aGNoaWxkJykgPj0gMCkge1xuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0VW5pcXVlbmVzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGZvdW5kX2VsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XG4gICAgICByZWYgPSB0aGlzLmdldENvbWJpbmF0aW9ucyhpdGVtcyk7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcbiAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiB0YWcgKyBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XG4gICAgICAgICAgaXRlbSA9IHJlZjFbbF07XG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRVbmlxdWVTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xuICAgICAgcmVmID0gdGhpcy5vcHRpb25zLnNlbGVjdG9ycztcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yX3R5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYywgc2VsZWN0b3JzLnQpO1xuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMubiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcqJztcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGFsbF9zZWxlY3RvcnMsIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcGFyZW50cywgcmVzdWx0LCBzZWxlY3Rvciwgc2VsZWN0b3JzO1xuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHBhcmVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwpIHtcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxlY3RvcnMgPSBbXTtcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICBpdGVtID0gYWxsX3NlbGVjdG9yc1tsXTtcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcbiAgICAgICAgaWYgKHRoaXMudGVzdFNlbGVjdG9yKGVsZW1lbnQsIHJlc3VsdCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XG4gICAgICBpZiAoaXRlbXMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gW1tdXTtcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRbal0uY29uY2F0KGl0ZW1zW2ldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG5cbiAgfSkoKTtcblxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwiLypcbiAgR2VuZXJhbCBcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xufVxuIiwiLypcbiAgQ2VudHJhbCBQYWNrYWdlIExvYWRlclxuXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBQcmltbyBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5pbXBvcnQgTWVzc2FnZVNlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvbWVzc2FnZVNlcnZpY2UnXG5cbi8vbWFrZSBQcmltbyBwdWJsaWNcbndpbmRvdy5QcmltbyA9IFByaW1vO1xuLy9sb2FkIFByaW1vRXhwbG9yZXIgVUkgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaXMgcmFuXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcbiAgICBsZXQgdWlVUkwgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtZG9tLXVpL2ZjMDg2OGRmL2pzL2N1c3RvbS5qcyc7XG5cbiAgICBIZWxwZXIubG9hZFNjcmlwdCh1aVVSTCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0aW5nIFVJJyk7XG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xuICAgIH0pO1xuICB9XG59LCAyMDAwKTtcblxuLy8gc3RhbmRhcmQgZ29vZ2xlIGFuYWx5dGljcyB0cmFja2luZyBjb2RlXG4oZnVuY3Rpb24gKGksIHMsIG8sIGcsIHIsIGEsIG0pIHtcbiAgaVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J10gPSByO2lbcl0gPSBpW3JdIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAoaVtyXS5xID0gaVtyXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cyk7XG4gIH0sIGlbcl0ubCA9IDEgKiBuZXcgRGF0ZSgpO2EgPSBzLmNyZWF0ZUVsZW1lbnQobyksIG0gPSBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmMgPSAxO2Euc3JjID0gZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIG0pO1xufSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCAnZ2EnKTtcblxuZ2EoJ2NyZWF0ZScsICdVQS0yMjE2MjM5MC0xMycsICdhdXRvJyk7XG5nYSgnc2VuZCcsICdwYWdldmlldycpO1xuXG4vL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NlbnRyYWxDdXN0b20nLFsnbmdNYXRlcmlhbCddKVxuICAgICAgICAgICAgICAgICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcbiAgICAgICAgICAgICAgICAgLmNvbmZpZygoJHNjZURlbGVnYXRlUHJvdmlkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAnKionXG4gICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL2hvdGtleXMtanNAMi4wLjgvZGlzdC9ob3RrZXlzLm1pbi5qcycpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdob3RrZXlzLmpzIGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2VtYmVkLmpzPycgKyBEYXRlLm5vdygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzLmpzIGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vcmVjb21tZW5kZXIuYmlidGlwLmRlL2pzL2JpYnRpcF96aGJfbHV6ZXJuLmpzJykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JpYnRpcC5qcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfSkucnVuKFsnJHJvb3RTY29wZScsICckbG9jYXRpb24nLCAnJHdpbmRvdycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICR3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAvL3NlbmQgdG8gR0EgZXZlcnkgdGltZSB0aGUgVVJMIGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5nYSgnc2VuZCcsICdwYWdldmlldycsIHsgbG9jYXRpb246ICRsb2NhdGlvbi51cmwoKSB9KTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgIC5zZXJ2aWNlKCdNZXNzYWdlU2VydmljZScsIE1lc3NhZ2VTZXJ2aWNlKTtcblxuXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxubGV0IGFmdGVyQ29tcG9uZW50cyA9IHt9O1xuXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXG4vL2luamVjdGVkXG5jb25zb2xlLmxvZygnTG9hZGluZyBjZW50cmFsQ3VzdG9tIGNvbXBvbmVudHMnKTtcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhjb21wb25lbnQubmFtZSlcbiAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSB7XG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xuICAgICAgbGV0IGVsZW1lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gfHwgW107XG4gICAgICAvL2VsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xuICAgICAgZWxlbWVudHMucHVzaCh7ICduYW1lJzogY29tcG9uZW50Lm5hbWUsICdlbmFibGVJblZpZXcnOiBjb21wb25lbnQuZW5hYmxlSW5WaWV3IH0pO1xuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcblxuICAgIH1cbiAgICBhcHAuY29uc3RhbnQoJ2FmdGVyQ29tcG9uZW50cycsIGFmdGVyQ29tcG9uZW50cyk7XG4gICAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcbiAgfVxufSk7XG5cblxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCxpKSA9PiB7XG4gIGxldCBzdWJDb21wb25lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudF07XG5cbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xuICAgIGJpbmRpbmdzOntcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke20ubmFtZX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttLm5hbWV9PmApLmpvaW4oXCJcIilcbiAgfSk7XG59KTtcbiJdfQ==
