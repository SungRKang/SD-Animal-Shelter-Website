import { Component } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { RouteReuseStrategy, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    YouTubePlayerModule,
    RouterOutlet, 
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}