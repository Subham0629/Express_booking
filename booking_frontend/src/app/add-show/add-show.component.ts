import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  movieId: string="";
  movie: any;
  timings: string="";
  category: string="";

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    // Get the movie_id parameter from the URL
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('movie_id')||"";
      // Fetch the movie details using the movie_id
      this.movieService.getMovie(this.movieId).subscribe(
        (movie: any) => {
          this.movie = movie;
        },
        (error: any) => {
          console.error('Error fetching movie:', error);
        }
      );
    });
  }

  // Method to add the show using timings and category
  addShow(): void {
    if (this.movieId && this.timings && this.category) {
      // Create the payload for the POST request
      const payload = {
        movie_id: this.movieId,
        timings: this.timings.split(','), // Convert timing string to array
        category: this.category
      };

      // Make the POST request to /shows endpoint
      this.movieService.addShow(this.movieId,this.timings.split(','),this.category).subscribe(
        (response: any) => {
          console.log('Show added successfully:', response);
          // Handle success scenario (e.g., show a success message)
        },
        (error: any) => {
          console.error('Error adding show:', error);
          // Handle error scenario (e.g., show an error message)
        }
      );
    } else {
      console.error('Invalid form data');
      // Handle the case when the form data is invalid (e.g., show an error message)
    }
  }
  }

