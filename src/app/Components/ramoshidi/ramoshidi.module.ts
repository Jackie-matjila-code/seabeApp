import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamoshidiPageRoutingModule } from './ramoshidi-routing.module';

import { RamoshidiPage } from './ramoshidi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamoshidiPageRoutingModule
  ],
  declarations: [RamoshidiPage]
})
export class RamoshidiPageModule {}
