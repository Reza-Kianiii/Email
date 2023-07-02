import { Component, OnInit } from '@angular/core';
import { ServiceEmailService } from 'src/app/serviceall/service-email.service';

@Component({
  selector: 'app-home-inbox',
  templateUrl: './home-inbox.component.html',
  styleUrls: ['./home-inbox.component.css']
})
export class HomeInboxComponent implements OnInit {
constructor(private serviceemail:ServiceEmailService){}
  ngOnInit(): void {

    this.serviceemail.get_emails().subscribe(value=>{
      console.log(value)
    })

  }
}
