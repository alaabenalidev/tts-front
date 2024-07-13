// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../_auth/auth.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
      this.isLoggedIn = this.authService.isLoggedIn();

    // this.authService.currentUserName.subscribe((name: string) => {
    //   this.userName = name;
    // });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to the login page after logging out
  }
}
