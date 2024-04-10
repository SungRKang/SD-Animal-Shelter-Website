import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-details-dialog',
  template: `
    <div class="event-details-dialog" >
      <h2>{{ data.title }}</h2>
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
`]
})
export class EventDetailsDialogComponent {
  // Inject the dialog data using the MAT_DIALOG_DATA injection token
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}