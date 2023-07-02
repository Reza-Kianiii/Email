import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceloaderService {

  constructor() { }
  isloading=new Subject<boolean>()


  show(){
    this.isloading.next(true)
  }

  hide(){
    this.isloading.next(false)
  }


}
