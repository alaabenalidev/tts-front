import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Les Services/User.service';
import { Role } from '../les classes/Role.enum';
import {AuthService} from "../_auth/auth.service";
import {User} from "../_models/User";
import {TokenStorageService} from "../_auth/token-storage.service";

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  userForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,private tokenStorageService:TokenStorageService, private userService: UserService,private authService:AuthService, private router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = {
        id: 0,
        name: this.userForm.get('name')?.value,
        phoneNumber: this.userForm.get('phone')?.value,
        email: this.userForm.get('email')?.value,
        address:"",
        password: this.userForm.get('password')?.value,
        enabled:false,
        accountLocked:false,
        role: Role.SUPERADMIN
      };

      this.authService.register(user).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.userForm.reset();
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        error => {
          console.error('Error registering user', error);
          this.errorMessage = error.message || 'Registration failed. Please try again.';
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
}
