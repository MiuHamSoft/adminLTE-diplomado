import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  showButtonFlag: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(form: FormGroup) {
    console.log(form)
    if (form.valid) {
      console.log(form.value)
      this.auth.login(form.value);
    }
  }

  resolved(captchaResponse: string) {
    console.log(captchaResponse)
    this.showButton();
  }

  showButton() {
    this.showButtonFlag = true;
  }

  initForm() {
    this.loginFormGroup = this.formBuilder.group({
      'email': ["", Validators.compose([Validators.email, Validators.required])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

}
