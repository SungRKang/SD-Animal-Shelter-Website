import { NgIf, CommonModule } from '@angular/common';
import { Attribute, Component, OnInit } from '@angular/core';
import { DogService } from '../dogs/dog.service';
import { IDog } from '../dogs/dog.interface';
import { Console } from 'node:console';
import { DogsComponent } from '../dogs/dog.component';
import e from 'express';

type DogAttribute = keyof IDog;

@Component({
  selector: 'app-available-pets',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './available-pets.component.html',
  styleUrl: './available-pets.component.css'
})
export class AvailablePetsComponent implements OnInit{
  
  dogs: IDog[] = [];
  displayArr: IDog[] = [];
  genders : string[] = [];
  breeds: string[] = [];
  sizes: string[] = [];
  testArr: IDog[] = [];
  sexIsOpen: boolean = false;
  ageIsOpen: boolean = false; 
  breedIsOpen: boolean = false; 
  sizeIsOpen: boolean = false;
  lengthOfStayIsOpen: boolean = false;
  sortByIsopen: boolean = false;
  popUpisOpen: boolean = false; 
  
  anySex: boolean = false;
  anyAge: boolean = false;
  anyBreed: boolean = false;
  anySize: boolean = false;
  anyLength: boolean = false;
  allAges : boolean = false;

  showAge: boolean = false;
  showBreeds: boolean = false;
  showGender: boolean = false;
  showSizes : boolean = false;
  showLengthOfStay: boolean = false;
  showSort : boolean = false;
  showAll: boolean = true; 

  name: string = "";
  gender: string = "";
  color: string = "";
  breed: string = "";
  size: string = "";
  age: number = 0;
  DOB: Date = new Date;
  today: Date = new Date;
  weight: number = 0;
  fee: number = 0;
  description: string = "";
  index: number = 0;
  formattedDOB: any;  

  sexButtonName = "Any Sex";
  ageButtonName = "Any Age";
  breedButtonName = "Any Breed";
  sizeButtonName = "Any Size";
  lengthButtonName = "Any Length of Stay";
  sortByButtonName = "Sort By";

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

  getSize() : string[]{
    // Small: 0-25 pounds
    // Medium: 25 - 50 pounds
    // Large: 50+ 
    for (const dog in this.dogs){
      if(!this.sizes.includes(this.dogs[dog].size)){
        this.sizes.push(this.dogs[dog].size);
      }
    }
    this.sizes.sort();        // sort the array so it shows up as large,medium,small
    this.sizes.reverse();     // reverse it so it shows up as small, medium, large
    return this.sizes;
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


  genderFilter(gender:string){
    this.sexIsOpen = false;

    this.showGender = true;            // only show gender
    this.showAge = false;
    this.showBreeds = false;
    this.showSizes = false; 
    this.showLengthOfStay = false;
    this.showAll = false;                // dont show all the animals only the clicked gender
    this.sexIsOpen = false;             // after user click on their desired gender close the drop down
    this.showSort = false;

    this.sexButtonName = gender;        // if user click female/male display that in the button name
    
    this.displayArr = this.checkAny();

  }

  ageFilter(age: string){
    this.showAge = true;
    this.showGender = false;
    this.showBreeds = false;
    this.showSizes = false; 
    this.showLengthOfStay = false;
    this.showAll = false;      // dont displayy all pets
    this.showSort = false;
    
    this.ageIsOpen = false;   // close the age button after the user clicks it
    this.ageButtonName = age;
    
    this.displayArr = this.checkAny();
  }

  breedFilter(breed: string){
    this.showGender = false;            // only show gender
    this.showAge = false;
    this.showBreeds = true;
    this.showSizes = false; 
    this.showLengthOfStay = false;
    this.showAll = false; 
    this.showSort = false;
    
    this.breedIsOpen = false;
    this.breedButtonName = breed;
    
    this.displayArr = this.checkAny();
  }

  sizeFilter(size: string) {
    this.showGender = false;            
    this.showAge = false;
    this.showBreeds = false;
    this.showSizes = true; 
    this.showLengthOfStay = false;
    this.showAll = false; 
    this.showSort = false;

    this.sizeIsOpen = false;
    this.sizeButtonName = size;
    
    this.displayArr = this.checkAny();
  }

  lengthOfStayFilter(length: string){
    this.lengthOfStayIsOpen = false;
    this.lengthButtonName = length;
    
    this.showGender = false;            
    this.showAge = false;
    this.showBreeds = false;
    this.showSizes = false; 
    this.showLengthOfStay = true;
    this.showAll = false; 
    this.showSort = false;

    this.displayArr = this.checkAny();
  }

  sortByFilter(sort: string){
    this.sortByIsopen = false;
    this.sortByButtonName = sort;
    
    this.showGender = false;            
    this.showAge = false;
    this.showBreeds = false;
    this.showSizes = false; 
    this.showLengthOfStay = false;
    this.showSort = true;
    this.showAll = false; 

    this.displayArr = this.checkAny();
  }

  checkAny(): IDog[]{
    this.displayArr = [];
    const falseVariables: DogAttribute[] = [];
    const buttonName: string[] =[];
    // ANY SEX
    if(this.sexButtonName == "Any Sex"){
      this.anySex = true;
    }
    else{
      falseVariables.push("gender");
      buttonName.push(this.sexButtonName);
    }
    // ANY AGE
    if(this.ageButtonName == "Any Age"){
      this.anyAge = true;
    }
    else{
      falseVariables.push("age");
      buttonName.push(this.ageButtonName);
    }
    // ANY BREED
    if(this.breedButtonName == "Any Breed"){
      this.anyBreed = true;
    }
    else{
      falseVariables.push("breed");
      buttonName.push(this.breedButtonName);
    }
    //ANY BREED
    if(this.sizeButtonName == "Any Size"){
      this.anySize = true;
    }
    else{
      falseVariables.push("size");
      buttonName.push(this.sizeButtonName);
    }
    // ANY LENGTH OF STAY
    if(this.lengthButtonName == "Any Length of Stay"){
      this.anyLength = true;
    }
    else{
      falseVariables.push("shelterDate");
      buttonName.push(this.lengthButtonName);
    }

    for (const dog of this.dogs) {
      let matchesAllAttributes = true; // Flag to track if all attributes match for the current dog
      for (let i = 0; i < falseVariables.length; i++) {
          const attribute = falseVariables[i];
          const button = buttonName[i];

          if (attribute == "shelterDate") {
            const date = Date.now();
            const dobMilliseconds = new Date(dog.shelterDate).getTime();
            const differenceInMilliseconds = Math.abs(date - dobMilliseconds);
            const millisecondsInAMonth = 1000 * 60 * 60 * 24 * 30.4375; // Average milliseconds in a month
            const differenceInMonths = Math.floor(differenceInMilliseconds / millisecondsInAMonth); // returns the number of months from today to shelter date
            // Check the length of stay category
            if (button == "0-6" && !(differenceInMonths <= 6)) {
                // Check if the difference is less than or equal to 6 months
                matchesAllAttributes = false;
                break;
            } else if (button == "6-12" && !(differenceInMonths <= 12 &&  differenceInMonths > 6)) {
                // Check if the difference is between 6 and 12 months
                matchesAllAttributes = false;
                break;
            } else if (button == "1+" && !(differenceInMonths > 12)) {
                // Check if the difference is greater than 12 months
                    matchesAllAttributes = false;
                    break;
            }
          }
        
          else if (attribute == "age") {
            const [minAge, maxAge] = button.split("-").map(s => parseInt(s.trim()));
        
            if (maxAge === undefined || isNaN(maxAge)) {
                // Handle "5+" case
                if (dog.age < minAge) {
                    matchesAllAttributes = false;
                    break;
                }
            } else {
                // Handle age range case
                if (dog.age < minAge || dog.age > maxAge) {
                    matchesAllAttributes = false;
                    break;
                }
            }
        } 
        else {
            // Regular attribute comparison
            if (dog[attribute] !== button) {
                matchesAllAttributes = false;
                break;
            }
        }
      }
  
      // If all attributes match, push the dog into the array of dogs with matching attributes
      if (matchesAllAttributes) {
          this.displayArr.push(dog);   
      }

      if(this.sortByButtonName == "Size (ascending)"){
        this.displayArr.sort((a,b) => a.weight - b.weight);
      }
      if(this.sortByButtonName == "Age (ascending)"){
        this.displayArr.sort((a,b) => a.age - b.age);
      }
      if (this.sortByButtonName == "Length of Stay (ascending)") {
        this.displayArr.sort((a, b) => {
          const dateA = new Date(a.shelterDate).getTime();
          const dateB = new Date(b.shelterDate).getTime();
          return dateA - dateB;
        });
      }
    
    }
    return this.displayArr;
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