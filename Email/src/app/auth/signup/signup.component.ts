import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/serviceall/allservice.service';
import { MatchPasswordService } from 'src/app/services/match-password.service';
import { NonuniqeService } from 'src/app/services/nonuniqe.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private servicematch:MatchPasswordService,private nonuniqe:NonuniqeService,private allservice:AllserviceService,private router:Router){}

  @ViewChild('load',{static:true})load!:ElementRef;

  Signup!:FormGroup;
  
  ngOnInit(): void {
    this.Signup=new FormGroup({
      Username:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(11)],[this.nonuniqe.validate.bind(this.nonuniqe)]),
      Passwrod:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      Confirmpassword:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    },{validators:[this.servicematch.validate]})
  }

  onsubmit(){
    if(this.Signup.invalid){
      this.Signup.markAllAsTouched()
      return
    }
    this.allservice.Signuprequest(this.Signup.value).subscribe((value)=>{
      console.log(value),
      this.router.navigate(['/Inbox'])
    },
    (err)=>{
      if(!err.status){
        this.Signup.setErrors({Notconnected:true})
      }
      else{
        this.Signup.setErrors({UnkownErrors:true})
      }
    }
    )
    
    
  }

  get U(){
    return this.Signup
  }


}
