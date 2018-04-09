/*
  Declare your components here.

  Rewrite this when imports can be done dynamically
  http://2ality.com/2017/01/import-operator.html

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import './utils'

/* import your component configuration*/
import {pnxXmlConfig} from './components/prmSearchResultThumbnailContainerAfter/pnxXml'
import {sfxLinksConfig} from './components/prmViewOnlineAfter/sfxLinks.js'


export default class AfterComponents {

  static get all() {
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
        config: pnxXmlConfig,
        enabled: true,
        appendTo: 'prm-brief-result-container-after',
        enableInView: '.*'
      },            
      {
        name: 'zbl-sfx-links',
        config: sfxLinksConfig,
        enabled: true,
//        appendTo: 'prm-brief-result-container-after',
        appendTo: 'prm-view-online-after',
        enableInView: '.*'
      }
    ].filter((component) => (component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid)));
  }
}
