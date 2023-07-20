import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  movies: any[] = [];
  moviesFetched = false;

  constructor(private router: Router,private movieService: MovieService) {}

  ngOnInit(): void {
    // this.fetchAllMovies();
  }

  navigateToAddMovieForm() {
    this.router.navigate(['/admin/movie-form']);
  }
  

  // Method to fetch all movies
  fetchAllMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies: any) => {
        console.log('Fetched all movies:', movies);
        this.movies = movies; // Store fetched movies in 'movies' property
        this.moviesFetched = true;
      },
      (error: any) => {
        console.error('Error fetching movies:', error);
        // Handle error scenarios
      }
    );
  }
}
