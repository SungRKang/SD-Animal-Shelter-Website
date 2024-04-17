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
      title: 'Fundraiser Event',
      start: '2023-01-20T14:00:00',
      end: '2023-01-20T16:00:00',
      description: 'This is an adoption event for dogs.',
      image: 'assets/images/fund.jpg'
    },
    {
      title: 'Adoption Event',
      start: '2024-04-07T17:00:00',
      end: '2024-04-07T18:00:00',
      description: 'This is an adoption event for dogs.',
      image: 'assets/images/1.jpg'
    },
  
    
    
    {
      title: 'Donation Event',
      start: '2024-04-14T13:00:00',
      end: '2024-04-14T16:00:00',
      description: 'This is an event to collect money for the shelter.',
      image: 'assets/images/2.jpg'
    },
    {
      title: 'Volunteer Orientation',
      start: '2024-04-20T10:00:00',
      end: '2024-04-20T12:00:00',
      description: 'Orientation for new volunteers at the shelter.',
      image: 'assets/images/logo.jpg'
    },
    {
      title: 'Pet Adoption Fair',
      start: '2024-04-27T12:00:00',
      end: '2024-04-27T18:00:00',
      description: 'Annual pet adoption fair with discounts and special promotions.',
      image: 'assets/images/1.jpg'
    },
    {
      title: 'Fundraising Gala',
      start: '2024-05-05T19:00:00',
      end: '2024-05-05T23:00:00',
      description: 'Formal gala event to raise funds for the shelter.',
      image: 'assets/images/10.jpg'
    },
    {
      title: 'Holiday Fundraiser',
      start: '2024-05-03T19:00:00',
      end: '2024-05-03T23:00:00',
      description: 'Holiday Fundraiser with religious ink Tatoo.',
      image: 'assets/images/fundraiser.jpg'
    },
    {
      title: 'Pet Grooming Day',
      start: '2024-05-12T09:00:00',
      end: '2024-05-12T17:00:00',
      description: 'Special event for pet grooming and care services.',
      image: 'assets/images/3.jpg'
    },
    {
      title: 'Pet Memorial Service',
      start: '2024-05-20T16:00:00',
      end: '2024-05-20T18:00:00',
      description: 'Service to honor and remember beloved pets.',
      image: 'assets/images/4.jpg'
    },
    {
      title: 'Summer Camp Registration',
      start: '2024-06-01T09:00:00',
      end: '2024-06-01T17:00:00',
      description: 'Registration for the summer camp program for kids.',
      image: 'assets/images/5.jpg'
    },
    {
      title: 'Pet Spa Day',
      start: '2024-06-10T10:00:00',
      end: '2024-06-10T18:00:00',
      description: 'Pamper your pets with grooming and spa treatments.',
      image: 'assets/images/spa.jpg'
    },
    {
      title: 'Outdoor Movie Night',
      start: '2024-06-20T19:00:00',
      end: '2024-06-20T22:00:00',
      description: 'Enjoy a pet-themed movie under the stars.',
      image: 'assets/images/logo.jpg'
    },
    {
      title: 'Summer Adoption Extravaganza',
      start: '2024-06-28T12:00:00',
      end: '2024-06-28T18:00:00',
      description: 'Special adoption event with discounts and giveaways.',
      image: 'assets/images/7.jpg'
    }
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
      description: info.event.extendedProps.description,
      image: info.event.extendedProps.image // Include the image property
    };

    // Open the event details dialog and pass the event data
    this.dialog.open(EventDetailsDialogComponent, { data: eventData });
  }
}