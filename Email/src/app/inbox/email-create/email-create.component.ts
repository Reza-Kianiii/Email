import { Component, OnInit } from '@angular/core';
import { eamil } from 'src/app/resolve.resolver';
import { AllserviceService } from 'src/app/serviceall/allservice.service';
import { ServiceEmailService } from 'src/app/serviceall/service-email.service';
import { ServiceloaderService } from 'src/app/serviceall/serviceloader.service';
import { __values } from 'tslib';

export interface email{
  id:string,
  subject:string,
  from:string;
  to:string;
  text:string;

}

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showmodal=false;
  constructor(private allservice:AllserviceService,private emailservice:ServiceEmailService){}

  email:any;

  ngOnInit(): void {

    this.email={
      id:'',
      subject:' ',
      from: `${this.allservice.getusernamelogin}@angular-email.com`,
      to:'',
      text:''
    }
  }

  submit(value:any){
   this.emailservice.sendemail(value).subscribe(()=>{
     

     this.showmodal=false;
   })
  }


}
