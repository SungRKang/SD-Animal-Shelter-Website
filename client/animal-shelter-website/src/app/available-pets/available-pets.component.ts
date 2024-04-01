import { NgIf, CommonModule } from '@angular/common';
import { Attribute, Component, OnInit } from '@angular/core';
import { DogService } from '../dogs/dog.service';
import { IDog } from '../dogs/dog.interface';
import { Console } from 'node:console';
import { DogsComponent } from '../dogs/dog.component';

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
  genderArr: IDog[] = [];
  ageArr: IDog[] = [];
  displayArr: IDog[] = [];
  breedArr: IDog[] = [];
  anySexArr: IDog[] = [];
  sizeArr: IDog[] = [];
  lengthArr: IDog[] = [];
  genders : string[] = [];
  breeds: string[] = [];
  sizes: string[] = [];
  lengthOfStay: string [] = [];
  selectedDog = null;
  sexIsOpen: boolean = false;
  ageIsOpen: boolean = false; 
  breedIsOpen: boolean = false; 
  sizeIsOpen: boolean = false;
  lengthOfStayIsOpen: boolean = false;
  sortByIsopen: boolean = false;
  popUpisOpen: boolean = false; 
  anySex: boolean = true; 
  zero: boolean = false;
  five: boolean = false;
  anyAge: boolean = false;
  showBreeds: boolean = false;
  showGender: boolean = false;
  showSizes : boolean = false;
  showLengthOfStay: boolean = false;

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

  clearArrays(){
    this.genderArr = [];
    this.ageArr = [];
  }

  closeDropDowns(){
    this.ageIsOpen = false;
    this.sizeIsOpen = false;
    this.breedIsOpen = false;
    this.sizeIsOpen = false;
    this.sexIsOpen = false;
    
  }
  displayAll(){
    this.anySex = true;
    this.showGender = false;
    this.showBreeds = false;
    this.sexButtonName = "Any Sex";
    this.ageButtonName = "Any Age";
    this.breedButtonName = "Any Breed";
    this.sizeButtonName = "Any Size";
    this.lengthButtonName = "Any Length of Stay";
    this.closeDropDowns();
    this.clearArrays();
  
  }

  genderFilter(gender:string){
    this.genderArr = [];
    this.showGender = true;             //toggle html to display gendersArr
    this.anySex = false;                // dont show all the animals only the clicked gender
    this.sexIsOpen = false;             // after user click on their desired gender close the drop down
    this.sexButtonName = gender;        // if user click female/male display that in the button name
    const breed = this.breedButtonName;
    const size = this.sizeButtonName;
    const LOS = this.lengthButtonName;
    for(const obj in this.dogs){
      if(this.dogs[obj].gender == gender){
        this.genderArr.push(this.dogs[obj]);
      }
    }

    this.genderArr = this.checkAge(this.genderArr, gender, "gender");   // check if user selected age filter 
    if(breed != "Any Breed"){
      this.genderArr = this.checkBreed(this.genderArr, gender, "gender" );
    }
    if(size != "Any Size"){
      this.genderArr = this.checkSize(this.genderArr, gender, "gender" );
    }
    if(LOS != "Any Length of Stay"){
      this.genderArr = this.checkLOS(this.genderArr, gender, "gender" );
    }
    //this.checkAge(this.genderArr, gender, "gender");
    // if(this.ageArr.length != 0){
    //   console.log("ageArr length not 0",this.ageArr);
    //   this.genderArr = [];
    //   if(this.ageButtonName == "0-5"){
    //     for(const obj in this.ageArr){
    //       if(this.ageArr[obj].gender == gender && this.ageArr[obj].age < 5){
    //         this.genderArr.push(this.ageArr[obj]);
    //       }
    //     }
    //   }
    //   else if(this.ageButtonName == "5+"){
    //     for(const obj in this.ageArr){
    //       if(this.ageArr[obj].gender == gender && this.ageArr[obj].age > 5 ){
    //         this.genderArr.push(this.ageArr[obj]);
    //       }
    //     }
    //   }
    //   this.ageArr = [];
    // }

    // if(this.breedButtonName != "Any Breed"){
    //   const breed = this.breedButtonName;
    //   this.genderArr = [];
    //   for(const obj in this.dogs){
    //     if(this.dogs[obj].breed == breed && this.dogs[obj].gender == gender){
    //       this.genderArr.push(this.dogs[obj]);
    //     }
    //   }
    //   this.breedArr = [];
    //   this.ageArr = [];
    // }

    if(gender == "Any Sex"){
      this.genderArr = this.dogs;
    }
    
  }

  ageFilter(age: string){
    this.anySex = false;      // dont displayy all pets
    this.ageButtonName = age; // set the age button name to the selected age range
    this.ageIsOpen = false;   // close the age button after the user clicks it
    const gender = this.sexButtonName;
    const breed = this.breedButtonName;
    const size = this.sizeButtonName;
    const LOS = this.lengthButtonName;
    if(age == "0-5"){         // if user clicks the age rane 0-5
      this.ageArr = [];       // clear array of previous clicks
      this.zero = true;       // only display the "zero" section in html
      this.five = false;
      
      for(const obj in this.dogs){
        if(this.dogs[obj].age < 5){         
          this.ageArr.push(this.dogs[obj]); //append all the dogs that have age < 5
        }
        console.log(this.dogs[obj].age);
      }
      console.log("age 0", this.ageArr);

      // check gender array 
      if(this.sexButtonName != "Any Sex"){
        this.ageArr = this.checkGender(this.ageArr, gender, "gender");   // check if user selected age filter 
      }
      
      // if(this.sexButtonName != "Any Sex"){
      //   this.ageArr = [];
      //   const name = this.sexButtonName;
      //   console.log("SexbuttonName", name);
      //   console.log("genderArr",this.genderArr);

      //   for(const obj in this.dogs){
      //     if(this.dogs[obj].gender == name && this.dogs[obj].age < 5){
      //       console.log("obj",this.dogs[obj]);
      //       this.ageArr.push(this.dogs[obj]);
      //     }
      //   }
      // }

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
      this.five = true;
      this.zero = false;
      for(const obj in this.dogs){
        if(this.dogs[obj].age >= 5){
          this.ageArr.push(this.dogs[obj]);
        }
      }
      console.log("5+ clicked");

      //check if gender filters are clicked 
      if(this.sexButtonName != "Any Sex"){
        this.ageArr = this.checkGender(this.ageArr, gender, "gender");   // check if user selected age filter 
      }
      // if(this.genderArr.length != 0){
      //   this.ageArr = [];
      //   for(const obj in this.genderArr){
      //     if(this.genderArr[obj].age > 5){
      //       console.log("female 5+", this.genderArr[obj]);
      //       this.ageArr.push(this.genderArr[obj]);
      //     }
      //   }
      //   this.genderArr= [];
      // }

      if(this.sexButtonName != "Any Sex"){
        this.ageArr = [];
        const name = this.sexButtonName;
        console.log("SexbuttonName", name);
        console.log("genderArr",this.genderArr);

        for(const obj in this.dogs){
          if(this.dogs[obj].gender == name && this.dogs[obj].age > 5){
            this.ageArr.push(this.dogs[obj]);
          }
        }
      }

      //console.log("ageArr",this.ageArr);
      console.log("female was clicked");
    }
    else if(age == "Any Age"){
      this.ageArr = [];
      const name = this.sexButtonName;
      if(this.sexButtonName != "Any Sex"){
        for(const obj in this.dogs){
          if(this.dogs[obj].gender == name && this.dogs[obj].age > 5){
            this.ageArr.push(this.dogs[obj]);
          }
        }
      }      
    }
    
  }

  breedFilter(breed: string){
    this.breedArr = [];
    this.ageArr = [];
    this.genderArr = []; 
    this.anySexArr = [];
    this.showBreeds = true;
    this.breedIsOpen = false;
    this.anySex = false;
    this.breedButtonName = breed;
    for(const obj in this.dogs){
      if(this.dogs[obj].breed == breed){
        this.breedArr.push(this.dogs[obj]);
      }
    }

    // check the other array 
    if(this.sexButtonName != "Any Sex"){
      this.breedArr = [];
      const name = this.sexButtonName;
      
      for(const obj in this.dogs){
        if(this.dogs[obj].gender == name && this.dogs[obj].breed == breed){
          this.breedArr.push(this.dogs[obj]);
        }
        this.genderArr=[];
      }
    }
    if(this.ageButtonName != "Any Age"){
      const age = this.ageButtonName;
      // if 0-5 is selected 
      this.breedArr = [];
      // thorugh through array and get animals with breed and under 5
      if(age == "0-5"){
        for (const obj in this.dogs){
          if(this.dogs[obj].age < 5 && this.dogs[obj].breed == breed){
            this.breedArr.push(this.dogs[obj]);
          }
        }
        this.clearArrays();
      }
      // if 5+ selected, look through array and get animals with breed and age >5
      else if(age == "5+"){
        for (const obj in this.dogs){
          if(this.dogs[obj].age < 5 && this.dogs[obj].breed == breed){
            this.breedArr.push(this.dogs[obj]);
          }
        }
        this.clearArrays();
      }
    }

    if(this.sexButtonName != "Any Sex" && this.ageButtonName != "Any Age"){
      console.log("Gender and age not any");
      const gender = this.sexButtonName;
      const age = this.ageButtonName;
      this.breedArr = [];
      if(age == "0-5"){
        for (const obj in this.dogs){
          if(this.dogs[obj].age < 5 && this.dogs[obj].breed == breed && this.dogs[obj].gender == gender){
            this.breedArr.push(this.dogs[obj]);
          }
        }
        this.clearArrays();
      }
      // if 5+ selected, look through array and get animals with breed and age >5
      else if(age == "5+"){
        for (const obj in this.dogs){
          if(this.dogs[obj].age > 5 && this.dogs[obj].breed == breed && this.dogs[obj].gender == gender){
            this.breedArr.push(this.dogs[obj]);
          }
        }
        this.clearArrays();
      }
    }
    console.log("breed clicked", breed);
    console.log("breedArr", this.breedArr);
  }

  sizeFilter(size: string) {
    this.anySex = false;
    this.showSizes = true;
    this.sizeIsOpen = false;
    this.sizeArr = [];
    this.sizeButtonName = size;
    for(const dog in this.dogs){
      if(this.dogs[dog].size == size){
        this.sizeArr.push(this.dogs[dog]);
      }
    }
    if(size == "Any Size"){
      this.sizeArr = this.dogs;
      this.sizeButtonName = "Any Size";
    }

    this.clearArrays();
  }

  lengthOfStayFilter(length: string){
    this.lengthOfStayIsOpen = false;
    this.lengthButtonName = length;
    this.lengthArr = [];
    this.anySex = false;
    this.showLengthOfStay = true;
    this.sizeArr = [];
    const date = Date.now();     // todays date in milliseconds
    for(const dog in this.dogs){
      // calculate how many months there are from shelters date to today
      const dobMilliseconds = new Date(this.dogs[dog].shelterDate).getTime(); // shelter time in milliseconds
      const differenceInMilliseconds = Math.abs(date - dobMilliseconds);
      const millisecondsInAMonth = 1000 * 60 * 60 * 24 * 30.4375; // Average milliseconds in a month
      const differenceInMonths = Math.floor(differenceInMilliseconds / millisecondsInAMonth); // returns the number of months from today to shelter date

      if(length == "0-6" && differenceInMonths < 6){
        this.lengthArr.push(this.dogs[dog]);
      }
      else if (length == "6-12" && differenceInMonths < 12 &&  differenceInMonths > 6){
        this.lengthArr.push(this.dogs[dog]);
      }
      else if (length == "1+" && differenceInMonths > 12){
        this.lengthArr.push(this.dogs[dog]);
      }
      else if(length == "Any Length of Stay"){
        this.lengthArr = this.dogs;
      }
      
    }
    this.clearArrays();
  }

  checkGender(array: IDog[], compareString: string, attribute: DogAttribute) : IDog[]{
    if(this.genderArr.length!=0){
      console.log("genderArr", this.genderArr);
      console.log("ageArr", this.ageArr);
      array = [];
      for(const obj of this.ageArr){
        if(obj[attribute] == compareString){
          array.push(obj);
          console.log("obj", obj);
        }
      }
      this.genderArr = [];
    }
    return array;
  }
  
  checkAge(array: IDog[], compareString: string, attribute: DogAttribute) : IDog[]{
    if(this.ageArr.length!=0){
      array = [];
      if(this.ageButtonName == "0-5"){
        for(const obj of this.ageArr){
          if(obj[attribute] == compareString && obj.age < 5){
            array.push(obj);
            
          }
        }
      }
      else if(this.ageButtonName == "5+"){
        console.log("5+", array);
        for(const obj of this.ageArr){
          if(obj[attribute] == compareString && obj.age > 5 ){
            array.push(obj);
          }
        }
      }
      this.ageArr = [];
      console.log("Array", array);
    }
    return array;
  }
  checkBreed(array: IDog[], compareString: string, attribute: DogAttribute) : IDog[]{
    if(this.breedArr.length!=0){
      array = [];
      for(const obj of this.breedArr){
        if(obj[attribute] == compareString){
          array.push(obj);
        }
      }
      this.breedArr = [];
    }
    return array;
  }
  checkSize(array: IDog[], compareString: string, attribute: DogAttribute) : IDog[]{
    if(this.sizeArr.length!=0){
      array = [];
      for (const obj of this.sizeArr){
        if(obj[attribute] == compareString){
          array.push(obj);
        }
      }
      this.sizeArr = [];
    }
    return array;
  }
  checkLOS(array: IDog[], compareString: string, attribute: DogAttribute) : IDog[]{
    if(this.lengthArr.length!=0){
      array = [];
      for (const obj of this.lengthArr){
        if(obj[attribute] == compareString){
          array.push(obj);
        }
      }
      this.lengthArr = [];
    }
    return array;
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
