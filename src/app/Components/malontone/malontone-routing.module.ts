import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalontonePage } from './malontone.page';

const routes: Routes = [
  {
    path: '',
    component: MalontonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalontonePageRoutingModule {}
