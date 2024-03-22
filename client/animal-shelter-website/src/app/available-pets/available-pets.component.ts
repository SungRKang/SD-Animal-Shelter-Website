import { NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogService } from '../dogs/dog.service';
import { IDog } from '../dogs/dog.interface';

@Component({
  selector: 'app-available-pets',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './available-pets.component.html',
  styleUrl: './available-pets.component.css'
})
export class AvailablePetsComponent implements OnInit{
  dogs: IDog[] = [];
  fileteredDogs = [];
  selectedDog = null;
  sexIsOpen: boolean = false;
  ageIsOpen: boolean = false; 
  breedIsOpen: boolean = false; 
  sizeIsOpen: boolean = false;
  lengthOfStayIsOpen: boolean = false;
  sortByIsopen: boolean = false;
  popUpisOpen: boolean = false; 
  imageArray: string[] = [
    // DEENO
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    // DUKE
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64929985/1/?bust=1686414216&width=1080",
    // TWIX
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59873415/4/?bust=1684520867&width=1080",
    // SWIX 
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59873406/5/?bust=1684970171&width=1080",
    // 
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080"
  ];
  
    

  toggleFilter(filterTitle: string) : void{
    if(filterTitle == "sexIsOpen"){
      this.sexIsOpen = !this.sexIsOpen;
    }
    else if (filterTitle == "ageIsOpen"){
      this.ageIsOpen = !this.ageIsOpen;
    }
    else if (filterTitle == "breedIsOpen"){
      this.breedIsOpen = !this.breedIsOpen;
    }
    else if (filterTitle == "sizeIsOpen"){
      this.sizeIsOpen = !this.sizeIsOpen;
    }
    else if(filterTitle == "lengthOfStayIsOpen"){
      this.lengthOfStayIsOpen = !this.lengthOfStayIsOpen;
    }
    else if (filterTitle == "sortByIsopen"){
      this.sortByIsopen = !this.sortByIsopen;
    }
    
  }

  openPopUp():void{
    this.popUpisOpen = !this.popUpisOpen;
  }
  closePopUp():void{
    this.popUpisOpen = false;
  }

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe({
      next: (data) => {
        this.dogs = data;
        // this.appl  yFilters();
      },
      error: (error) => {
        console.error('Error fetching dogs', error);
      }
    });
  }

  /*selectDog(dog): void {
    this.selectedDog = dog;
    this.openPopUp();
  }*/


}
