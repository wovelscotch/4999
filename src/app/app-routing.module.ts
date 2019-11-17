import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageBodyComponent } from './components/front-page-body/front-page-body.component';
import { SelectionComponent } from './components/selection/selection.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserExistingComponent } from './components/user-existing/user-existing.component';
import { Sitea1Component } from './components/sites/sitea1/sitea1.component';
import { Sitea2Component } from './components/sites/sitea2/sitea2.component';
import { Siteb1Component } from './components/sites/siteb1/siteb1.component';
import { Siteb2Component } from './components/sites/siteb2/siteb2.component';
import { Sitec1Component } from './components/sites/sitec1/sitec1.component';
import { Sitec2Component } from './components/sites/sitec2/sitec2.component';
import { FinishedComponent } from './components/sites/finished/finished.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'select', component: SelectionComponent },
  { path: 'home', component: FrontPageBodyComponent },
  { path: 'site-a1', component: Sitea1Component },
  { path: 'site-a2', component: Sitea2Component },
  { path: 'site-b1', component: Siteb1Component },
  { path: 'site-b2', component: Siteb2Component },
  { path: 'site-c1', component: Sitec1Component },
  { path: 'site-c2', component: Sitec2Component },
  { path: 'user-select', component: UserSelectComponent },
  { path: 'user', component: UserExistingComponent },
  { path: 'finished', component: FinishedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
