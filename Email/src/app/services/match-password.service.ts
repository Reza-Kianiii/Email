import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchPasswordService implements Validator {

  constructor() { }
  validate(form: AbstractControl<any, any>): ValidationErrors | null {
    let password=form.get('Passwrod')?.value;
    let confirmpassword=form.get('Confirmpassword')?.value
    if(password==confirmpassword){
      return null
    }
    else{
      return {additinalerrormatch_password:true}
    }

  }
}
