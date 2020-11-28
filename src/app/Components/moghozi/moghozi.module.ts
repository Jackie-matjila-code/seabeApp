import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoghoziPageRoutingModule } from './moghozi-routing.module';

import { MoghoziPage } from './moghozi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoghoziPageRoutingModule
  ],
  declarations: [MoghoziPage]
})
export class MoghoziPageModule {}
