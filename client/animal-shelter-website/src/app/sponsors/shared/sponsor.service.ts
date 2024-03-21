import { Injectable } from '@angular/core'
import { Sponsor } from './sponsor.model'

@Injectable({
  providedIn: 'root'
})

export class SponsorService {
  private sponsors: Sponsor[] = [
    {
      id: 1, 
      name: 'Village Center Veterinary Care',
      logo: 'assets/logos/VCVC.png',
      description: 'Our Veterinarian Dr. Anne Pierce who gives us amazing service at a discount because of her love of animals. If you are looking for a great vet then please go see her and help support our cause!'
    },
    {
      id: 2, 
      name: 'Camp Bow Wow',
      logo: 'assets/logos/CBW.png',
      description: 'Camp Bow Wow Colorado Springs is our main supporter and we run our rescue operation out of their central location near I25 and Garden of the Gods. They provide excellent daycare and boarding services for dogs along with training and full service grooming.'
    },
    {
      id: 3, 
      name: 'St. Paws Thrift Store ',
      logo: 'assets/logos/SP.jpg',
      description: 'Our Veterinarian Dr. Anne Pierce who gives us amazing service at a discount because of her love of animals. If you are looking for a great vet then please go see her and help support our cause!'
    },
    {
      id: 4, 
      name: 'Aspen Auto Clinic',
      logo: 'assets/logos/AAC.png',
      description: 'Aspen Auto Clinic is the sponsor for Hirie!'
    },
  ];

  getSponsors(): Sponsor[] {
    return this.sponsors;
  }
}
