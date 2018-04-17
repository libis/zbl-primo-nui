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
      }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/links":2,"./components/general/locationLinks":3,"./components/prmBriefResultAfter/altmetric":4,"./components/prmFacetAfter/searchAlso":5,"./components/prmFacetExactAfter/searchAlsoBody":6,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":7,"./components/prmViewOnlineAfter/sfxLinks.js":8,"./utils":18}],2:[function(require,module,exports){
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var altmetricHTML = '<div class="eth-altmetric-container layout-row">\n  <div aria-label="Altmetric" ng-if="$ctrl.doi != \'\'"  ng-click="$event.stopPropagation();"\n        data-link-target="_blank"\n        rel="noopener"\n        class="altmetric-embed"\n        data-hide-no-mentions="true"\n        data-badge-type="4" data-badge-popover="right" data-doi="{{$ctrl.doi}}">\n </div>\n <div aria-label="Altmetric" ng-if="$ctrl.isbn != \'\'"\n      ng-click="$event.stopPropagation();"\n      data-link-target="_blank" rel="noopener"\n      class="altmetric-embed" data-hide-no-mentions="true" data-badge-type="4"\n      data-badge-popover="right" data-isbn="{{$ctrl.isbn}}">\n </div>\n</div>\n';

var AltMetricController = function AltMetricController() {
  _classCallCheck(this, AltMetricController);

  var self = this;
  var item = self.parentCtrl.parentCtrl.item;

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
};

var altmetricConfig = exports.altmetricConfig = {
  bindings: { parentCtrl: '<' },
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

var searchAlsoBodyHTML = "<div ng-if=\"$ctrl.name === 'Weitersuchen in'\" class=\"idslu-furthersearch\">\n  <div ng-hide=\"$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed\">\n    <div class=\"section-content animate-max-height-variable\">\n      <div class=\"md-chips md-chips-wrap\">\n        <div ng-repeat=\"target in $ctrl.targets\" aria-live=\"polite\" class=\"md-chip animate-opacity-and-scale facet-element-marker-local4\">\n          <div class=\"md-chip-content layout-row\" role=\"button\" tabindex=\"9\">\n            <strong dir=\"auto\" title=\"{{ target.name }}\">\n              <a ng-href=\"{{ target.url + target.mapping($ctrl.search) }}\" target=\"_blank\"  title=\"{{ (target.tooltip | translate )}}\">\n                <img ng-src=\"{{ target.img }}\" width=\"22\" height=\"22\" style=\"vertical-align:middle;padding-right:2px;\"> {{ target.name }}\n              </a>\n            </strong>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

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

},{}],8:[function(require,module,exports){
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

var sfxLinksHTML = '<div ng-repeat="(targetFacility, normalizedTargets) in $ctrl.targets">        \n    <p class="fulltext-item" style="padding-top: 15px !important; margin-left: 25px !important; font-weight: bold;">Campusnetz {{targetFacility}}</p>\n    <div ng-repeat="target in normalizedTargets">        \n        <p class="fulltext-item" style="margin-left: 25px !important;">Volltext via \n            <a href="{{target.target_url}}" target="_blank">{{target.target_name}}</a>\n        </p>\n    </div>\n    <p class="fulltext-item" style="padding-top: 15px !important; margin-left: 25px !important; font-weight: bold;">Nicht am Campus? \n            <span style="font-weight: normal !important;">\n                <a href="{{normalizedTargets[0].infoURL}}" target="_blank">Externer Zugriff f\xFCr Campus-Angeh\xF6rige</a>\n            </span>\n    </p>                \n\n</div>';

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

},{"../../primo-explore-dom/js/primo/explore/helper":12}],9:[function(require,module,exports){
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

},{"./primo/explore":10,"./primo/explore/helper":12,"./primo/facets":13,"./primo/records":14,"./primo/user":15,"./primo/view":16}],10:[function(require,module,exports){
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

},{"./explore/components":11,"./explore/helper":12}],11:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":17,"./helper":12}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./explore/components":11,"./explore/helper":12}],14:[function(require,module,exports){
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

},{"./explore/components":11,"./explore/helper":12}],15:[function(require,module,exports){
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

},{"./explore/helper":12}],16:[function(require,module,exports){
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

},{"./explore/helper":12}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
'use strict';

var _primo = require('./primo-explore-dom/js/primo');

var _primo2 = _interopRequireDefault(_primo);

var _helper = require('./primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//make Primo public
window.Primo = _primo2.default;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
/*
  Central Package Loader

  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
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
}).run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
  $rootScope.$on('$locationChangeSuccess', function (event) {
    $window.ga('send', 'pageview', { location: $location.url() });
  });
}]).filter('stripAndLimitHtml', function () {
  return function (text, limit) {
    var changedString = String(text).replace(/<[^>]+>/gm, '');
    var length = changedString.length;
    return changedString.length > limit ? changedString.substr(0, limit - 1) + '...' : changedString;
  };
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

},{"./components":1,"./primo-explore-dom/js/primo":9,"./primo-explore-dom/js/primo/explore/helper":12}]},{},[19])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9saW5rcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9nZW5lcmFsL2xvY2F0aW9uTGlua3MuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS56aGwvQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVmlld09ubGluZUFmdGVyL3NmeExpbmtzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9jb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZmFjZXRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9yZWNvcmRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby91c2VyLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby92aWV3LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uemhsL0NFTlRSQUxfUEFDS0FHRS9qcy9wcmltby1leHBsb3JlLWRvbS9qcy92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLnpobC9DRU5UUkFMX1BBQ0tBR0UvanMvdXRpbHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7Ozs7Ozs7Ozs7O0FBV0E7OztBQUZBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0lBRXFCLGU7Ozs7Ozs7d0JBRUY7QUFDZjs7Ozs7Ozs7Ozs7QUFZQSxhQUFPLENBQUM7QUFDSixjQUFNLFNBREY7QUFF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QSxlQUFTLElBQVQsQ0FBYyxFQUFFLFFBQVEsVUFBVSxJQUFwQixFQUEwQixnQkFBZ0IsVUFBVSxZQUFwRCxFQUFkO0FBQ0Esc0JBQWdCLFVBQVUsUUFBMUIsSUFBc0MsUUFBdEM7QUFFRDtBQUNELFFBQUksUUFBSixDQUFhLGlCQUFiLEVBQWdDLGVBQWhDO0FBQ0EsUUFBSSxTQUFKLENBQWMsVUFBVSxJQUFWLENBQWUsV0FBZixFQUFkLEVBQTRDLFVBQVUsTUFBdEQ7QUFDRDtBQUNGLENBYkQ7O0FBZ0JBO0FBQ0EsT0FBTyxJQUFQLENBQVksZUFBWixFQUE2QixPQUE3QixDQUFxQyxVQUFDLFNBQUQsRUFBVyxDQUFYLEVBQWlCO0FBQ3BELE1BQUksZ0JBQWdCLGdCQUFnQixTQUFoQixDQUFwQjs7QUFFQSxNQUFJLFNBQUosQ0FBYyxVQUFVLFdBQVYsRUFBZCxFQUF1QztBQUNyQyxjQUFTO0FBQ1Asa0JBQVk7QUFETCxLQUQ0QjtBQUlyQyxjQUFVLGNBQWMsR0FBZCxDQUFrQjtBQUFBLG1CQUFTLEVBQUUsSUFBWCwrQkFBeUMsRUFBRSxJQUEzQztBQUFBLEtBQWxCLEVBQXNFLElBQXRFLENBQTJFLEVBQTNFO0FBSjJCLEdBQXZDO0FBTUQsQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xuaW1wb3J0IHtzZnhMaW5rc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVZpZXdPbmxpbmVBZnRlci9zZnhMaW5rcy5qcydcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXG5pbXBvcnQge2xpbmtzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9saW5rcydcbmltcG9ydCB7bG9jYXRpb25MaW5rc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvbG9jYXRpb25MaW5rcydcbmltcG9ydCB7c2VhcmNoQWxzb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvc2VhcmNoQWxzbydcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XG5cbiAgc3RhdGljIGdldCBhbGwoKSB7XG4gICAgLypcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcbiAgICAgIGNvbmZpZyA9IHRoZSBpbXBvcnRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxuXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cbiAgICAgIHJlc3VsdHMgaW46XG4gICAgICAgIDxwcm0tbG9nby1hZnRlciBwYXJlbnRDdHJsPSckY3RybCc+XG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XG4gICAgKi9cbiAgICByZXR1cm4gW3tcbiAgICAgICAgbmFtZTogJ3BueC14bWwnLFxuICAgICAgICBjb25maWc6IHBueFhtbENvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3pibC1zZngtbGlua3MnLFxuICAgICAgICBjb25maWc6IHNmeExpbmtzQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuLy8gICAgICAgIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS12aWV3LW9ubGluZS1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FsdG1ldHJpYycsXG4gICAgICAgIGNvbmZpZzogYWx0bWV0cmljQ29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtbGluaycsXG4gICAgICAgIGNvbmZpZzogbGlua3NDb25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiBudWxsLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6YmwtbG9jYXRpb24taXRlbXMtbGluaycsXG4gICAgICAgIGNvbmZpZzogbG9jYXRpb25MaW5rc0NvbmZpZyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86ICdwcm0tbG9jYXRpb24taXRlbXMtYWZ0ZXInLFxuICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd6Ymwtc2VhcmNoLWFsc28nLFxuICAgICAgICBjb25maWc6IHNlYXJjaEFsc29Db25maWcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJyxcbiAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnemJsLXNlYXJjaC1hbHNvLWJvZHknLFxuICAgICAgICBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsXG4gICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xuICAgICAgfVxuICAgIF0uZmlsdGVyKChjb21wb25lbnQpID0+IChjb21wb25lbnQuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKGNvbXBvbmVudC5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpKSk7XG4gIH1cbn1cbiIsImltcG9ydCBsaW5rc0hNVEwgZnJvbSAnLi9saW5rcy5odG1sJ1xuXG5jbGFzcyBMaW5rc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIFxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgIHNlbGYuaXNPbkNhbXB1cyA9IHVzZXIuaXNPbkNhbXB1cygpO1xuICAgICAgc2VsZi5pc0xvZ2dlZEluID0gdXNlci5pc0xvZ2dlZEluKCk7XG4gICAgICBzZWxmLmFsbEZpbmVzID0gIHtcbiAgICAgICAgY291bnQ6IHVzZXIuZmluZXMubGVuZ3RoLFxuICAgICAgICBzdW06ICh1c2VyLmZpbmVzID8gdXNlci5maW5lcy5tYXAoZiA9PiBwYXJzZUZsb2F0KGYuZmluZXN1bSkpLnJlZHVjZSgocCxjKT0+IHArYywgMCkgOiAwKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG9uQ2FtcHVzKCkge1xuICAgIHJldHVybiB0aGlzLmlzT25DYW1wdXM7XG4gIH1cblxuICBnZXQgbG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb2dnZWRJbjtcbiAgfVxuXG4gIGdldCBmaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxGaW5lcztcbiAgfVxuXG4gIGdldCBsaW5rQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgbGlua1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCB8fCAnJztcbiAgfVxuXG4gIGdldCBsaW5rVXJsKCkge1xuICAgIHJldHVybiB0aGlzLnVybCB8fCAnJztcbiAgfVxufVxuXG5leHBvcnQgbGV0IGxpbmtzQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIGNsYXNzOiAnQCcsXG4gICAgdGV4dDogJ0AnLFxuICAgIHVybDogJ0AnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IExpbmtzQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGxpbmtzSE1UTFxufVxuIiwiaW1wb3J0IGxvY2F0aW9uTGlua3NIVE1MIGZyb20gJy4vbG9jYXRpb25MaW5rcy5odG1sJ1xuXG5leHBvcnQgbGV0IGxvY2F0aW9uTGlua3NDb25maWcgPSB7XG4gIHRlbXBsYXRlOiBsb2NhdGlvbkxpbmtzSFRNTFxufVxuIiwiaW1wb3J0IGFsdG1ldHJpY0hUTUwgZnJvbSAnLi9hbHRtZXRyaWMuaHRtbCdcblxuY2xhc3MgQWx0TWV0cmljQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XG5cbiAgICBzZWxmLmRvaSA9ICcnO1xuICAgIHNlbGYuaXNibiA9ICcnO1xuXG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5wbnggJiYgaXRlbS5wbnguYWRkYXRhKSB7XG4gICAgICBpZiAoaXRlbS5wbnguYWRkYXRhLmRvaSkge1xuICAgICAgICBzZWxmLmRvaSA9IGl0ZW0ucG54LmFkZGF0YS5kb2lbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBueC5hZGRhdGEuaXNibikge1xuICAgICAgICBzZWxmLmlzYm4gPSBpdGVtLnBueC5hZGRhdGEuaXNiblswXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGxldCBhbHRtZXRyaWNDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogQWx0TWV0cmljQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGFsdG1ldHJpY0hUTUxcbn1cbiIsIi8vZmFjZXRzLmZhY2V0LmZhY2V0X3NlYXJjaF9hbHNvXG5jbGFzcyBTZWFyY2hBbHNvQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCR0cmFuc2xhdGUpe1xuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLnVuc2hpZnQoe1xuICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcbiAgICAgIGRpc3BsYXllZFR5cGU6ICdleGFjdCcsXG4gICAgICBsaW1pdENvdW50OiAwLFxuICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXG4gICAgICB2YWx1ZXM6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9XG59XG5cblNlYXJjaEFsc29Db250cm9sbGVyLiRpbmplY3QgPSBbJyR0cmFuc2xhdGUnXTtcblxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xuICBiaW5kaW5nczp7cGFyZW50Q3RybDonPCd9LFxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQ29udHJvbGxlclxufVxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXG5cbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XG4gICAgdGhpcy5sb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XG4gIH1cblxuICBnZXQgc2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5O1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0R3JvdXAubmFtZTtcbiAgfVxuXG4gIF90YXJnZXRzKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgXCJuYW1lXCI6IFwiU3dpc3NiaWJcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc3dpc3NiaWIuY2gvc2VhcmNoL3Jlc3VsdHM/Jmxvb2tmb3I9XCIsXG4gICAgICBcImltZ1wiOiBcImh0dHBzOi8vcHJpbW8tZGlyZWN0LWV1LXNiLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wcmltby1leHBsb3JlL2N1c3RvbS80MVpCTC9pbWcvc3dpc3NiaWJfaWNvbi5wbmdcIixcbiAgICAgIFwidG9vbHRpcFwiOiBcIm51aS5jdXN0b21pemluZy5pZHNsdS5zZWFyY2hfYWxzby50b29sdGlwLnN3aXNzYmliXCIsXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJHb29nbGUgU2Nob2xhclwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9zY2hvbGFyP3E9XCIsXG4gICAgICBcImltZ1wiOiBcImh0dHBzOi8vcHJpbW8tZGlyZWN0LWV1LXNiLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wcmltby1leHBsb3JlL2N1c3RvbS80MVpCTC9pbWcvZ29vZ2xlX2ljb24ucG5nXCIsXG4gICAgICBcInRvb2x0aXBcIjogXCJudWkuY3VzdG9taXppbmcuaWRzbHUuc2VhcmNoX2Fsc28udG9vbHRpcC5nb29nbGVfc2NvbGFyXCIsXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJXb3JsZGNhdFwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy53b3JsZGNhdC5vcmcvc2VhcmNoP3E9XCIsXG4gICAgICBcImltZ1wiOiBcImh0dHBzOi8vcHJpbW8tZGlyZWN0LWV1LXNiLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wcmltby1leHBsb3JlL2N1c3RvbS80MVpCTC9pbWcvd29ybGRjYXRfaWNvbi5wbmdcIixcbiAgICAgIFwidG9vbHRpcFwiOiBcIm51aS5jdXN0b21pemluZy5pZHNsdS5zZWFyY2hfYWxzby50b29sdGlwLndvcmxkY2F0XCIsXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xuICAgICAgICB2YXIgdHlwZV9tYXBwaW5ncyA9IHtcbiAgICAgICAgICBcImFueVwiOiBcImt3XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcInRpXCIsXG4gICAgICAgICAgXCJjcmVhdG9yXCI6IFwiYXVcIixcbiAgICAgICAgICBcInN1YmplY3RcIjogXCJzdVwiXG4gICAgICAgIH07XG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgXCJrd1wiO1xuICAgICAgICB2YXIgcXVlcnkgPSB0ZXJtc1syXSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gdHlwZSArICc6JyArIHF1ZXJ5O1xuXG4gICAgICB9XG4gICAgfV07XG4gIH1cbn1cblxuU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xuXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Cb2R5Q29uZmlnID0ge1xuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxufVxuIiwiaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcbmNsYXNzIFBueFhtbENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWNvcmRpZCA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGhvdGtleXMpIHtcbiAgICAgIGhvdGtleXMoXCJjdHJsK2VudGVyXCIsIChlKSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O3otaW5kZXg6MTAwMDtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjAzJyk7XG4gICAgICBkaXYub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xuXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cblxuICB9XG59XG5cbmV4cG9ydCBsZXQgcG54WG1sQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBQbnhYbWxDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxufVxuIiwiaW1wb3J0IHNmeExpbmtzSFRNTCBmcm9tICcuL3NmeExpbmtzLmh0bWwnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4uLy4uL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuXG5jbGFzcyBTZnhMaW5rc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUpe1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xuICAgIHNlbGYuaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XG4gICAgc2VsZi50YXJnZXRzID0ge307XG4gICAgd2luZG93Lmxhc3RJdGVtID0gc2VsZi5pdGVtO1xuICAgIHNlbGYudXBkYXRlVGFyZ2V0c1doZW5PcGVuVVJMQXZhaWxhYmxlKCk7XG4gIH1cblxuICB1cGRhdGVUYXJnZXRzV2hlbk9wZW5VUkxBdmFpbGFibGUoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzOyAgICBcbiAgICBzZWxmLnNjb3BlLiR3YXRjaCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoc2VsZi5vcGVudXJsICYmIHNlbGYub3BlbnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYub3BlbnVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0sIChuLG8pID0+e1xuICAgICAgaWYgKG4gJiYgbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIEhlbHBlci5odHRwLmdldChzZWxmLnRhcmdldHNVcmwpLnRoZW4odGFyZ2V0cyA9PiB7XG4gICAgICAgICAgc2VsZi50YXJnZXRzID0gc2VsZi5ub3JtYWxpemVUYXJnZXRzKHRhcmdldHMuZGF0YSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhzZWxmLnRhcmdldHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTsgICAgXG4gIH1cblxuICBub3JtYWxpemVUYXJnZXRzKHRhcmdldHMpe1xuICAgIGxldCBub3JtYWxpemVkVGFyZ2V0cyA9IHt9O1xuXG4gICAgdGFyZ2V0cy5yZWR1Y2UoKHQsIGMpPT4geyAgICAgICBcbiAgICAgIGxldCBkID0gdC5oYXNPd25Qcm9wZXJ0eShjLmZhY2lsaXR5KSA/IHRbYy5mYWNpbGl0eV0gOiBbXTtcbiAgICAgIGQucHVzaChjKTtcbiAgICAgIHRbYy5mYWNpbGl0eV0gPSBkO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSwgbm9ybWFsaXplZFRhcmdldHMpO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRUYXJnZXRzO1xuICB9XG5cbiAgZ2V0IHRhcmdldHNVcmwoKSB7XG4gICAgcmV0dXJuIChgJHt0aGlzLmxvb2t1cFVSTH0/dHlwZT10YXJnZXRzJnNvdXJjZVVSTD0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wZW51cmwpfSZwcm94eVN1ZmZpeD0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb3h5U3VmZml4KX1gKTtcbiAgfVxuXG4gIGdldCBzZnhMaW5rc1VybCgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5sb29rdXBVUkx9P3R5cGU9dGFyZ2V0cyZzb3VyY2VVUkw9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5vcGVudXJsKX0mcHJveHlTdWZmaXg9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm94eVN1ZmZpeCl9Jm5vUHJveHk9MWA7XG4gIH1cblxuICBnZXQgb3BlbnVybCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5kZWxpdmVyeSkge1xuICAgICAgbGV0IG9wZW5VcmxMaXN0ID0gc2VsZi5pdGVtLmRlbGl2ZXJ5LmxpbmsuZmlsdGVyKGYgPT4gL15vcGVudXJsLy50ZXN0KGYuZGlzcGxheUxhYmVsKSkubWFwKG0gPT4gbS5saW5rVVJMKTtcbiAgICAgIGlmIChvcGVuVXJsTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBvcGVuVXJsTGlzdFswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5saW5rRWxlbWVudCkge1xuICAgICAgICBsZXQgb3BlblVybExpc3QgPSBzZWxmLml0ZW0ubGlua0VsZW1lbnQubGlua3MuZmlsdGVyKGYgPT4gL15vcGVudXJsLy50ZXN0KGYuZGlzcGxheVRleHQpKS5tYXAobSA9PiBtLmxpbmspO1xuICAgICAgICBpZiAob3BlblVybExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiBvcGVuVXJsTGlzdFswXTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IHByb3h5U3VmZml4KCkge1xuICAgIGxldCBjdXJyZW50SG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIGxldCBwcm94eVN1ZmZpeCA9ICcnO1xuICAgIGlmIChjdXJyZW50SG9zdC5tYXRjaCgvZXhsaWJyaXNncm91cC5jb20vZykgIT0gbnVsbCkge1xuICAgICAgcHJveHlTdWZmaXggPSBjdXJyZW50SG9zdC5yZXBsYWNlKC8uK1xcLmV4bGlicmlzZ3JvdXBcXC5jb20vZywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm94eVN1ZmZpeDtcbiAgfVxuXG4gIGdldCBsb29rdXBVUkwoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vcHJpbW8uYWR2ZXN0YS5jb20vaW5kZXgucGhwJztcbiAgfVxufVxuXG5TZnhMaW5rc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XG5cbmV4cG9ydCBsZXQgc2Z4TGlua3NDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogU2Z4TGlua3NDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogc2Z4TGlua3NIVE1MXG59XG4iLCJpbXBvcnQgRXhwbG9yZSBmcm9tICcuL3ByaW1vL2V4cGxvcmUnXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9wcmltby92aWV3J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuXG4vKipcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xuICAvKipcbiAgICogUmV0dXJuIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGhhcyByYW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIEhlbHBlci5pc1ByaW1vQXZhaWxhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XG4gICAgcmV0dXJuIEV4cGxvcmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgcmVjb3Jkc1xuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxuICAgKi9cbiAgc3RhdGljIGdldCByZWNvcmRzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcbiAgICogQHJldHVybiB7RmFjZXRzfVxuICAgKi9cbiAgc3RhdGljIGdldCBmYWNldHMoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtWaWV3fVxuICAgKi9cbiAgc3RhdGljIGdldCB2aWV3KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBWaWV3KCkpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHVzZXIgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtVc2VyfVxuICAgKi9cbiAgc3RhdGljIGdldCB1c2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XG4gICAgICAgIEhlbHBlci51c2VyRmluZXNIVFRQKCkudGhlbigodXNlckZpbmVzKSA9PiB7XG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG4vL3RoaXMgaXMgcHJveHkgY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xuICBzdGF0aWMgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgbGV0IGMgPSBuZXcgQ29tcG9uZW50cygpO1xuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgYy5hZGQoc2VsZWN0b3IpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdWkoKSB7XG4gICAgaWYgKHRoaXMuX3VpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91aTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaGVscGVyKCkge1xuICAgIHJldHVybiBIZWxwZXI7XG4gIH1cbn1cbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcblxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcidcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJsaW5rKCl7XG4gICAgSGVscGVyLmJsaW5rKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNzc1BhdGgoKXtcbiAgICByZXR1cm4gY3NzU2VsZWN0b3JHZW5lcmF0b3IuZ2V0U2VsZWN0b3IodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldCBuYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XG4gIH1cblxuICBzY29wZSgpe1xuICAgIGlmIChIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKSl7XG4gICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuc2NvcGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJ1biBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgZmlyc3QnKTtcbiAgICB9XG4gIH1cblxuICBjdHJsKCl7XG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XG4gICAgaWYgKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygndXNpbmcgYWx0ZXJuYXRpdmUgbWV0aG9kIHRvIGdldCBjb250cm9sbGVyJyk7XG4gICAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XG4gICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXG4gICAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgfVxuXG4gIGFkZChzZWxlY3Rvcikge1xuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcblxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xuICB9XG5cbiAgZ2V0KHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBrZXlzKCl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gd2luZG93Lm5hbWUgPT09ICdOR19FTkFCTEVfREVCVUdfSU5GTyEnIHx8IHR5cGVvZihhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWxvZ28nKSkuc2NvcGUoKSkgIT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNvbXBvbmVudE5hbWVzKCkge1xuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0YWcgb2YgdGFncykge1xuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZXMuaW5jbHVkZXModGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudE5hbWVzLnNvcnQoKS5maWx0ZXIoKGUsIGksIGEpID0+IGkgPT09IGEuZmluZEluZGV4KChlMikgPT4gZSA9PT0gZTIpKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XG4gICAgICBsZXQgYyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3ByaW1vLWV4cGxvcmUnKTtcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcbiAgICAgICAgICBsZXQgaW5qZWN0b3IgICAgID0gcHJpbW9FeHBsb3JlLmluamVjdG9yKCk7XG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgaHR0cCgpIHtcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcbiAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICBsZXQgaCA9IGluamVjdG9yLmdldCgnJGh0dHAnKTtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XG4gICAgICAgICAgbGV0IGFwcEluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJywnYW5ndWxhckxvYWQnXSk7XG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXJMb2FkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xuICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiByb290U2NvcGU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xuICAgICAgaWYgKHJvb3RTY29wZSkge1xuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICAgIGlmICh1U01TKSB7XG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckRldGFpbHNIVFRQKCkge1xuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldChgL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvdXNlcnNldHRpbmdzP3ZpZD0ke3ZpZXdDb2RlfWApLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscy5kYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9maW5lcycpLnRoZW4odXNlckZpbmVzID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvbG9hbnMnKS50aGVuKHVzZXJMb2FucyA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XG5cbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSZWN0ID0gY29tcG9uZW50LmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYm9yZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUudG9wID0gZWxlbWVudFJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYm9yZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW1vdmVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibGlua0JvcmRlckVsZW1lbnQgPSAobnVtYmVyT2ZCbGlua3MgPSA0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcblxuICAgICAgICAgICAgaWYgKG51bWJlck9mQmxpbmtzIDwgMCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKChudW1iZXJPZkJsaW5rcyAlIDIpID09IDApID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBib3JkZXJFbGVtZW50ID0gY3JlYXRlQm9yZGVyRWxlbWVudCgpO1xuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9mYWNldHMoY29tcG9uZW50cyk7XG4gICAgfVxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IGZhY2V0cyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBfaXRlbXMoY29tcG9uZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tc2VhcmNoLXJlc3VsdC1saXN0LWFmdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInRyeSBhZ2FpblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5kYXRhO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlciA9IF9za2VsVXNlcikge1xuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGp3dERhdGEudXNlciB8fCAnJyxcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxuICAgICAgICBkaXNwbGF5X25hbWU6IHVTbXMuZ2V0VXNlck5hbWVGb3JEaXNwbGF5KCksXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBmaW5lczogdXNlci5maW5lcyxcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcbiAgICAgIH07XG4gIH1cblxuICBnZXQgX3NrZWxVc2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXRhaWxzOiB7fSxcbiAgICAgIGZpbmVzOiB7fSxcbiAgICAgIGxvYW5zOiB7fVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogand0RGF0YS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ10sXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXG4gICAgICAgICAgICBuYW1lOiB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW5zdGl0dXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxuICAgICAgICBpcDoge1xuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xuICAgICAgc2VsZWN0b3JzOiBbJ2lkJywgJ2NsYXNzJywgJ3RhZycsICdudGhjaGlsZCddXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENzc1NlbGVjdG9yR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5vcHRpb25zW2tleV0gPSB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAhISgoZWxlbWVudCAhPSBudWxsID8gZWxlbWVudC5ub2RlVHlwZSA6IHZvaWQgMCkgPT09IDEpO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudF9lbGVtZW50KTtcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBjaGFyYWN0ZXJzO1xuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyAoJzonLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpICsgXCIgXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcbiAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2FuaXRpemVkX2lkKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICByZXN1bHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goXCIuXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaXRlbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGJsYWNrbGlzdCA9IFsnaWQnLCAnY2xhc3MnXTtcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBhdHRyaWJ1dGUgPSByZWZba107XG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY291bnRlciwgaywgbGVuLCBwYXJlbnRfZWxlbWVudCwgc2libGluZywgc2libGluZ3M7XG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmdzW2tdO1xuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xuICAgICAgaWYgKChzZWxlY3RvciAhPSBudWxsKSAmJiBzZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBpc191bmlxdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNfdW5pcXVlO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QWxsU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdDogbnVsbCxcbiAgICAgICAgaTogbnVsbCxcbiAgICAgICAgYzogbnVsbCxcbiAgICAgICAgYTogbnVsbCxcbiAgICAgICAgbjogbnVsbFxuICAgICAgfTtcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ3RhZycpID49IDApIHtcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnaWQnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnY2xhc3MnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2F0dHJpYnV0ZScpID49IDApIHtcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ250aGNoaWxkJykgPj0gMCkge1xuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0VW5pcXVlbmVzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGZvdW5kX2VsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XG4gICAgICByZWYgPSB0aGlzLmdldENvbWJpbmF0aW9ucyhpdGVtcyk7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcbiAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiB0YWcgKyBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XG4gICAgICAgICAgaXRlbSA9IHJlZjFbbF07XG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRVbmlxdWVTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xuICAgICAgcmVmID0gdGhpcy5vcHRpb25zLnNlbGVjdG9ycztcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yX3R5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYywgc2VsZWN0b3JzLnQpO1xuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMubiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcqJztcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGFsbF9zZWxlY3RvcnMsIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcGFyZW50cywgcmVzdWx0LCBzZWxlY3Rvciwgc2VsZWN0b3JzO1xuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHBhcmVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwpIHtcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxlY3RvcnMgPSBbXTtcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICBpdGVtID0gYWxsX3NlbGVjdG9yc1tsXTtcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcbiAgICAgICAgaWYgKHRoaXMudGVzdFNlbGVjdG9yKGVsZW1lbnQsIHJlc3VsdCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XG4gICAgICBpZiAoaXRlbXMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gW1tdXTtcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRbal0uY29uY2F0KGl0ZW1zW2ldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG5cbiAgfSkoKTtcblxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwiLypcbiAgR2VuZXJhbCBcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xufVxuIiwiLypcbiAgQ2VudHJhbCBQYWNrYWdlIExvYWRlclxuXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBQcmltbyBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuXG4vL21ha2UgUHJpbW8gcHVibGljXG53aW5kb3cuUHJpbW8gPSBQcmltbztcbi8vbG9hZCBQcmltb0V4cGxvcmVyIFVJIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGlzIHJhblxud2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIGlmIChQcmltby5pc0RlYnVnRW5hYmxlZCgpKSB7XG4gICAgbGV0IHVpVVJMID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbWVobWV0Yy9wcmltby1leHBsb3JlLWRvbS11aS9mYzA4NjhkZi9qcy9jdXN0b20uanMnO1xuXG4gICAgSGVscGVyLmxvYWRTY3JpcHQodWlVUkwpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0luamVjdGluZyBVSScpO1xuICAgICAgUHJpbW8uZXhwbG9yZS51aS50b2dnbGUoKTtcbiAgICB9KTtcbiAgfVxufSwgMjAwMCk7XG5cbi8vIHN0YW5kYXJkIGdvb2dsZSBhbmFseXRpY3MgdHJhY2tpbmcgY29kZVxuKGZ1bmN0aW9uIChpLCBzLCBvLCBnLCByLCBhLCBtKSB7XG4gIGlbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddID0gcjtpW3JdID0gaVtyXSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgKGlbcl0ucSA9IGlbcl0ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpO1xuICB9LCBpW3JdLmwgPSAxICogbmV3IERhdGUoKTthID0gcy5jcmVhdGVFbGVtZW50KG8pLCBtID0gcy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jID0gMTthLnNyYyA9IGc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBtKTtcbn0pKHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywgJ2dhJyk7XG5cbmdhKCdjcmVhdGUnLCAnVUEtMjIxNjIzOTAtMTMnLCAnYXV0bycpO1xuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblxuLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJyxbJ25nTWF0ZXJpYWwnXSlcbiAgICAgICAgICAgICAgICAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkYmFjaycpXG4gICAgICAgICAgICAgICAgIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgJyoqJ1xuICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9ob3RrZXlzLWpzQDIuMC44L2Rpc3QvaG90a2V5cy5taW4uanMnKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaG90a2V5cy5qcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL2QxYnhoOHVhczFtbnc3LmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9lbWJlZC5qcz8nICsgRGF0ZS5ub3coKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsdG1lcmljcy5qcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfSkucnVuKFsnJHJvb3RTY29wZScsICckbG9jYXRpb24nLCAnJHdpbmRvdycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICR3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5nYSgnc2VuZCcsICdwYWdldmlldycsIHsgbG9jYXRpb246ICRsb2NhdGlvbi51cmwoKSB9KTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfV0pLmZpbHRlcignc3RyaXBBbmRMaW1pdEh0bWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRleHQsIGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5nZWRTdHJpbmcgPSBTdHJpbmcodGV4dCkucmVwbGFjZSgvPFtePl0rPi9nbSwgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBjaGFuZ2VkU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hhbmdlZFN0cmluZy5sZW5ndGggPiBsaW1pdCA/IGNoYW5nZWRTdHJpbmcuc3Vic3RyKDAsIGxpbWl0IC0gMSkgKyAnLi4uJyA6IGNoYW5nZWRTdHJpbmc7XG4gICAgICAgICAgICAgICAgfX0pO1xuXG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxuICBpZiAoY29tcG9uZW50LmVuYWJsZWQpIHtcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICAgIC8vZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XG4gICAgICBlbGVtZW50cy5wdXNoKHsgJ25hbWUnOiBjb21wb25lbnQubmFtZSwgJ2VuYWJsZUluVmlldyc6IGNvbXBvbmVudC5lbmFibGVJblZpZXcgfSk7XG4gICAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xuXG4gICAgfVxuICAgIGFwcC5jb25zdGFudCgnYWZ0ZXJDb21wb25lbnRzJywgYWZ0ZXJDb21wb25lbnRzKTtcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xuICB9XG59KTtcblxuXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LGkpID0+IHtcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcblxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XG4gICAgYmluZGluZ3M6e1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxuICB9KTtcbn0pO1xuIl19
