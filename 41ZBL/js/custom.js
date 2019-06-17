(function(){
"use strict";
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

var _browzine = require('./components/prmSearchResultAvailabilityLineAfterController/browzine');

var _primo = require('./primo-explore-dom/js/primo');

var _primo2 = _interopRequireDefault(_primo);

var _helper = require('./primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _messageService = require('./factories/messageService');

var _messageService2 = _interopRequireDefault(_messageService);

var _locationItems = require('components/prmLocationItems/location-items.html');

var _locationItems2 = _interopRequireDefault(_locationItems);

var _location = require('components/prmLocation/location.html');

var _location2 = _interopRequireDefault(_location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        enableInView: '^41ZBL'
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
      }, {
        name: 'browzine',
        config: _browzine.browzineConfig,
        enabled: true,
        appendTo: 'prm-search-result-availability-line-after',
        enableInView: '^41ZBL'
      }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

/*
  Central Package Loader

  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/


exports.default = AfterComponents;


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
}).run(function ($translate, $rootScope) {
  _helper2.default.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(function () {
    console.log('hotkeys.js loaded');
  });

  _helper2.default.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics.js loaded');
  });

  _helper2.default.loadScript('https://recommender.bibtip.de/js/bibtip_zhb_luzern.js').then(function () {
    console.log('bibtip.js loaded');
  });

  if (window.appConfig.vid.includes('41ZBL')) {
    var locale = window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
    ///primo_library/libweb/webservices/rest/v1/translations/41ZBL?lang=de_DE
    //nui.customization.browzine.journal
    var watcher = $rootScope.$watch(function () {
      try {
        if ($translate.instant('nui.customization.browzine.id') == 'nui.customization.browzine.id') {
          return false;
        } else {
          console.log($translate.instant('nui.customization.browzine.id'));
          return true;
        }
      } catch (e) {
        return false;
      }
    }, function (n, o) {
      if (n == true) {
        var apiId = $translate.instant('nui.customization.browzine.id');
        var apikey = $translate.instant('nui.customization.browzine.apikey');
        var journal = $translate.instant('nui.customization.browzine.journal');
        var issue = $translate.instant('nui.customization.browzine.issue');
        var downloadEnabled = $translate.instant('nui.customization.browzine.download_enable') == '1';
        var download = $translate.instant('nui.customization.browzine.download');

        window.browzine = {
          api: 'https://public-api.thirdiron.com/public/v1/libraries/' + apiId,
          apiKey: apikey,
          journalBrowZineWebLinkText: journal,
          articleBrowZineWebLinkText: issue,
          articlePDFDownloadLinkEnabled: downloadEnabled,
          articlePDFDownloadLinkText: download
        };

        _helper2.default.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(function () {
          console.log('browzine-primo-adapter.js loaded');
        });

        watcher();
      }
    });
  }

  //fetch(`http://127.0.0.1:3000/reclassify`).then(response => {
  fetch('https://libis.celik.be/reclassify').then(function (response) {
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
  }).then(function (data) {
    console.log("reClassify data loaded");
    window.reclassifyData = data;
  });
}).run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
  //send to GA every time the URL changes
  $rootScope.$on('$locationChangeSuccess', function (event) {
    $window.ga('send', 'pageview', { location: $location.url() });
  });
}]).service('MessageService', _messageService2.default).run(function ($templateCache) {
  $templateCache.put('components/search/fullView/getit/opac/locations/location-items.html', _locationItems2.default);
  $templateCache.put('components/search/fullView/getit/opac/locations/location/location.html', _location2.default);
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
})();