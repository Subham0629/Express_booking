import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-fetch-participants',
  templateUrl: './fetch-participants.component.html',
  styleUrls: ['./fetch-participants.component.css']
})
export class FetchParticipantsComponent implements OnInit {
  participantsByEventId: Map<string, any[]> = new Map<string, any[]>();
  eventsWithParticipants: any[] = [];

  constructor(private movieservice: MovieService) {}

  ngOnInit(): void {
    this.fetchAllParticipants();
  }

  fetchAllParticipants(): void {
    // Fetch all participants
    this.movieservice.getAllParticipants().subscribe(
      (participants: any) => {
        console.log('Fetched all participants:', participants);

        // Group participants by event_id
        this.groupParticipantsByEventId(participants);

        // Fetch event details for each event_id in the participants
        this.fetchEventDetailsForParticipants();
      },
      (error: any) => {
        console.error('Error fetching participants:', error);
        // Handle error scenarios
      }
    );
  }

  groupParticipantsByEventId(participants: any[]): void {
    // Group participants by event_id using a Map
    for (const participant of participants) {
      const eventId = participant.event_id;
      if (this.participantsByEventId.has(eventId)) {
        // If the event_id already exists in the map, add the participant to the array
        this.participantsByEventId.get(eventId)?.push(participant);
      } else {
        // If the event_id doesn't exist in the map, create a new array with the participant
        this.participantsByEventId.set(eventId, [participant]);
      }
    }
  }

  fetchEventDetailsForParticipants(): void {
    // Fetch event details for each event_id in participants
    this.participantsByEventId.forEach((participants: any[], eventId: string) => {
      this.movieservice.getEvent(eventId).subscribe(
        (event: any) => {
          console.log(`Event details for Event ${eventId}:`, event);

          // Calculate the length of the user_id array for each event
          let userIds = participants.map((participant) => participant.user_id);
          event.participantsLength = userIds.length;

          // Update the event with participants
          event.participants = participants;

          // Add the event to the array
          this.eventsWithParticipants.push(event);
        },
        (error: any) => {
          console.error(`Error fetching event details for Event ${eventId}:`, error);
          // Handle error scenarios
        }
      );
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { MovieService } from '../movie.service';

// @Component({
//   selector: 'app-fetch-participants',
//   templateUrl: './fetch-participants.component.html',
//   styleUrls: ['./fetch-participants.component.css']
// })
// export class FetchParticipantsComponent implements OnInit {
//   participants: any[] = [];

//   constructor(private movieservice: MovieService) {}

//   ngOnInit(): void {
//     this.fetchAllParticipants();
//   }

//   fetchAllParticipants(): void {
//     this.movieservice.getAllParticipants().subscribe(
//       (participants: any) => {
//         console.log('Fetched all participants:', participants);
//         this.participants = participants;
//         this.fetchEventDetailsForParticipants();
//       },
//       (error: any) => {
//         console.error('Error fetching participants:', error);
//       }
//     );
//   }

//   fetchEventDetailsForParticipants(): void {
//     this.participants.forEach((participant: any) => {
//       this.movieservice.getEvent(participant.event_id).subscribe(
//         (event: any) => {
//           console.log(`Event details for participant ${participant._id}:`, event);
//           participant.eventDetails = event;
//         },
//         (error: any) => {
//           console.error(`Error fetching event details for participant ${participant._id}:`, error);
//         }
//       );
//     });
//   }
// }
