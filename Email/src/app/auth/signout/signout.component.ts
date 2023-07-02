import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { AllserviceService } from 'src/app/serviceall/allservice.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private allservice:AllserviceService,private router:Router){}
  
  ngOnInit(): void {
    this.allservice.Signout().pipe(
      tap(value=>{
        delay(2000),
        this.router.navigate(['/']);
      })
    ).subscribe()
  }

}
