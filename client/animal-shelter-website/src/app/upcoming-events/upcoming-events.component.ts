import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsDialogComponent } from './event-details-dialog.component';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  template: `
    <full-calendar #calendar [options]="calendarOptions" [events]="eventsPromise | async"></full-calendar>
    
  `,
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
  // Get a reference to the FullCalendarComponent using @ViewChild
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  // Configure the calendar options
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
      
    },
    weekends: true,
    // Bind the handleDateClick method to the dateClick callback
    dateClick: this.handleDateClick.bind(this),
    // Customize the content of each event
    eventContent: (arg) => {
      return { html: `${arg.event.title}` };
    },
    // Bind the handleEventClick method to the eventClick callback
    eventClick: this.handleEventClick.bind(this),
    eventDidMount: (info) => {
      const eventElement = info.el;
      const eventBackgroundColor = info.event.extendedProps['backgroundColor'] || '#3788d8';
      const eventTextColor = info.event.textColor || 'white';
      
      eventElement.style.color = eventTextColor;
      eventElement.style.backgroundColor = eventBackgroundColor;
    },
  };

  // Define the events data as a promise
  eventsPromise: Promise<EventInput[]> = Promise.resolve([
    {
      title: 'Adoption Event',
      backgroundColor: 'green',
      start: '2024-04-07T17:00:00',
      end: '2024-04-07T18:00:00',
      description: 'This is an adoption event for dogs.'
    },
    {
      title: 'Event 2',
      start: '2024-04-09T17:00:00',
      end: '2023-04-09T18:00:00',
      description: 'This is an adoption event for dogs.'
    }
    ,{
      title: 'Adoption Event',
      start: '2024-04-11T17:00:00',
      end: '2024-04-11T18:00:00',
      description: 'This is an adoption event for dogs.',
      
    },
  ]);

  // Inject the MatDialog service in the constructor
  constructor(private dialog: MatDialog) { }

  // Handle the date click event
  handleDateClick(arg: { dateStr: string; }) {
    alert('Date clicked: ' + arg.dateStr);
  }

  // Handle the event click event
  handleEventClick(info: { event: any }) {
    // Create an object with the event data
    const eventData = {
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description
    };

    // Open the event details dialog and pass the event data
    this.dialog.open(EventDetailsDialogComponent, {
      data: eventData
    });
  }

}