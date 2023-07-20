import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  shows: any[] = [];

  constructor(private movieService: MovieService, private MovieService:MovieService ) {}

  ngOnInit(): void {
    this.fetchAllShows();
  }

  fetchAllShows(): void {
    this.MovieService.getAllShows().subscribe(
      (shows: any) => {
        this.shows = shows;
        this.fetchMovieDetailsForShows();
      },
      (error: any) => {
        console.error('Error fetching shows:', error);
        // Handle error scenarios
      }
    );
  }

  fetchMovieDetailsForShows(): void {
    this.shows.forEach((show) => {
      this.movieService.getMovie(show.movie_id).subscribe(
        (movie: any) => {
          // Combine show and movie details
          show.movie_details = movie;
        },
        (error: any) => {
          console.error('Error fetching movie details:', error);
          // Handle error scenarios
        }
      );
    });
  }
}
