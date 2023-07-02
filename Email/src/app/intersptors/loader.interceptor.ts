import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { ServiceloaderService } from '../serviceall/serviceloader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader:ServiceloaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    if(!request.url.includes('username',)){
      this.loader.show()
    }
    
    return next.handle(request).pipe(
   
      finalize(()=>this.loader.hide()),
    );
  }
}
