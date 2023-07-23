import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-fetch-all-users',
  templateUrl: './fetch-all-users.component.html',
  styleUrls: ['./fetch-all-users.component.css']
})
export class FetchAllUsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  memberships: string[] = [];
  selectedMembership: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;


  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

 
  fetchAllUsers(): void {
    this.movieservice.getAllUsers(this.currentPage, this.pageSize).subscribe(
      (usersResponse: any) => {
        this.users = usersResponse.users;
        this.totalItems = usersResponse.totalItems;
        this.filteredUsers = this.users;
        this.memberships = this.getUniqueMemberships(this.users);
        this.applyFilter();
      },
      (error: any) => {
        console.error('Error fetching users:', error);
        // Handle error scenarios
      }
    );
  }
  getPagesArray(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.fetchAllUsers();
  }

  getUniqueMemberships(users: any[]): string[] {
    return [...new Set(users.map(user => user.membership))];
  }

  applyFilter(): void { 
    if (this.selectedMembership === '') {
      // If no membership is selected, show all users
      this.filteredUsers = this.users
    } else {
      // Filter users based on selected membership
      
      this.movieservice.getFilteredUsers(this.selectedMembership).subscribe(filteredUsers => {
        this.filteredUsers = filteredUsers.users;
      });
    }
  }

  deleteUser(userId: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.movieservice.deleteUser(userId).subscribe(
        (response: any) => {
          console.log('User deleted successfully:', response);
          // Refresh the user list after deletion
          this.fetchAllUsers();
        },
        (error: any) => {
          console.error('Error deleting user:', error);
          // Handle error scenarios
        }
      );
    }
  }
}
