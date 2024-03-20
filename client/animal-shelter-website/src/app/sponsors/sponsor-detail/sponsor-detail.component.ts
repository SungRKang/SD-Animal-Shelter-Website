import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: ['./sponsor-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SponsorDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<SponsorDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Ensure 'any' is replaced with a type that represents your sponsor data structure
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
