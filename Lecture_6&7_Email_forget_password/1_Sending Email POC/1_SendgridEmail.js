// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");

const dotenv = require("dotenv");
dotenv.config({ path: "./sendgrid.env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "22je0040@iitism.ac.in", // Change to your recipient
  from: "adarshparihar2525@gmail.com", // Change to your verified sender
  subject: "Sending My First Email via SendGrid",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
