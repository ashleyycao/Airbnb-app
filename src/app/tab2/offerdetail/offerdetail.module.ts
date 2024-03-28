import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferdetailPageRoutingModule } from './offerdetail-routing.module';

import { OfferdetailPage } from './offerdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferdetailPageRoutingModule
  ],
  declarations: [OfferdetailPage]
})
export class OfferdetailPageModule {}
