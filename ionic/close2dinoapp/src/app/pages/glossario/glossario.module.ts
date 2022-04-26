import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { GlossarioPage } from './glossario.page';
import { GlossarioPageRoutingModule } from './glossario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlossarioPageRoutingModule
  ],
  declarations: [GlossarioPage]
})
export class GlossarioPageModule {}