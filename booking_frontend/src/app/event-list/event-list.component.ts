import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.fetchAllEvents();
  }

  
  fetchAllEvents(): void {
    this.movieservice.getAllEvents().subscribe(
      (events: any) => {
        console.log('Fetched all events:', events);
        this.events = events; // Store fetched events in 'events' property
      },
      (error: any) => {
        console.error('Error fetching events:', error);
        // Handle error scenarios
      }
    );
  }
  bookEvent(eventId: string): void {
    const userId = localStorage.getItem('express_user');

    if (!userId) {
      alert('Please login first to book an event.');
      return;
    }

    const participantData = {
      event_id: eventId,
      user_id: userId
    };

    this.movieservice.addParticipant(participantData).subscribe(
      (response: any) => {
        console.log('Participant added successfully:', response);
        if(response.message=="User is already a participant in the event"){
          alert("You have already booked event")
        }else{
          alert("Event has been booked for you")
        }
        
        // Show a success message or perform any other actions
      },
      (error: any) => {
        console.error('Error adding participant:', error);
        // Handle error scenarios
      }
    );
  }
}
