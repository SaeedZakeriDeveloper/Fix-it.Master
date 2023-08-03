const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Serve the English version by default





app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index_fr.html'));
});






// Define a route to handle form submissions
app.post('/submit_form', (req, res) => {
  // Extract form data from the request
  const { lang, activity, firstName, lastName, email, description } = req.body;

  // Create a transporter object to send emails
  const transporter = nodemailer.createTransport({
    // Replace these with your SMTP settings
    host: 'your_smtp_host',
    port: 587,
    secure: false,
    auth: {
      user: 'your_smtp_username',
      pass: 'your_smtp_password',
    },
  });

  // Set up the email data
  const mailOptions = {
    from: 'your_sender_email@example.com',
    to: 'your_recipient_email@example.com', // Replace with the recipient's email address
    subject: `New Form Submission (${lang}): ${activity}`,
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
//////