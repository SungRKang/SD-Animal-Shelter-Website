import { NgIf } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  // default closed header
  isAdoptablePetsOpen: boolean = false; 
  //sEventsOpen: boolean = false;

  toggleHeader(): void{
    this.isAdoptablePetsOpen = !this.isAdoptablePetsOpen;
  
    
  }

  // toggleEvents(): void {
  //   this.isEventsOpen = !this.isEventsOpen;
  // }

  

}
