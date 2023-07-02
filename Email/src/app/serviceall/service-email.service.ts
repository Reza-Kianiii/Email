import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { tap, toArray } from 'rxjs';
import { AllserviceService } from './allservice.service';
import { ServiceloaderService } from './serviceloader.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmailService  {
  email:string='https://api.angular-email.com'
  constructor(private http:HttpClient,private loader:ServiceloaderService) { }

  get_emails(){
    return this.http.get<any>(`${this.email}/emails`).pipe(
      tap(()=>{
        this.loader.show()
      })
    );
  }


  get_email(id:any){
    return this.http.get<any>(`${this.email}/emails/${id}`).pipe(
     
      tap(()=>{
        this.loader.show()
      }),

    );
  }


  sendemail(email:any){

    return this.http.post(`${this.email}/emails`,email).pipe(
      tap(()=>{
      
        this.loader.show();
      })
    )

  }


}
