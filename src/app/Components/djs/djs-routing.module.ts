import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DjsPage } from './djs.page';

const routes: Routes = [
  {
    path: '',
    component: DjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DjsPageRoutingModule {}
