// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DogService } from './dogs/dog.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dog.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, DogsComponent, RouterModule, NavBarComponent],
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent]
})

export class AppComponent implements OnInit {
  dogs: any[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
  }
}
