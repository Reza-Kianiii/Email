import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:SigninComponent},//localhost:4200
  {path:'Sign up',component:SignupComponent,pathMatch:'full'} ,//localhost/Signup
  {path:'Sign out',component:SignoutComponent},//localhost/Sign out
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
