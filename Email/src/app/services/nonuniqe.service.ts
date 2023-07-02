import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, EMPTY, filter, from, map, Observable, of, retry, tap } from 'rxjs';
import { AllserviceService } from '../serviceall/allservice.service';

@Injectable({
  providedIn: 'root'
})
export class NonuniqeService implements AsyncValidator {

  constructor(private serviceall:AllserviceService) { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
let baseurl=`https://api.angular-email.com`
  return this.serviceall.usernameAvaible(baseurl,control.value) .pipe(
    filter(respone=>{return respone.avalible}),
    catchError((err:any)=>{
      if(err.error.username){
        return of({username_is_use:true})
      }
      else{
        return of({error_is_Unknow:true})
      }
    })
    ,
    tap(value=>{console.log(value)}),
  )
    
 
  }
}
