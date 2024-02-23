// In your Express route handler file
import express from 'express';
import {Dog} from '../models/dog.js'; // import your Mongoose model

const router = express.Router();

// Endpoint to get all dogs
router.get('/dogs', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
