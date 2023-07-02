import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of, switchMap } from 'rxjs';
import { AllserviceService } from './serviceall/allservice.service';
import { ServiceEmailService } from './serviceall/service-email.service';
import { ServiceloaderService } from './serviceall/serviceloader.service';



export interface eamil{
  from:string,
  id:string,
  subject:string,
  to:string,
  text:string
}

@Injectable({
  providedIn: 'root'
})
export class ResolveResolver implements Resolve<eamil> {

  constructor(private emailservice:ServiceEmailService,private router:Router){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<eamil> {
   
    const id=route.paramMap.get('id')
    
    
    return this.emailservice.get_email(id).pipe(
      catchError((err:any)=>{
        this.router.navigateByUrl('/Inbox/not-found')

        
        return EMPTY
      })
    );
  }
}
