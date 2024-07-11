import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService, AuthenticationResponse  } from '../Les Services/Login.service';
import { AuthService } from '../Les Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      this.loginService.login(email, password).subscribe(
        (authResponse) => {
          console.log('Login successful!', authResponse);
          sessionStorage.setItem('token', authResponse.jwt);
          sessionStorage.setItem('name', authResponse.name);
          sessionStorage.setItem('role', authResponse.role);
          this.authService.login(authResponse.name);
          this.router.navigate(['/user-events']); // Navigate to '/user-events' upon successful login
        },
        (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      );
    }
  }
  }
