# Installing the DevEnv
```bash
git clone https://github.com/ExLibrisGroup/primo-explore-devenv.git
cd ./primo-explore-devenv/primo-explore
rm -Rf custom
git clone https://github.com/libis/zbl-primo-nui.git ./custom
cd custom
git submodule update --init
```

# Compile and run the CENTRAL_PACKAGE
```bash
gulp run --view CENTRAL_PACKAGE --browserify --proxy https://iluplus.hosted.exlibrisgroup.com
```
or for the development environment
```bash
gulp run --view CENTRAL_PACKAGE --browserify --proxy https://primo-direct-eu-sb.hosted.exlibrisgroup.com
```

## Available Components

- __prm-search-result-thumbnail-container-after/pnx-xml__: creates a hotspot in the bottom right corner. When clicked adds a xml and pnx button to every loaded record. Makes use of jQuery.PRIMO.jar available in the August release. People with access to their environment can upgrade today.
- __prm-view-online-after/sfxLinks__: lookup and show sfx links
