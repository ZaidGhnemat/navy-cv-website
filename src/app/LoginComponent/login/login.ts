import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices, LoginRequest } from '../../Services/LoginServices/auth-services';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly authServices = inject(AuthServices);
  private readonly router = inject(Router);

  readonly loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    passwordHash: ['', Validators.required],
  });

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const request: LoginRequest = this.loginForm.getRawValue();

    this.authServices.login(request).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res));

        // The API nests the role inside `user` ({ message, token, user: { role } }).
        // Reading `res.role` was always undefined, so nobody was ever redirected.
        if (res.user.role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: () => {
        alert('Invalid Login');
      },
    });
  }
}
