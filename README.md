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
