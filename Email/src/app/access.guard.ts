import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, skipWhile, take } from 'rxjs';
import { AllserviceService } from './serviceall/allservice.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private detetlogin:AllserviceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  return   this.detetlogin.shownavbar.pipe(
      skipWhile((value)=>value===null|| value===false),
      take(1),
      map(value=>{
        console.log(value)
        return true
      })
    )
    } 
}
