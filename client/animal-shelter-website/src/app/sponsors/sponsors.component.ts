import { Component } from '@angular/core';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';


@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [SponsorListComponent],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css',
})
export class SponsorsComponent {

}
