// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DogService } from './dogs/dog.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, DogsComponent],
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
