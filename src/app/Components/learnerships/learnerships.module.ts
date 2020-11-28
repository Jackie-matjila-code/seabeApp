import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnershipsPageRoutingModule } from './learnerships-routing.module';

import { LearnershipsPage } from './learnerships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnershipsPageRoutingModule
  ],
  declarations: [LearnershipsPage]
})
export class LearnershipsPageModule {}
