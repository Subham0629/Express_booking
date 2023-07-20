// movie.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:5000/movies';
  private showUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Method to fetch all movies
  getAllMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

   // Method to fetch a single movie by ID
   getMovie(movieId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${movieId}`);
  }

  addShow(movieId: string, timings: string[], category: string) {
    const showData = {
      movie_id: movieId,
      timings: timings,
      category: category
    };
    return this.http.post(`${this.showUrl}/shows`, showData);
  }

  getAllShows(): Observable<any[]> {
    const url = `${this.showUrl}/shows`;
    return this.http.get<any[]>(url);
  }
}
