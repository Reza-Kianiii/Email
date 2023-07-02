import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ServiceloaderService } from 'src/app/serviceall/serviceloader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit,OnDestroy {
  
  constructor(private loader:ServiceloaderService,private el:ElementRef){}
  ngOnDestroy(): void {
   document.querySelector('app-loader')?.remove();
  }
  isloading: Subject<boolean>=this.loader.isloading;
  
  
  ngOnInit(): void {

    document.body.appendChild(this.el.nativeElement)

  }



}

