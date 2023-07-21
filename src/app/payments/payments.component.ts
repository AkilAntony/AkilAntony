import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
 
export class PaymentsComponent implements OnInit {
 showCreatePaymentFile:boolean=false;
 showUploadPaymentFile:boolean=false;
 enableUploadButton:boolean=false;
 buttonColor:string="";
 selectedFileName!:string;

 buttons:any=['Create Payment File','Upload Payment File','View Payment Status']
  constructor() { }

  ngOnInit(): void {
  }
  showHide(buttonValue:string){
    
    
    if(buttonValue==='Create Payment File'){
      this.showCreatePaymentFile=true;
      this.showUploadPaymentFile=false;
      this.buttonColor="#2F4F4F";
    }
    else if(buttonValue==='Upload Payment File'){
      this.showCreatePaymentFile=false;
      this.showUploadPaymentFile=true;
    }
    
  }
  getSelectedFile(fileDetails:any){
  fileDetails ? this.enableUploadButton=true : this.showUploadPaymentFile=false;
   const selectedFile=fileDetails.target.files[0];
   this.selectedFileName=fileDetails.target.files[0].name;
  }
}
