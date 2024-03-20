import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../shared/sponsor.model'; // Adjust path as necessary
import { SponsorService } from '../shared/sponsor.service'; // Adjust path as necessary
import { MatDialog } from '@angular/material/dialog';
import { SponsorDetailComponent } from '../sponsor-detail/sponsor-detail.component'; // Adjust path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SponsorListComponent implements OnInit {
  sponsors: Sponsor[] = [];

  constructor(
    private sponsorService: SponsorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sponsors = this.sponsorService.getSponsors();
  }

  onSelect(sponsor: Sponsor): void {
    // Open the detail component as a modal dialog
    const dialogRef = this.dialog.open(SponsorDetailComponent, {
      width: '250px', // Set the width of the dialog
      data: sponsor // Pass the selected sponsor data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can do something with the result if needed
    });
  }
}
