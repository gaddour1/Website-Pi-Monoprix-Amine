import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FinancialComponent } from './financial/financial.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SupplierFinancialComponent } from './supplier-financial/supplier-financial.component';
import { InvoicePredectionComponent } from './pages/InvoicePredection/InvoicePredection.component';
import { AmountInformationComponent } from './pages/amount-information/amount-information.component';
import { SupplierClusteringComponent } from './pages/supplier-clustering/supplier-clustering.component';
import { SupplierEvaluationComponent } from './pages/supplier-evaluation/supplier-evaluation.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTooltipModule,
    FormsModule,

    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    FinancialComponent,
    SupplierFinancialComponent,
    InvoicePredectionComponent,
    AmountInformationComponent,
    SupplierClusteringComponent,
    SupplierEvaluationComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
