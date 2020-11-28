import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadiboanePage } from './madiboane.page';

const routes: Routes = [
  {
    path: '',
    component: MadiboanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadiboanePageRoutingModule {}
