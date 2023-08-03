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



/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index_fr.html'));
});*/



app.post('/submit_form',(req, res) => {
  const body = req.body;
  const activity = body.activity;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;
  const description = body.description;

  console.log(activity, firstName, lastName, email, description);

  var mailOptions = {
    from: 'fixitmaster12@gmail.com',
    to: 's.zaker115599@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

app.use(express.static(path.join(__dirname, 'public')))

const port = 3000; 
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});





