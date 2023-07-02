import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
  
  @Input() control!:any;
  @Input() type:any;
  @Input() placeholderrr:any;
  @Input() classicon:any;
  @Input() stylefake:any 


}
