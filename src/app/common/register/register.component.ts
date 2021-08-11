import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  passwordRegex = "[a-zA-Z0-9 = !#$%&()*+\/=?@_]{8,20}$";

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onRegister(form: FormGroup) {
    console.log(form)
    if (form.valid) {
      console.log(form.value)
      this.auth.register(form.value);
    }
  }

  onStrengthChange(value) {
    this.registerFormGroup.get("password-strength").setValue(value);
  }

  initForm() {
    this.registerFormGroup = this.formBuilder.group({
      'email': ["", Validators.compose([Validators.email, Validators.required])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)])],
      'repeat-password': ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)])],
      'password-strength': [0, Validators.compose([Validators.min(3)])],
      'terms': [false, Validators.compose([Validators.requiredTrue])]
    }, { validator: this.checkPassword });
  }

  checkPassword(c: AbstractControl) {
    if (c.get('password').value !== c.get('repeat-password').value) {
      return c.get('repeat-password').setErrors({ missmatch: true })
    }
  }

}
