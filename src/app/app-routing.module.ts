import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management/account-management.component';
import { BillStatusComponent } from './bill-status/bill-status.component';
import { GenralFileUploadComponent } from './genral-file-upload/genral-file-upload.component';
import { InvoiceJournalsComponent } from './invoice-journals/invoice-journals.component';
import { MasterDataManagementComponent } from './master-data-management/master-data-management.component';
import { OperationLogComponent } from './operation-log/operation-log.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReportsComponent } from './reports/reports.component';
import { ServiceRoleComponent } from './service-role/service-role.component';
import { SoFileUploadComponent } from './so-file-upload/so-file-upload.component';
const routes: Routes = [{path:"payments",component:PaymentsComponent},
                        {path:"accountmanagement",component:AccountManagementComponent},
                        {path:"invoice/journals",component:InvoiceJournalsComponent},
                        {path:"reports",component:ReportsComponent},
                        {path:"operationlog",component:OperationLogComponent},
                        {path:"billstatus",component:BillStatusComponent},
                        {path:"sofileupload",component:SoFileUploadComponent},
                        {path:"generalfileupload",component:GenralFileUploadComponent},
                        {path:"masterdatamanagement",component:MasterDataManagementComponent},
                        {path:"servicerole",component:ServiceRoleComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
