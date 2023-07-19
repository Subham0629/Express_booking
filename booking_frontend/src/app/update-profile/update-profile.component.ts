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
    // Retrieve user details using a GET request
    // this.http.get(`http://localhost:5000/users/${localStorage.getItem('express_user')}`)
    //   .subscribe(
    //     (response: any) => {
    //       this.user = response;
    //     },
    //     (error: any) => {
    //       console.error('Failed to fetch user details:', error);
    //       // Handle error scenario
    //     }
    //   );
  }

  updateProfile(): void {
    // Perform the update operation using a PUT request
    console.log(typeof(localStorage.getItem('express_user')))
    this.http.put(`http://localhost:5000/users/${String(localStorage.getItem('express_user'))}`, this.user)
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
