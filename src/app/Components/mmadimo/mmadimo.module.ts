import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmadimoPageRoutingModule } from './mmadimo-routing.module';

import { MmadimoPage } from './mmadimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmadimoPageRoutingModule
  ],
  declarations: [MmadimoPage]
})
export class MmadimoPageModule {}
