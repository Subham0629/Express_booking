import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private http: HttpClient, private router: Router,private authService: AuthenticationService) {}
  user = {
    username: '',
    password: '',
    email: '',
    membership: '',
    gender: '',
    user_status:true,
    bio: '',
    dateOfBirth: ''
  };

  login = {
    email: '',
    password: ''
  };

  showSignupForm = true;
  showUpdateForm = false;
  
  toggleForm() {
    this.showSignupForm = !this.showSignupForm;
  }

  register() {
    this.http.post('http://localhost:5000/users', this.user)
      .subscribe(
        (response: any) => {
          alert("Registration successful")
          console.log('Registration successful:', response);
          // Reset the form
          this.user = {
            username: '',
            password: '',
            email: '',
            membership: '',
            gender: '',
            bio: '',
            dateOfBirth: '',
            user_status:true
          };
        },
        (error: any) => {
          console.error('Registration failed:', error);
          // Handle error scenarios
        }
      );
    
  }

  loginsubmit() {
    this.http.post('http://localhost:5000/login_user', this.login)
      .subscribe(
        (response: any) => {
          if (response.message=='Login successful!'){
            localStorage.setItem("express_user", response.user_id);
          console.log('Login successful:', response);
          // Reset the form
          this.setLoggedInStatus(true);
          this.login = {
            email: '',
            password: ''
          };
          alert("Login Successfull")
          this.router.navigate(['/movies']);
          }else{
            this.setLoggedInStatus(false);
            alert(`${response.message}`);
          }
          
        },
        (error: any) => {
          console.error('Login failed:', error);
          // Handle error scenarios
        }
      );
  }

  updateProfile() {
    this.http.put(`http://localhost:5000/users/${localStorage.getItem("express_user")}`, this.user)
      .subscribe(
        (response: any) => {
          console.log('Profile update successful:', response);
          alert('Profile updated successfully');
          
        },
        (error: any) => {
          console.error('Profile update failed:', error);
          // Handle error scenarios
        }
      );
  }



  private setLoggedInStatus(isLoggedIn: boolean): void {
    if (isLoggedIn) {
      this.authService.setLoggedInStatus(isLoggedIn);
    } else {
      localStorage.removeItem('expess_user');
    }
  }
}
