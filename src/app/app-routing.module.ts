import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageBodyComponent } from './components/front-page-body/front-page-body.component';

const routes: Routes = [
  { path: '', component: FrontPageBodyComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
