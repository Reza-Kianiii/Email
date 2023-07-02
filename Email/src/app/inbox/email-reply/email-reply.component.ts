import { Component, Input, OnInit } from '@angular/core';
import { ServiceEmailService } from 'src/app/serviceall/service-email.service';
import { ServiceloaderService } from 'src/app/serviceall/serviceloader.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit{
  showmodal=false;
  @Input() email:any;
  

  constructor(private emailservice:ServiceEmailService,private loader:ServiceloaderService){}


  ngOnInit(): void {

    this.email={


      to:this.email.from,
      from:this.email.to
    }

  }

  onsubmit(email:any){


    this.emailservice.sendemail(email).subscribe(()=>{
      this.showmodal=false;
    })



  }



}
