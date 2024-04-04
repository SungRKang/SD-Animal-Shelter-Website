import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-other-rescues',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './other-rescues.component.html',
  styleUrl: './other-rescues.component.css'
})
export class OtherRescuesComponent {
  showPopUp: boolean = false;
  imageString: string = "";
  rescueName : string = "";
  cell: string = "";
  site: string = "";

  imageArray: string[] = [
    "https://fromforgottentoforever.com/wp-content/uploads/2017/01/Logo.png",
    "https://chihuahua-smalldogrescue.org/wp-content/uploads/2017/06/banner-logo-2.jpg",
    "https://pbs.twimg.com/media/Ec7quOgXgAIUPfM?format=jpg&name=large",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxW_z_NMDxHdwIRwazwjBKj60EPh_B5ojGeNWuHP28Kg&s",
    "https://haveanicedog.org/assets/img/abrt-logo2.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVy5PAOoGvc-jLakvOU4J6xvk37lc4jOD0zEqSUoUTTA&s",
    "https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/gy9es6t4f0y1ilyqvkav.jpg",
    "https://www.lifelinepuppy.org/assets/images/logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPZfXE7GzmyFS0CCHNH9wsnGBbjxi_zqPFf8KLpvDEQ&s"
  ];

  rescueNames: string[] = [
    "From Forgotten to Forever",
    "Chihuahua and Small Dog Rescue",
    "Teller County Regional Animal Shelter",
    "Human Society Pikes Peak Region",
    "All Breed Rescure and Training",
    "Lucky Day Animal Rescue Colorado",
    "Maxfund Animal Adoption Center",
    "Lifeline Puppy Center",
    "PAWS for Life - Animal Welfare and Protection Security"
  ];

  phoneNumber: string[] = [
    "no phone",
    "no phone",
    "(719) 686-7707",
    "(719) 473-1741",
    "(719) 264-6460",
    "No phone",
    "303-595-4917, 720-266-6081, 720-726-4552, 303-595-0532",
    "(303)655-9696",
    "(719)543-6464"
  ];

  emails: string[] = [
    "https://www.fromforgottentoforever.com/contact-us/",
    "N/A",
    "(719) 686-7707",
    "(719) 473-1741",
    "(719) 264-6460",
    "No phone",
    "303-595-4917, 720-266-6081, 720-726-4552, 303-595-0532",
    "(303)655-9696",
    "(719)543-6464"
  ];

  locations: string[] = [
    "Colorado Springs, CO",
    "Colorado Springs, CO",
    "(719) 686-7707",
    "(719) 473-1741",
    "(719) 264-6460",
    "No phone",
    "303-595-4917, 720-266-6081, 720-726-4552, 303-595-0532",
    "(303)655-9696",
    "(719)543-6464"
  ];

  website: string[] = [
    "https://www.fromforgottentoforever.com/",
    "https://chihuahua-smalldogrescue.org/",
    "https://www.tcrascolorado.org/",
    "https://www.hsppr.org/",
    "https://haveanicedog.org/" ,
    "https://luckydayrescue.org/",
    "https://maxfund.org/",
    "https://www.lifelinepuppy.org/",
    "https://pawspueblo.org/"
  ];


  displayPopUp(image: number) : string{
    this.showPopUp = !this.showPopUp;
    this.imageString = this.imageArray[image];
    return this.imageString;
  }
  getName(rescueIndex : number): string{
    this.rescueName = this.rescueNames[rescueIndex];
    this.cell = this.phoneNumber[rescueIndex];
    this.site = this.website[rescueIndex];
    return this.rescueName, this.cell, this.site;
    
  }

  closePopUp(){
    this.showPopUp = false;
  }

}

