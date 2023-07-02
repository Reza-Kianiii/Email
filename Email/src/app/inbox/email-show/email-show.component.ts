import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pluck, switchMap, tap } from 'rxjs';
import { eamil } from 'src/app/resolve.resolver';
import { AllserviceService } from 'src/app/serviceall/allservice.service';
import { ServiceEmailService } from 'src/app/serviceall/service-email.service';




@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  emails!:eamil
  user:any;
  constructor(private activerouter:ActivatedRoute ,private serviceemail:ServiceEmailService,private allservice:AllserviceService){
    this.activerouter.data.subscribe((value:any)=>{
      console.log(value)
      this.emails=value.email
       this.user= this.allservice.getusernamelogin
    });
    
  }
  ngOnInit(): void {
    
    
  }

}
