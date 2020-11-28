import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmadimoPage } from './mmadimo.page';

const routes: Routes = [
  {
    path: '',
    component: MmadimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmadimoPageRoutingModule {}
