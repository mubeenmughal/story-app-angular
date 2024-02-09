import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  ZIPCODE_VALIDATION_PATTERN,
  MOBILE_NO_VALIDATION_PATTERN,
} from 'src/app/core/constants/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: any;

  constructor(private _location: Location, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone_no: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(MOBILE_NO_VALIDATION_PATTERN),
        ]),
      ],
      street_address: ['', Validators.required],
      date: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(ZIPCODE_VALIDATION_PATTERN),
        ]),
      ],
    });
  }

  goToPreviousPage(): void {
    this._location.back();
  }

  submitForm() {
    console.log(this.form.value);
    console.log(
      `date : ${this.form.value.date.getDate()}/${this.form.value.date.getMonth()}/${this.form.value.date.getFullYear()}`
    );
  }
}
