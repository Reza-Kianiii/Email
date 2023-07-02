import { Component, OnInit } from '@angular/core';
import { pluck, tap } from 'rxjs';
import { __values } from 'tslib';
import { AllserviceService } from './serviceall/allservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private allservice:AllserviceService){}
  
  ngOnInit(): void {
    this.allservice.CheckAuthentication()
    
    .subscribe((value:any)=>{
      console.log(value)
    });
  }
  title = 'Email';
}
