import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllserviceService } from 'src/app/serviceall/allservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private allservice:AllserviceService,private router:Router){}

  userlogin:any;

  signin!:FormGroup

  ngOnInit(): void {
   this.signin=new FormGroup({
     username:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(11)]),
     password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
   })
    
  }

  get U(){
    return this.signin
  }
  submit(){

    if(this.signin.invalid){

      this.signin.markAllAsTouched();
      return
    }


    this.allservice.Signin(this.signin.value).subscribe((value)=>{
      console.log(value),
      this.router.navigate(['/Inbox']);
    },
    (err)=>{
      if(err.status=='422'){
        this.signin.setErrors({Notuser:true})
      }
    })
  }


}
