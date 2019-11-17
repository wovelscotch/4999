import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FrontPageBodyComponent } from './components/front-page-body/front-page-body.component';
import { PlaintextComponent } from './components/plaintext/plaintext.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ClickBasedComponent } from './components/click-based/click-based.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SiteAComponent } from './components/sites/headers/site-a/site-a.component';
import { SiteBComponent } from './components/sites/headers/site-b/site-b.component';
import { SiteCComponent } from './components/sites/headers/site-c/site-c.component';
import { SiteDComponent } from './components/sites/site-d/site-d.component';
import { SiteEComponent } from './components/sites/site-e/site-e.component';
import { UserExistingComponent } from './components/user-existing/user-existing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Sitea1Component } from './components/sites/sitea1/sitea1.component';
import { Sitea2Component } from './components/sites/sitea2/sitea2.component';
import { Siteb1Component } from './components/sites/siteb1/siteb1.component';
import { Siteb2Component } from './components/sites/siteb2/siteb2.component';
import { Sitec2Component } from './components/sites/sitec2/sitec2.component';
import { Sitec1Component } from './components/sites/sitec1/sitec1.component';
import { FinishedComponent } from './components/sites/finished/finished.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageBodyComponent,
    PlaintextComponent,
    SelectionComponent,
    ClickBasedComponent,
    UserSelectComponent,
    PageNotFoundComponent,
    SiteAComponent,
    SiteBComponent,
    SiteCComponent,
    SiteDComponent,
    SiteEComponent,
    UserExistingComponent,
    Sitea1Component,
    Sitea2Component,
    Siteb1Component,
    Siteb2Component,
    Sitec2Component,
    Sitec1Component,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
