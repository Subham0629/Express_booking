import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  title: string = '';
  image: string = '';
  city: string = '';
  price: number = 0;
  date: string = '';

  constructor(private movieservice: MovieService, private router: Router) {}

  onSubmit(): void {
    // Create an object with event details
    const eventData = {
      title: this.title,
      image: this.image,
      city: this.city,
      price: this.price,
      date: this.date
    };

    // Call the eventService to add the event
    this.movieservice.addEvent(eventData).subscribe(
      (response: any) => {
        console.log('Event added successfully:', response);
        // Redirect to Admin Dashboard after adding the event
        this.router.navigate(['/admindashboard']);
      },
      (error: any) => {
        console.error('Error adding event:', error);
        // Handle error scenarios
      }
    );
  }
}
