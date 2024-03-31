import { Component, OnInit } from '@angular/core';
import { GoogleCalendarService } from './google-calendar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  public events: any[] = []; // Consider typing this with an Event interface

  constructor(private calendarService: GoogleCalendarService) {}

  ngOnInit() {
    this.calendarService.loadGoogleClient().then(() => {
      const calendarId = 'l0dfri6kmna1ukkbin6d0sjitr45sccr@import.calendar.google.com';
      this.loadEvents(calendarId);
    }).catch((error) => {
      console.error('Error loading Google API client:', error);
    });
  }

  public loadEvents(calendarId: string) {
    // Subscribe to the Observable returned by listEvents
    this.calendarService.listEvents(calendarId).subscribe({
      next: (events) => {
        this.events = events;
      },
      error: (error) => {
        console.error('Error loading events:', error);
      }
    });
  }
}
