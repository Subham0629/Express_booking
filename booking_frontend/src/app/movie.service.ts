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
  private eventUrl="http://localhost:5000/events";

  constructor(private http: HttpClient) {}

  // Method to fetch all movies
  getAllMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  deleteMovie(movieId: string): Observable<any> {
    return this.http.delete(`${this.showUrl}/movies/${movieId}`);
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

  
  getAllEvents(): Observable<any> {
    return this.http.get<any>(this.eventUrl);
  }
  addParticipant(participantData: any): Observable<any> {
    return this.http.post(`${this.showUrl}/participants`, participantData);
  }

  addEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.showUrl}/events`, eventData);
  }
  getAllParticipants(): Observable<any> {
    return this.http.get<any>(`${this.showUrl}/participants`);
  }

  getEvent(eventId: string): Observable<any> {
    const url = `${this.showUrl}/events/${eventId}`;
    return this.http.get<any>(url);
  }
  deleteEvent(eventId: string): Observable<any> {
    const url = `${this.showUrl}/events/${eventId}`;
    return this.http.delete(url);
  }

  getAllUsers(pageNumber: number, pageSize: number) {
    return this.http.get<any>(`${this.showUrl}/users?page=${pageNumber}&per_page=${pageSize}`);
  }
 
  getFilteredUsers(membership: string): Observable<any> {
    return this.http.get<any>(`${this.showUrl}/users/filter?membership=${membership}`);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.showUrl}/users/${userId}`);
  }
}
