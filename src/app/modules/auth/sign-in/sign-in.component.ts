import { Component } from '@angular/core';
import { SignInForm } from './form/sign-in-form';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent extends SignInForm {
  form: FormGroup = this.createSignInForm();

  constructor(
    private router: Router, 
    private toastr: ToastrService) {
    super();
  }

  async signIn() {
    if (this.form.valid) {
      this.toastr.success('You logged in successfully');
      this.router.navigate(['app/users']);

      localStorage.setItem('isLoggedIn', 'true')
    }
  }
}
