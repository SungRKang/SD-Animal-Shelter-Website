import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  template: `
    <full-calendar #calendar [options]="calendarOptions" [events]="eventsPromise | async"></full-calendar>
    <button (click)="toggleWeekends()">Toggle Weekends</button>
  `,
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    weekends: true,
    dateClick: this.handleDateClick.bind(this),
    eventContent: (arg) => {
      return { html: `<b>${arg.event.title}</b>` };
    }
  };

  eventsPromise: Promise<EventInput[]> = Promise.resolve([
    { title: 'Adoption Event', date: '2024-04-07' },
    { title: 'Feeding pets', date: '2024-04-09' }
  ]);

  handleDateClick(arg: { dateStr: string; }) {
    alert('Date clicked: ' + arg.dateStr);
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  someMethod() {
    if (this.calendarComponent) {
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.next();
    }
  }
}