import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs',
  standalone: true,
  template: `
    <ul>
      <li *ngFor="let dog of dogs">
        {{ dog.name }} - {{ dog.breed }}
      </li>
    </ul>
  `,
  styleUrls: ['./dogs.component.css'],
  imports: [CommonModule],
})
export class DogsComponent implements OnInit {
  dogs: any[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe(
      (data) => {
        this.dogs = data;
      },
      (error) => {
        console.error('Error fetching dogs', error);
      }
    );
  }
}
