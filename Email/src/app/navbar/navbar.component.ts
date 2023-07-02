import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AllserviceService } from '../serviceall/allservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  shownavbar!:boolean;
  constructor(private allservice:AllserviceService){}
  ngOnInit(): void {
    this.allservice.shownavbar.subscribe((value)=>{
      console.log(value)
      this.shownavbar=value;
    })
  }




}
