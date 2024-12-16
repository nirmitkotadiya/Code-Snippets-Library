const http = require('http');
const nodemailer = require('nodemailer');

const server = http.createServer((req, res) => {
  const auth = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const receiver = {
    from: 'youremail@gmail.com',
    to: 'firstname.lastname@gmail.com',
    subject: 'Node JS Mail Testing',
    text: 'Hello this is a test email from Node JS',
  };

  auth.sendMail(receiver, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.end('Email sent: ' + info.response);
    }
  });
});
server.listen(8080);
