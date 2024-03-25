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

  name: string = "";
  gender: string = "";
  color: string = "";
  breed: string = "";
  age: number = 0;
  DOB: Date = new Date;
  weight: number = 0;
  fee: number = 0;
  index: number = 0;
  formattedDOB: any;
  

  imageArray: string[] = [
    // Tobi
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    // Bella
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65740785/2/?bust=1691099325&width=1080",
    // Maggie
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59873415/4/?bust=1684520867&width=1080",
    // Charlie 
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59873406/5/?bust=1684970171&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59459657/1/?bust=1673714780&width=1080",
    //
    "https://www.guidestar.org/ViewEdoc.aspx?eDocId=9683519&approved=True",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69093047/2/?bust=1696028581&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70020912/3/?bust=1702488135&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69422073/4/?bust=1698163495&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70793978/4/?bust=1708471764&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70793964/2/?bust=1708471494&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69695144/2/?bust=1700091725&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66607203/2/?bust=1692830572&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69243045/2/?bust=1696968936&width=1080",
    //
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56396516/2/?bust=1685746579&width=1080"
  ];
dogId: any;
  
    

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

  openPopUp(dogObject: IDog):void{
    this.popUpisOpen = !this.popUpisOpen;
    this.name = dogObject.name;
    this.gender = dogObject.gender;
    this.color = dogObject.color;
    this.breed = dogObject.breed;
    this.age = dogObject.age;
    this.weight = dogObject.weight;
    this.DOB = dogObject.DOB;
    this.fee = dogObject.fee;
    this.index = dogObject.dogId-1;
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

 


}
