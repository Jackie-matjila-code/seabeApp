import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamoshidiPage } from './ramoshidi.page';

const routes: Routes = [
  {
    path: '',
    component: RamoshidiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamoshidiPageRoutingModule {}
