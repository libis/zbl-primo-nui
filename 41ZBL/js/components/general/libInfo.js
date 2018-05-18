import libInfoHTML from './libInfo.html'

class LibInfoController{
  constructor(){
  }

  get sourceURL() {
    return encodeURIComponent(`http://ilu.zhbluzern.ch/F?func=library&sub_library=${this.locationCode}`)
  }
}

export let libInfoConfig = {
  bindings: {locationCode:'<'},
  controller: LibInfoController,
  template: libInfoHTML
}
