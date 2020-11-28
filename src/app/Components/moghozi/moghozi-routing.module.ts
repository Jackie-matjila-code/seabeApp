import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoghoziPage } from './moghozi.page';

const routes: Routes = [
  {
    path: '',
    component: MoghoziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoghoziPageRoutingModule {}
