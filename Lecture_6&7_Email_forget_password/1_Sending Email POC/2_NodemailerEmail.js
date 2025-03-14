const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config({ path: "./sendgrid.env" });

// thorugh which service you have to send the mail 
const sendGridDetails = {
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
        user: "apikey",   //define for sendgrid authentication
        pass: process.env.SENDGRID_API_KEY
    }
}

const msg = {
  to: "22je0040@iitism.ac.in",
  from: "adarshparihar2525@gmail.com", // Change to your verified sender
  subject: "Sending First Email via Nodemailer Integrated with SendGrid",
  text: "Hi Adarsh Parihar, your email was successfully sent and your details are mentioned below.",
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};



const transporter = nodemailer.createTransport(sendGridDetails);

transporter 
    .sendMail(msg)
    .then(() => {
        console.log("Email sent");
    })
    .catch((error) => {
        console.error(error);
    });