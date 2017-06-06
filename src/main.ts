import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

/* the following code is necessary for HMR-friendliness and taken from here: https://stackoverflow.com/questions/35644123/the-selector-my-app-did-not-match-any-elements/42674739#42674739 */
const bootApplication = () => { console.log('bootstrapping module'); platformBrowserDynamic().bootstrapModule(AppModule); };
if (document.readyState === 'complete') {
  window.onload = () => bootApplication();
  location.reload();
} else {
  document.addEventListener('DOMContentLoaded', bootApplication);
}