import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './access.guard';

import { InboxModule } from './inbox/inbox.module';

const routes: Routes = [
  {path:'Inbox',loadChildren:()=>import('./inbox/inbox.module').then(m=>InboxModule),canActivate:[AccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
