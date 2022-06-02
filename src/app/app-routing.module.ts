import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MasterView1Component } from './master-view1/master-view1.component';
import { MasterView2Component } from './master-view2/master-view2.component';
import { MasterViewComponent } from './master-view/master-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view1', component: MasterView1Component, data: { text: 'Master View 1' } },
  { path: 'master-view2', component: MasterView2Component, data: { text: 'Master View 2' } },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
