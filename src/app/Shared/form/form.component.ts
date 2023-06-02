import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formData = {
    name: '',
    surname: '',
    email: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
