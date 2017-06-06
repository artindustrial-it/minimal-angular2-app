import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {App2Module} from './app2.module';
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

/* the following code is necessary for HMR-friendliness and taken from here: https://stackoverflow.com/questions/35644123/the-selector-my-app-did-not-match-any-elements/42674739#42674739 */
const bootApplication = () => { console.log('bootstrapping module 2'); platformBrowserDynamic().bootstrapModule(App2Module); };
if (document.readyState === 'complete') {
  window.onload = () => bootApplication();
  location.reload();
} else {
  document.addEventListener('DOMContentLoaded', bootApplication);
}