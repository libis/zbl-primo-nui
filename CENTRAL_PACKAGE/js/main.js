/*
  Central Package Loader

  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import Primo from './primo-explore-dom/js/primo'
import Helper from './primo-explore-dom/js/primo/explore/helper'
import Components from './components'

//make Primo public
window.Primo = Primo;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function() {
  if (Primo.isDebugEnabled()) {
    let uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';

    Helper.loadScript(uiURL).then(() => {
      console.log('Injecting UI');
      Primo.explore.ui.toggle();
    });
  }
}, 2000);

//Create the centralCustom module;
let app = angular.module('centralCustom',['ngMaterial'])
                 .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
                 .config(($sceDelegateProvider) => {
                   $sceDelegateProvider.resourceUrlWhitelist([
                     '**'
                   ]);
                 })
                 .run(($templateCache) => {
                   Helper.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(()=>{
                     console.log('hotkeys.js loaded');
                   });

                   Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
                      console.log('altmerics.js loaded');
                   });
                 }).filter('stripAndLimitHtml', function () {
                     return function (text, limit) {
                         var changedString = String(text).replace(/<[^>]+>/gm, '');
                         var length = changedString.length;
                         return changedString.length > limit ? changedString.substr(0, limit - 1) + '...' : changedString;
                }});


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
Object.keys(afterComponents).forEach((component,i) => {
  let subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings:{
      parentCtrl: '<'
    },
    template: subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`).join("")
  });
});