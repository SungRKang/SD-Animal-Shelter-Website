// seed.js
import mongoose from 'mongoose';
import {Dog} from './models/dog.js';
import {dogs} from "./data/data.js"
import 'dotenv/config'

mongoose.connect(process.env.MONGO_URL);

const seedDB = async () => {
    try {
        await Dog.deleteMany({});

        // Transform the data to match the schema and ensure _id is not set
        const transformedDogs = dogs.map(dog => {
          const { __id, ...restOfDog } = dog; // Remove the __id or _id field if it exists
          return {
            ...restOfDog,
            DOB: new Date(dog.DOB)       // Convert to Date object
          };
        });
        await Dog.insertMany(transformedDogs);
        console.log('Dogs have been inserted');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});

