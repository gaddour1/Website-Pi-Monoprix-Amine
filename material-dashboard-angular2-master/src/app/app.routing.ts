import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FinancialComponent } from './financial/financial.component';
import { SupplierFinancialComponent } from './supplier-financial/supplier-financial.component';
import { InvoicePredectionComponent } from './pages/InvoicePredection/InvoicePredection.component';
import { AmountInformationComponent } from './pages/amount-information/amount-information.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },/* {
    path: '',
    component: LoginComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },*/
  {path:'login',component:LoginComponent},
  {path:'financial',component:FinancialComponent},
  {path:'SupplierFinancial',component:SupplierFinancialComponent},
  { path: 'InvoicePredection', component: InvoicePredectionComponent },
  { path: 'amount-information', component: AmountInformationComponent },
  {path: 'SupplierClustering', component: SupplierFinancialComponent},


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
