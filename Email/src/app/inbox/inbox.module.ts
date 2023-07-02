import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeInboxComponent } from './home-inbox/home-inbox.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShareModule } from '../share/share.module';
import { EmailformComponent } from './emailform/emailform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeInboxComponent,
    EmailCreateComponent,
    EmailInboxComponent,
    EmailReplyComponent,
    EmailShowComponent,
    PlaceholderComponent,
    NotFoundComponent,
    EmailformComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
