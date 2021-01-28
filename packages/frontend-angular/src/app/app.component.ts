import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { validate, personValidation, IPerson } from '@gmahechas/common-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

/*   person: IPerson = {
    firstName: 'Jaya',
    lastName: 'Company',
    email: 'jaya@jaya.com'
  }; */

  personForm = this.formBuilder.group({
    firstName: this.formBuilder.control(''),
    lastName: this.formBuilder.control('')
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    const { error } = validate(personValidation, this.personForm.value);
    if (error) {
      console.log('Error::', error.details);
    } else {
      console.log('OK:::', this.personForm.value)
    }
  }
}
