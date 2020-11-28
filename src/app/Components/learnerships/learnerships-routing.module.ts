import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnershipsPage } from './learnerships.page';

const routes: Routes = [
  {
    path: '',
    component: LearnershipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnershipsPageRoutingModule {}
