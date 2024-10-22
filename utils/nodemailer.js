// const nodemailer = require('nodemailer');


// let transporter = nodemailer.createTransport({
//     host: 'smtpout.secureserver.net', // GoDaddy SMTP server
//     port: 465, // Port for SSL
//     // secure: true, // Use SSL
//     auth: {
//       user: 'services@stylehouse.world', 
//       pass: 'Ester327811@' 
//     }
//   });



// module.exports = {transporter}


const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the service
    auth: {
      user: 'umarf1901@gmail.com', // Your Gmail address
      pass: 'ohpd nkyp lfpb iajx' // Your Gmail App Password (explained below)
    }
});

module.exports = {transporter};




