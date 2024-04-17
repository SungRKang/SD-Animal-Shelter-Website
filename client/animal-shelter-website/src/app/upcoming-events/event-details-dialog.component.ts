import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-details-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="event-details-dialog">
      <h2>{{ data.title }}</h2>
      <img [src]="data.image" alt="Event Image" class="event-image" *ngIf="data.image">
      <p>Start: {{ data.start.toLocaleString() }}</p>
      <p>End: {{ data.end.toLocaleString() }}</p>
      <p>Description: {{ data.description || 'N/A' }}</p>
    </div>
  `,
  styles: [`
    .event-details-dialog {
      background-color: #ffffff;
      color: black;
      font-size: 16px;
      padding: 20px;
      width: 500px;
    }
    .event-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
  `]
})
export class EventDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}