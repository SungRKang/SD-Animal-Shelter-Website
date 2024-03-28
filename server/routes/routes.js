// In your Express route handler file
import express from 'express';
import {Dog} from '../models/dog.js'; // import your Mongoose model
import nodemailer from 'nodemailer';



const router = express.Router();

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

router.post('/surrender', async (req, res) => {
  const transporter = createTransporter();
  try {
    const { petName, petAge, petBreed, reason, ownerName, email, phone, issues, additionalComments } = req.body;
    
    // Set up the email data
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // sender address
      to: process.env.RECIPIENT_EMAIL, // list of receivers
      subject: 'New Pet Surrender Form Submission', // Subject line
      html: `<p>New surrender form has been submitted with the following details:</p>
             <ul>
               <li>Pet's Name: ${petName}</li>
               <li>Pet's Age: ${petAge}</li>
               <li>Pet's Breed: ${petBreed}</li>
               <li>Reason for Surrendering: ${reason}</li>
               <li>Owner's Name: ${ownerName}</li>
               <li>Email: ${email}</li>
               <li>Phone: ${phone}</li>
               <li>Issues: ${issues}</li>
               <li>Additional Comments: ${additionalComments}</li>
             </ul>`
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    // Send a 200 OK response back to the front end
    res.status(200).send({ message: 'Form submitted successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).send({ message: 'Error submitting form', error: error });
  }
});


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
