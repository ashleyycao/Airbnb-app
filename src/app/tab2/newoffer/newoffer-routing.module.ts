import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewofferPage } from './newoffer.page';

const routes: Routes = [
  {
    path: '',
    component: NewofferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewofferPageRoutingModule {}
