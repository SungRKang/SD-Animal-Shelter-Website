import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-adoptions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recent-adoptions.component.html',
  styleUrl: './recent-adoptions.component.css'
})
export class RecentAdoptionsComponent {
  dogNames: string[] = [
    "Bailey",
    "Sarabi",
    "Bella",
    "Lucy",
    "Tyson",
    "Gunther"
  ];

  dogImages: string[] = [
    "http://www.nohoundunhomed.org/wp-content/uploads/2023/08/bailey.jpg",
    "http://www.nohoundunhomed.org/wp-content/uploads/2023/08/Sarabi.jpg",
    "http://www.nohoundunhomed.org/wp-content/uploads/2023/08/bella.jpg",
    "http://www.nohoundunhomed.org/wp-content/uploads/2023/08/Lucy-1.jpg",
    "http://www.nohoundunhomed.org/wp-content/uploads/2023/08/tyson-1.jpg",
    "http://www.nohoundunhomed.org/wp-content/uploads/2023/08/gunther-3.jpg"
  ];


}
