const nodemailer = require("nodemailer");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config({ path: "./sendgrid.env" });


/*********************Changable Content**************************** */
const PathToTemplate = "./templates/otp.html";
const receiverEmail = "22je0040@iitism.ac.in";

// Replace placeholders in the template with actual values
const toReplaceObject = {
  name: "Adarsh Parihar",
  otp: "6969",
};
/*********************End of Changable Content********************* */


async function updateTemplateHelper(templatePath) {
  let templateContent = await fs.promises.readFile(templatePath, "utf8");
  const keyArrs = Object.keys(toReplaceObject);
  keyArrs.forEach((key) => {
    templateContent = templateContent.replace(
      `#{${key}}`,
      toReplaceObject[key]
    );
  });
  return templateContent;
}

async function emailSender(templatePath, receiverEmail, toReplaceObject) {
  try {
    // thorugh which service you have to send the mail
    const sendGridDetails = {
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true,
      auth: {
        user: "apikey", //define for sendgrid authentication
        pass: process.env.SENDGRID_API_KEY,
      },
    };

    // Read the template content and replace placeholders
    const Content =await updateTemplateHelper(templatePath);

    const msg = {
      to: receiverEmail,
      from: "adarshparihar2525@gmail.com", // Change to your verified sender
      subject: "OTP for Resetting your password",
      text: `Hi ${toReplaceObject.name}, Your One-Time Password (OTP) for reseting the password is ${toReplaceObject.otp}.`,
      html: Content,
    };

    const transporter = nodemailer.createTransport(sendGridDetails);

    await transporter.sendMail(msg);
    console.log("Email sent successfully")

  } catch (err) {
    console.error("Error sending email:", err);
  }
}



emailSender(PathToTemplate, receiverEmail, toReplaceObject);