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
  public calendarList: string[] = [];
  public events: any[] = [];

  constructor(private calendarService: GoogleCalendarService) {}

  ngOnInit() {
    this.calendarService.loadGoogleClient().then(() => {
      this.calendarService.listCalendars().then((calendars) => {
        this.calendarList = calendars;
        this.loadEvents(this.calendarList[0]); // Load events for the first calendar
      });
    }).catch((error) => {
      console.error('Error loading Google API client:', error);
    });
  }

  public loadEvents(calendarId: string) {
    this.calendarService.listEvents(calendarId).then((events) => {
      this.events = events;
    });
  }
}