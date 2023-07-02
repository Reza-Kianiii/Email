import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveResolver } from '../resolve.resolver';
import { EmailShowComponent } from './email-show/email-show.component';
import { HomeInboxComponent } from './home-inbox/home-inbox.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  {path:'',component:HomeInboxComponent,children:[
    {path:'',component:PlaceholderComponent},
    {path:'not-found',component:NotFoundComponent ,pathMatch:'full'},
    {path:':id',component:EmailShowComponent,resolve:{email: ResolveResolver},pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
