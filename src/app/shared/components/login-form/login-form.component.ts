import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  @ViewChild("loginForm") public loginForm!: NgForm;

  submit() {
    this.markAllControllsTouched();
    if (this.loginForm.invalid) return;

    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.login(email, password).subscribe({
      next: () => this.router.navigate(['/courses']),
      error: (error) => console.error("Login failed", error),
    });
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