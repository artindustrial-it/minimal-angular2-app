import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import
{
    App2Component
}  from './app2.component';
/*
 { App2Component }  from './app.component';
 */

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App2Component ],
    bootstrap:    [ App2Component ]
})
export class App2Module { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */