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


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTooltipModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    FinancialComponent,
    SupplierFinancialComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
