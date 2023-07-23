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
  navigateToFetchParticipants() {
    this.router.navigate(['/admin/fetch-participants']);
  }
  

  // Method to fetch all movies
  fetchAllMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies: any) => {
        this.movies = movies; // Store fetched movies in 'movies' property
        this.moviesFetched = true;
      },
      (error: any) => {
        console.error('Error fetching movies:', error);
        // Handle error scenarios
      }
    );
  }
  deleteMovie(movieId: string): void {
    this.movieService.deleteMovie(movieId).subscribe(
      () => {
        console.log(`Movie with ID ${movieId} deleted successfully.`);
        // Refresh the list of movies after deletion
        this.fetchAllMovies();
      },
      (error: any) => {
        console.error(`Error deleting movie with ID ${movieId}:`, error);
      }
    );
  }
}
