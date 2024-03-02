// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DogService } from './dogs/dog.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dog.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdotablePetsComponent } from './adotable-pets/adotable-pets.component';
import { FooterComponent } from './footer/footer.component';

import { AdoptablePetsComponent } from './adoptable-pets/adoptable-pets.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HttpClientModule, CommonModule, DogsComponent, RouterModule, NavBarComponent, AdotablePetsComponent, FooterComponent, AdoptablePetsComponent]
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
