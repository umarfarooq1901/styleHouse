


const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the service
    auth: {
      user: 'umarf1901@gmail.com', // Your Gmail address
      pass: 'ohpd nkyp lfpb iajx' // Your Gmail App Password (explained below)
    }
});

module.exports = {transporter};




