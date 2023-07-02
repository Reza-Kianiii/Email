import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, pluck, Subject, tap } from 'rxjs';

export interface Signuprequest{
  Username:string;
  Passwrod:string;
  Confirmpassword:string


}


export interface LoginCredential{
  username:string,
  password:string
}


export interface Signupresponse{
  username:string

}


@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  getusernamelogin:string=''

  shownavbar=new BehaviorSubject(false);
  constructor(private http:HttpClient) { }

 

  usernameAvaible(  address:string, username:any){
    return this.http.post<any>(`${address}/auth/username`,{  username})
  }


  Signuprequest(values:Signuprequest){
    return this.http.post<Signupresponse>(` https://api.angular-email.com/auth/signup`,{
      username:values.Username,
      password:values.Passwrod,
      passwordConfirmation:values.Confirmpassword
    }).pipe(
      tap(value=>{
        this.shownavbar.next(true)
        this.getusernamelogin=value.username;
      })
    )
  }

  CheckAuthentication(){
    return this.http.get(`https://api.angular-email.com/auth/signedin`).pipe(
      tap((value:any)=>{
        if(value.username){
          console.log(value.username)
          this.shownavbar.next(true)
          this.getusernamelogin=value.username
        }
        else{
          this.shownavbar.next(false)
          this.getusernamelogin=''
        }
      })
    )
  }


  Signout(){
    return this.http.post<any>(`https://api.angular-email.com/auth/signout`,{}).pipe(
      tap(()=>{
        this.shownavbar.next(false);
        this.getusernamelogin=''
      })
    )
  }


  Signin(value:LoginCredential){
  return this.http.post<any>(`https://api.angular-email.com/auth/signin`,value).pipe(
  pluck('username'),  
  tap((value)=>{
      this.shownavbar.next(true);
      this.getusernamelogin =value
    })
  )
  }


}
