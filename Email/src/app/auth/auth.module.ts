import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { SignoutComponent } from './signout/signout.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    SignoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
