const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to handle form submissions
app.post('/submit_form', (req, res) => {
  // Extract form data from the request
  const { activity, firstName, lastName, email, description } = req.body;

  // Create a transporter object to send emails
  const transporter = nodemailer.createTransport({
    // Replace these with your SMTP settings


    host: 'kjkjkjkjkjkjkjkjkj',
    port: 587,
    secure: false,
    auth: {
      user: 'ssssssssss',
      pass: 'mmmmmmmmm',
    },

    
  });

  // Set up the email data
  const mailOptions = {
    from: 'saeed.zakeri1364@gmail.com',
    to: 'saeed.zakeri1364@gmail.com', // Replace with the recipient's email address
    subject: `New Form Submission: ${activity}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nDescription: ${description}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

// Start the server
const port = 3000; // You can change this to any port you prefer
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
