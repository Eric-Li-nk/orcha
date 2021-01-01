import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ValidationService } from '../_services/validation.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appValidateUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUsernameDirective), multi: true }]

})
export class ValidateUsernameDirective implements Validator {

  constructor(private customValidator: ValidationService) { }

  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.customValidator.usernameValidator(control);
  }
}