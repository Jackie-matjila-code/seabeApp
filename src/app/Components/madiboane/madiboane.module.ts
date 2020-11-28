import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadiboanePageRoutingModule } from './madiboane-routing.module';

import { MadiboanePage } from './madiboane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadiboanePageRoutingModule
  ],
  declarations: [MadiboanePage]
})
export class MadiboanePageModule {}
