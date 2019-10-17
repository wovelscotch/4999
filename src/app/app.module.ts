import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FrontPageBodyComponent } from './components/front-page-body/front-page-body.component';
import { PlaintextComponent } from './components/plaintext/plaintext.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ClickBasedComponent } from './components/click-based/click-based.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageBodyComponent,
    PlaintextComponent,
    SelectionComponent,
    ClickBasedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
