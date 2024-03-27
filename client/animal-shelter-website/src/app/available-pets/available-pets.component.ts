import { NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogService } from '../dogs/dog.service';
import { IDog } from '../dogs/dog.interface';
import { Console } from 'node:console';


@Component({
  selector: 'app-available-pets',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './available-pets.component.html',
  styleUrl: './available-pets.component.css'
})
export class AvailablePetsComponent implements OnInit{
  dogs: IDog[] = [];
  genderArr: IDog[] = [];
  ageArr: IDog[] = [];
  displayArr: IDog[] = [];
  breedArr: IDog[] = [];
  genders : string[] = [];
  breeds: string[] = [];
  sizes: string[] = [];
  selectedDog = null;
  sexIsOpen: boolean = false;
  ageIsOpen: boolean = false; 
  breedIsOpen: boolean = false; 
  sizeIsOpen: boolean = false;
  lengthOfStayIsOpen: boolean = false;
  sortByIsopen: boolean = false;
  popUpisOpen: boolean = false; 
  anySex: boolean = false; 
  zero: boolean = false;
  five: boolean = false;
  showBreeds: boolean = false;
  showGender: boolean = false;

  name: string = "";
  gender: string = "";
  color: string = "";
  breed: string = "";
  age: number = 0;
  DOB: Date = new Date;
  weight: number = 0;
  fee: number = 0;
  description: string = "";
  index: number = 0;
  formattedDOB: any;  
  sexButtonName = "Any Sex";
  ageButtonName = "Any Age";
  breedButtonName = "Any Breed";

  imageArray: string[] = [
    // DEENO
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69276527/2/?bust=1697152512&width=1080",
    // DANTE
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

  

  getGenders() : string[]{
    for (const dog in this.dogs){
      if(!this.genders.includes(this.dogs[dog].gender)){
        this.genders.push(this.dogs[dog].gender);
      }
    }
    return this.genders;
  }

  getBreeds() : string[]{
    for (const dog in this.dogs){
      if(!this.breeds.includes(this.dogs[dog].breed)){
        this.breeds.push(this.dogs[dog].breed);
      }
    }
    return this.breeds;
  }
    
  

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

  displayAll(){
    this.anySex = true;
    this.showGender = false;
    this.showBreeds = false;
    this.sexButtonName = "Any Sex";
    this.ageButtonName = "Any Age";
    this.breedButtonName = "Any Breed";
    this.ageIsOpen = false;
    this.sizeIsOpen = false;
    this.breedIsOpen = false;
    this.sizeIsOpen = false;
    this.sexIsOpen = false;
    this.genderArr = [];
    this.ageArr = [];

  }

  genderFilter(gender:string){
    this.genderArr = [];
    this.showGender = true; //toggle html to display gendersArr
    this.anySex = false;                // dont show all the animals only the clicked gender
    this.sexIsOpen = false;             // after user click on their desired gender close the drop down
    this.sexButtonName = gender;        // if user click female/male display that in the button name

    for(const obj in this.dogs){
      if(this.dogs[obj].gender == gender){
        this.genderArr.push(this.dogs[obj]);
      }
    }
    console.log("gender clicked", gender);
    console.log("genderArr", this.genderArr);
  }

  ageFilter(age: string){
    this.anySex = false;      // dont displayy all pets
    this.ageButtonName = age; // set the age button name to the selected age range
    this.ageIsOpen = false;   // close the age button after the user clicks it
    if(age == "0-5"){         // if user clicks the age rane 0-5
      this.ageArr = [];       // clear array of previous clicks
      this.zero = true; 
      this.five = false;
      
      for(const obj in this.dogs){
        if(this.dogs[obj].age < 5){
          this.ageArr.push(this.dogs[obj]);
        }
        console.log(this.dogs[obj].age);
      }
      console.log("age 0", this.ageArr);

      //check if other filters are clicked 
      if(this.genderArr.length != 0){
        this.ageArr = [];
        for(const obj in this.genderArr){
          if(this.genderArr[obj].age < 5){
            console.log("female 0-5", this.genderArr[obj]);
            this.ageArr.push(this.genderArr[obj]);
          }
        }
        this.genderArr = [];
      }
      console.log("zero was clicked");
    }
    else if(age == "5+"){
      this.ageArr = [];
      this.five = !this.five;
      this.zero = false;
      for(const obj in this.dogs){
        if(this.dogs[obj].age >= 5){
          this.ageArr.push(this.dogs[obj]);
        }
      }
      //console.log("age 5", this.ageArr);

      //check if other filters are clicked 
      // if gender is not empty
      if(this.genderArr.length != 0){
        this.ageArr = [];
        for(const obj in this.genderArr){
          if(this.genderArr[obj].age > 5){
            console.log("female 5+", this.genderArr[obj]);
            if(!this.genderArr.includes(this.genderArr[obj])){
              this.ageArr.push(this.genderArr[obj]);
            }
          }
        }
      }
      //console.log("ageArr",this.ageArr);
      console.log("female was clicked");
    }
  }

  breedFilter(breed: string){
    this.breedArr = [];
    this.showBreeds = !this.showBreeds;
    this.breedIsOpen = false;
    this.breedButtonName = breed;
    for(const obj in this.dogs){
      if(this.dogs[obj].breed == breed){
        this.breedArr.push(this.dogs[obj]);
      }

    }
    console.log("breed clicked", breed);
    console.log("breedArr", this.breedArr);
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
    this.description = dogObject.description;
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
