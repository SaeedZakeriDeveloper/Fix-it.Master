const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fixitmaster12@gmail.com',
    pass: 'anbbumywwtjenkap'
  }
});



const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.post('/submit_form', (req, res) => {
  const body = req.body;
  const activity = body.activity;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;
  const description = body.description;
  const phoneNumber = body.phoneNumber;
  const address = body.address


  var mailOptions = {
    from: 'fixitmaster12@gmail.com',
    to: 'admin-support@fix-it-masters.com',
    subject: 'Order Request from Fix-It-Masters',
    text: `Activity: ${activity}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone number:${phoneNumber}\nEmail: ${email}\nAddress:${address}\nDescription: ${description}`
  };


  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send("Failed to send the message. Please try again later.");
    } else {
      res.status(200).send("Message sent successfully!");
    }
  });
});


app.post('/submit_contactForm', (req, res) => {
  const body = req.body;
  const fullNameContact = body.fullNameContact;
  const emailContact = body.emailContact;
  const subjectContact = body.subjectContact;
  const descriptionContact = body.descriptionContact;

  var mailOptions = {
    from: 'fixitmaster12@gmail.com',
    to: 'admin-support@fix-it-masters.com',
    subject: 'Contact our team from Fix-It-Masters',
    text: `Full name: ${fullNameContact}\n Subject: ${subjectContact}\n Email: ${emailContact}\nDescription: ${descriptionContact}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send("Failed to send the message. Please try again later.");
    } else {
      res.status(200).send("Message sent successfully!");
    }
  });

});




app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 82;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});


