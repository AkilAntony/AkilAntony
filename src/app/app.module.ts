import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
 import {MatMenuModule} from '@angular/material/menu'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PaymentsComponent } from './payments/payments.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { InvoiceJournalsComponent } from './invoice-journals/invoice-journals.component';
import { ReportsComponent } from './reports/reports.component';
import { BillStatusComponent } from './bill-status/bill-status.component';
import { SoFileUploadComponent } from './so-file-upload/so-file-upload.component';
import { OperationLogComponent } from './operation-log/operation-log.component';
import { GenralFileUploadComponent } from './genral-file-upload/genral-file-upload.component';
import { MasterDataManagementComponent } from './master-data-management/master-data-management.component';
import { ServiceRoleComponent } from './service-role/service-role.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PaymentsComponent,
    AccountManagementComponent,
    InvoiceJournalsComponent,
    ReportsComponent,
    BillStatusComponent,
    SoFileUploadComponent,
    OperationLogComponent,
    GenralFileUploadComponent,
    MasterDataManagementComponent,
    ServiceRoleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
