import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeabePage } from './seabe.page';

const routes: Routes = [
  {
    path: '',
    component: SeabePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeabePageRoutingModule {}
