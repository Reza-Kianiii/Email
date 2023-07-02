import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    InputComponent,
    LoaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[InputComponent,LoaderComponent,ModalComponent]
})
export class ShareModule { }
