import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;

  submit() {
    this.markAllControllsTouched();
  }

  private markAllControllsTouched() {
    if (this.loginForm == null) return;
    const controls = this.loginForm.controls;

    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].markAsTouched();
      }
    }
  }
}       