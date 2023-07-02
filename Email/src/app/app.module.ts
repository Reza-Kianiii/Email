import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ShareModule } from './share/share.module';
import { LoaderInterceptor } from './intersptors/loader.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthInterceptor } from './intersptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    ShareModule,
   
    AppRoutingModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
