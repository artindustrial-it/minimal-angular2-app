## Minimal Angular2 app showcasing platform sharing among two applications

This code is intended to be a minimal app demonstrating the packaging 
of angular and polyfills as a separate library and re-using this library from two 
Angular2 apps the live together on the same page.

In its current state it supports:
- webpack bundling for libraries (using webpack.DLLPlugin) and apps
- splitting up code into polyfills, vendor and app bundle packages 
- hot module reloade (HMR) is still working

### Getting started:
- checkout this repository
- install npm packages with 'npm install'
- build the libraries and apps 'npm run build'
- to see a single app on a page: 'npm run start' => go to http://localhost:8080/dist
- to start webpack dev server with HMR: 'npm run hotdll' => go to http://localhost:8080/dist
- to see two apps play along: 'npm run hotdll2' => go to http://localhost:8080/dist/index2.html


### Next TODOs and open issues:
- vendor bundle is 3mb -> reduce [reduced to 1 MB - still too large] 
- [done] add source maps
- [done] make webpack dev server and HMR work
- bundle vendor and polyfills as npm bundle to reuse in apps
- [done] test multiple apps on page
- test with liferay-amd-loader
- make portlets (osgi bundle for polyfills & vendor), define dependencies and use them
- show liferay page working with two apps and shared library
- make workflow invisible to developer
- test shared service
- test load on demand in an angular2 app

### Credits
work is heavily inspired from:
- https://github.com/radusuciu/webpacked-angular-with-dll
- http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types/
