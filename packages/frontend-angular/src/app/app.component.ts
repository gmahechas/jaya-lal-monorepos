import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  personForm = this.formBuilder.group({
    firstName: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    age: this.formBuilder.control('')
  });

  onSubmit() {
    console.log(this.personForm);
  }
}
