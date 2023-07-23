import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-fetch-events',
  templateUrl: './fetch-events.component.html',
  styleUrls: ['./fetch-events.component.css']
})
export class FetchEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private movieservice: MovieService) {}

  ngOnInit(): void {
    this.fetchAllEvents();
  }

  fetchAllEvents(): void {
    this.movieservice.getAllEvents().subscribe(
      (events: any) => {
        this.events = events; // Store fetched events in 'events' property
      },
      (error: any) => {
        console.error('Error fetching events:', error);
        // Handle error scenarios
      }
    );
  }
  deleteEvent(eventId: string): void {
    this.movieservice.deleteEvent(eventId).subscribe(
      (response: any) => {
        console.log('Event deleted:', response);
        alert("Event deleted")
        // After successful deletion, fetch all events again to update the list
        this.fetchAllEvents();
      },
      (error: any) => {
        console.error('Error deleting event:', error);
        // Handle error scenarios
      }
    );
  }
}
