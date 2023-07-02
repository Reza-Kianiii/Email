import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServiceEmailService } from 'src/app/serviceall/service-email.service';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent implements OnInit {
 

  constructor(private serviceemail:ServiceEmailService,){}

  listarray=[];
 
  ngOnInit(): void {
    this.serviceemail.get_emails().subscribe(value=>{
      
      this.listarray=value
    })

  }


 

}
