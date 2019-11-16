import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageBodyComponent } from './components/front-page-body/front-page-body.component';
import { SelectionComponent } from './components/selection/selection.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SiteAComponent } from './components/sites/headers/site-a/site-a.component';
import { SiteBComponent } from './components/sites/headers/site-b/site-b.component';
import { SiteCComponent } from './components/sites/headers/site-c/site-c.component';
import { SiteDComponent } from './components/sites/site-d/site-d.component';
import { SiteEComponent } from './components/sites/site-e/site-e.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserExistingComponent } from './components/user-existing/user-existing.component';
import { Sitea1Component } from './components/sites/sitea1/sitea1.component';
import { Sitea2Component } from './components/sites/sitea2/sitea2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'select', component: SelectionComponent },
  { path: 'home', component: FrontPageBodyComponent },
  { path: 'site-a1', component: Sitea1Component },
  { path: 'site-a2', component: Sitea2Component },
  { path: 'user-select', component: UserSelectComponent },
  { path: 'user', component: UserExistingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
