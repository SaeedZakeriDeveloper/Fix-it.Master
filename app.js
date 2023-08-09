const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');

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






app.post('/submit_form',(req, res) => {
  const body = req.body;
  const activity = body.activity;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;
  const description = body.description;
  const phoneNumber = body.phoneNumber;
  const  address = body.address



  console.log(activity, firstName, lastName, email, description,phoneNumber,address  );







  var mailOptions = {
    from: 'fixitmaster12@gmail.com',
    to: 's.zaker115599@gmail.com',
    subject: 'Order Request from Fix-It-Masters',
    text: `Activity: ${activity}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone number:${phoneNumber}\nEmail: ${email}\nAddress:${address}\nDescription: ${description}`
  };






  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send the message. Please try again later.");
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send("Message sent successfully!");
    }
  });

});







app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 82;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});