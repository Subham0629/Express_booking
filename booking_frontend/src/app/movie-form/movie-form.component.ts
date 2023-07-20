// movie-form.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  movie = {
    title: '',
    imageurl: '',
    city: '',
    language: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post('http://localhost:5000/movies', this.movie)
      .subscribe(
        (response: any) => {
          console.log('Movie added successfully:', response);
          // Reset the form
          this.movie = {
            title: '',
            imageurl: '',
            city: '',
            language: ''
          };
          alert("Added Movie")
          // Redirect to admin dashboard or any other page after successful submission
          // this.router.navigate(['/admin']);
        },
        (error: any) => {
          console.error('Failed to add movie:', error);
          // Handle error scenarios
        }
      );
  }
}
