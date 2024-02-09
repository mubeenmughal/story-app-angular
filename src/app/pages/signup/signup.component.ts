import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { apiService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  form: FormGroup | any;
  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: apiService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }
  get passwordMatchError() {
    return (
      this.form.getError('mismatch') &&
      this.form.get('confirm_password')?.touched
    );
  }

  registerForm() {
    console.log(this.form.value);
    // this._apiService.register(this.form.value).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
