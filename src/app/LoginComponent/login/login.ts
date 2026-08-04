import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthServices } from '../../Services/LoginServices/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authServices: AuthServices, private router: Router ) {
    this.loginForm = this.fb.group({
      username: [''],
      passwordHash: ['']
      
    })
  }

  login() {
    console.log(this.loginForm.value)
    this.authServices.login(this.loginForm.value).subscribe({
      next: (res:any) => {
        localStorage.setItem(
          'user',
          JSON.stringify(res)
        );

        if(res.role == 'Admin'){
          this.router.navigate(['/admin'])
        }

        if(res.role == 'User'){
          this.router.navigate(['/home'])
        }
      },
      error: () => {
        alert("Invalid Login");
      }
    })
  }

  
}
