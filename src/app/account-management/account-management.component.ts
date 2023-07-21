 
import { NgForm } from '@angular/forms';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {
 isCreateCustomerAccountVisible:boolean=false;
 customerAccountDetails:object={};
 accountType:string="";
 customerAccountNumber:number=1000;

  ngOnInit(): void {
 
  }
  getCustomerAccountDetails(details:any){
    console.log(details)
    console.log(details.accountType)
     this.customerAccountDetails={"AccountType":details.accountType,"AccountName":details.ccountName};
     this.customerAccountNumber=this.customerAccountNumber+1;
     console.table(this.customerAccountDetails)
     }

hideCreateCustomerAccount(){
  this.isCreateCustomerAccountVisible=false;
}
showCreateCustomerAccount(){
  this.isCreateCustomerAccountVisible=true;
}

}