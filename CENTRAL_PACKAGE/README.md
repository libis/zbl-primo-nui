# ZHB packages for Primo NUI

## build
### customView
```bash
gulp run --view 41ZBL --proxy https://iluplus.hosted.exlibrisgroup.com
```
### customCentral
```bash
gulp run --view CENTRAL_PACKAGE --browserify --proxy https://iluplus.hosted.exlibrisgroup.com
```

## Important
This project depends on [primo-explore-dom](https://github.com/mehmetc/primo-explore-dom). 

* How to download [primo-explore-dom](https://github.com/mehmetc/primo-explore-dom) and create a symlink from the __js__ directory
```bash
$ pwd
/primo-explore-devenv/primo-explore/custom
$ git clone https://github.com/mehmetc/primo-explore-dom.git
$ ls -l
drwxr-xr-x@  9 user  staff    306 Oct  5 10:09 CENTRAL_PACKAGE
drwxr-xr-x@ 10 user  staff    340 Jul 13 17:45 primo-explore-dom

$ cd CENTRAL_PACKAGE/js
$ ln -s ../../primo-explore-dom ./
 ```
 
## Available Components 

- __prm-search-result-thumbnail-container-after/pnx-xml__: creates a hotspot in the bottom right corner. When clicked adds a xml and pnx button to every loaded record. Makes use of jQuery.PRIMO.jar available in the August release. People with access to their environment can upgrade today.
- __prm-view-online-after/sfxLinks__: lookup and show sfx links
