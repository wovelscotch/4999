import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageBodyComponent } from './components/front-page-body/front-page-body.component';
import { SelectionComponent } from './components/selection/selection.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SiteAComponent } from './components/sites/site-a/site-a.component';
import { SiteBComponent } from './components/sites/site-b/site-b.component';
import { SiteCComponent } from './components/sites/site-c/site-c.component';
import { SiteDComponent } from './components/sites/site-d/site-d.component';
import { SiteEComponent } from './components/sites/site-e/site-e.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserExistingComponent } from './components/user-existing/user-existing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'select', component: SelectionComponent },
  { path: 'home', component: FrontPageBodyComponent },
  { path: 'site-a', component: SiteAComponent },
  { path: 'site-b', component: SiteBComponent },
  { path: 'site-c', component: SiteCComponent },
  { path: 'site-d', component: SiteDComponent },
  { path: 'site-e', component: SiteEComponent },
  { path: 'user-select', component: UserSelectComponent },
  { path: 'user', component: UserExistingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
