import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent implements OnInit {
  
  @Input() from:any
  @Output() submitemail= new EventEmitter();
  formmain!:FormGroup
  ngOnInit(): void {
  
    this.formmain=new FormGroup({
      from: new FormControl({value:this.from.from,disabled: true}),
      to: new FormControl(this.from.to,[Validators.email,Validators.required]),
      subject: new FormControl(this.from.subject,Validators.required),
      Text: new FormControl(this.from.text,Validators.required),
    })
  }

  get F(){
    return this.formmain;
  }

  onsubmit(){
    if(this.formmain.valid){
      // console.log(this.formmain.getRawValue())
      this.submitemail.emit(this.formmain.getRawValue())
    }
    else{
      this.formmain.markAllAsTouched()
      return
    }

  }
  
}
