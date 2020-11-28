import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DjsPageRoutingModule } from './djs-routing.module';

import { DjsPage } from './djs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DjsPageRoutingModule
  ],
  declarations: [DjsPage]
})
export class DjsPageModule {}
