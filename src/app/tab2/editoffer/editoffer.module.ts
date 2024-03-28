import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditofferPageRoutingModule } from './editoffer-routing.module';

import { EditofferPage } from './editoffer.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditofferPageRoutingModule
  ],
  declarations: [EditofferPage]
})
export class EditofferPageModule {}
