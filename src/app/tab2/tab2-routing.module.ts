import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'offerdetail',
    loadChildren: () => import('./offerdetail/offerdetail.module').then( m => m.OfferdetailPageModule)
  },
  {
    path: 'newoffer',
    loadChildren: () => import('./newoffer/newoffer.module').then( m => m.NewofferPageModule)
  },
  {
    path: 'editoffer',
    loadChildren: () => import('./editoffer/editoffer.module').then( m => m.EditofferPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
