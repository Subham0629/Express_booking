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

  isuserLogged(): boolean {
    // Check if the user is logged in by verifying the presence of a value in localStorage
    const userToken = localStorage.getItem('express_user');
    return userToken !== null && userToken !== undefined;
  }

  logout(): void {
    localStorage.removeItem('express_user');
    localStorage.removeItem('adminToken');
    if (confirm('Are you sure you want to log out?')) {
      this.authService.setLoggedInStatus(false);
      this.router.navigate(['/movies']);
    }else{
      this.authService.setLoggedInStatus(true);
    }
    
    
  }
}
