export interface IDog {
    dogId: number;
    name: string;
    gender: string;
    color: string;
    breed: string;
    age: number;
    weight: number;
    size: string;
    DOB: Date; // or string if you plan to format the date on the client side
    fee: number;
    shelterDate: Date;
    description: string;
  }