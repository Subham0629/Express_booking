import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    localStorage.getItem('express_user')
  }

  updateProfile(): void {
    // Perform the update operation using a PUT request
    console.log(typeof(localStorage.getItem('express_user')))
    this.http.put(`https://express-booking.onrender.com/users/${String(localStorage.getItem('express_user'))}`, this.user)
      .subscribe(
        (response: any) => {
          alert("Profile updated successfully")
          this.user={}
          // Handle success scenario, e.g., show a success message
        },
        (error: any) => {
          console.error('Profile update failed:', error);
          // Handle error scenario, e.g., show an error message
        }
      );
  }

  cancel(): void {
    this.router.navigate(['/movies']);
  }
}
