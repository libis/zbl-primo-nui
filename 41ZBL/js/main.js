/*
  Central Package Loader

  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import Primo from './primo-explore-dom/js/primo'
import Helper from './primo-explore-dom/js/primo/explore/helper'
import Components from './components'
import MessageService from './factories/messageService'

import locationItemsHTML from 'components/prmLocationItems/location-items.html'
import locationHTML from 'components/prmLocation/location.html'

//make Primo public
window.Primo = Primo;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function () {
  if (Primo.isDebugEnabled()) {
    let uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';

    Helper.loadScript(uiURL).then(() => {
      console.log('Injecting UI');
      Primo.explore.ui.toggle();
    });
  }
}, 2000);

// standard google analytics tracking code
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-22162390-13', 'auto');
ga('send', 'pageview');

//Create the centralCustom module;
let app = angular.module('viewCustom', ['ngMaterial'])
  .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
  .config(($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      '**'
    ]);
  })
  .run(($translate, $rootScope) => {
    Helper.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(() => {
      console.log('hotkeys.js loaded');
    });

    Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
      console.log('altmerics.js loaded');
    });

    Helper.loadScript('https://recommender.bibtip.de/js/bibtip_zhb_luzern.js').then(function () {
      console.log('bibtip.js loaded');
    });

    if (window.appConfig.vid.includes('41ZBL')) {
      var locale = window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
      ///primo_library/libweb/webservices/rest/v1/translations/41ZBL?lang=de_DE
      //nui.customization.browzine.journal
      let watcher = $rootScope.$watch(() => {
        try {
          if ($translate.instant('nui.customization.browzine.id') == 'nui.customization.browzine.id'){
            return false;            
          } else {
            return true;
          }
        }catch(e) {
          return false;
        }
      }, (n,o) => {
        if (n == true) {
          let apiId = $translate.instant('nui.customization.browzine.id');
          let apikey = $translate.instant('nui.customization.browzine.apikey');
          let journal = $translate.instant('nui.customization.browzine.journal');
          let issue = $translate.instant('nui.customization.browzine.issue');
          let downloadEnabled = $translate.instant('nui.customization.browzine.download_enable') == '1';
          let download = $translate.instant('nui.customization.browzine.download');
    
          window.browzine = {
            api: `https://public-api.thirdiron.com/public/v1/libraries/${apiId}`,
            apiKey: apikey,
            journalBrowZineWebLinkText: journal,
            articleBrowZineWebLinkText: issue,
            articlePDFDownloadLinkEnabled: downloadEnabled,
            articlePDFDownloadLinkText: download,
          };

          Helper.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(() => {
            console.log('browzine-primo-adapter.js loaded');
          });
                
          watcher();
        }
      });
    }

    if (window.fetch) {
      fetch(`https://sfx.unilu.ch/reclassify`).then(response => {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }
        return response.json()
      }).then(data => {
        console.log("reClassify data loaded");
        window.reclassifyData = data;
      });
    } else {
     let xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("reClassify data loaded IE <=11 workaround");        
        window.reclassifyData = JSON.parse(this.responseText);
      }
    };

    xhttp.open("GET", "https://sfx.unilu.ch/reclassify", false);
     //xhttp.open("GET", "https://libis.celik.be/reclassify", false);
     //xhttp.open("GET", "http://10.46.153.59:3000/reclassify", false);
     xhttp.send();
    }

  }).run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
    //send to GA every time the URL changes
    $rootScope.$on('$locationChangeSuccess', function (event) {
      $window.ga('send', 'pageview', { location: $location.url() });
    });
  }])
  .service('MessageService', MessageService)
  .run(($templateCache) => {
    $templateCache.put('components/search/fullView/getit/opac/locations/location-items.html', locationItemsHTML);
    $templateCache.put('components/search/fullView/getit/opac/locations/location/location.html', locationHTML);
  });

//Contains the after component selectors that will be injected
let afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
Components.all.forEach((component) => {
  console.log(component.name)
  if (component.enabled) {
    if (component.appendTo) {
      let elements = afterComponents[component.appendTo] || [];
      //elements.push(component.name);
      elements.push({ 'name': component.name, 'enableInView': component.enableInView });
      afterComponents[component.appendTo] = elements;

    }
    app.constant('afterComponents', afterComponents);
    app.component(component.name.toCamelCase(), component.config);
  }
});


//Inject place holders into the after components
Object.keys(afterComponents).forEach((component, i) => {
  let subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`).join("")
  });
});
