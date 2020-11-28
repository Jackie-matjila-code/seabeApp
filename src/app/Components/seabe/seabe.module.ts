import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeabePageRoutingModule } from './seabe-routing.module';

import { SeabePage } from './seabe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeabePageRoutingModule
  ],
  declarations: [SeabePage]
})
export class SeabePageModule {}
