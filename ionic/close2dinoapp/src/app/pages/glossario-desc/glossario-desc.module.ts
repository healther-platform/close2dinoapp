import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { GlossarioDescPage } from './glossario-desc.page';
import { GlossarioDescPageRoutingModule } from './glossario-desc-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlossarioDescPageRoutingModule
  ],
  declarations: [GlossarioDescPage]
})
export class GlossarioDescPageModule {}