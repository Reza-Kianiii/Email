import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit ,OnDestroy{
  @Output() dismiss=new EventEmitter<any>()
constructor(private el:ElementRef){}
  ngOnDestroy(): void {
    document.querySelector('app-modal')?.remove();
   
  }
  ngOnInit(): void {
  // this.el.nativeElement.remove();
  document.body.appendChild(this.el.nativeElement)
  }

  ondismissclick(){

    this.dismiss.emit()

  }

}
