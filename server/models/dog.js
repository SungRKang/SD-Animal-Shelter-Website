import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
    dogId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
      type: String,
      required: true
  },
  gender: {
      type: String,
      required: true,
  },
  color: {
      type: String,
      required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  DOB: {
    type: Date,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  shelterDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }

  // add other fields as needed
});

export const Dog = mongoose.model('Dog', dogSchema);

