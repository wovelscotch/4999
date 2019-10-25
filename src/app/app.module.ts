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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageBodyComponent,
    PlaintextComponent,
    SelectionComponent,
    ClickBasedComponent,
    UserSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
