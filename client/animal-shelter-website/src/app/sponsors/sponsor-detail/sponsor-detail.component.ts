import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Sponsor } from '../shared/sponsor.model';

@Component({
  selector: 'app-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: ['./sponsor-detail.component.css']
})
export class SponsorDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<SponsorDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sponsor
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
