import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalontonePageRoutingModule } from './malontone-routing.module';

import { MalontonePage } from './malontone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalontonePageRoutingModule
  ],
  declarations: [MalontonePage]
})
export class MalontonePageModule {}
