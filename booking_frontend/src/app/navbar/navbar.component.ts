import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showRegistrationForm = false;
  showUpdateForm: boolean = false;

  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn) {
        this.showRegistrationForm = false;
        this.showUpdateForm = false;
      }
    });
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }

  logout(): void {
    localStorage.removeItem('express_user');
    this.authService.setLoggedInStatus(false);
    this.router.navigate(['/movies']);
  }
}
