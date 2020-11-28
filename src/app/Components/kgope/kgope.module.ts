import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KgopePageRoutingModule } from './kgope-routing.module';

import { KgopePage } from './kgope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KgopePageRoutingModule
  ],
  declarations: [KgopePage]
})
export class KgopePageModule {}
