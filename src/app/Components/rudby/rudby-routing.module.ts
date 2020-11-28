import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RudbyPage } from './rudby.page';

const routes: Routes = [
  {
    path: '',
    component: RudbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RudbyPageRoutingModule {}
