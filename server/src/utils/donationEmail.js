import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {
  generateAdminDonationTemplate,
  generateUserDonationTemplate,
} from "../templates/donations.js";
// import ejs from "ejs";
// import { adminDonationTemplate, userDonationTemplate } from "../templates/ejsTemplates.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PWD,
  },
});

export const sendDonationMail = async (donationData) => {
  try {
    // Compile templates
    // const compiledAdminTemplate = ejs.compile(adminDonationTemplate);
    // const compiledUserTemplate = ejs.compile(userDonationTemplate);

    // Generate email HTML
    // const adminHTML = compiledAdminTemplate(donationData);
    // const userHTML = compiledUserTemplate(donationData);

    // Generate email HTML
    const adminHTML = generateAdminDonationTemplate(donationData);
    const userHTML = generateUserDonationTemplate(donationData);

    const { user } = donationData;

    // Email options
    const adminMailOptions = {
      from: user?.email,
      to: process.env.NODEMAILER_USER,
      subject: "Donation - SSBF",
      html: adminHTML,
    };

    const userMailOptions = {
      from: process.env.NODEMAILER_USER,
      to: user?.email,
      subject: "Donation - SSBF",
      html: userHTML,
    };

    // Send both emails in parallel
    const [adminMailResponse, userMailResponse] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log({ adminMailResponse, userMailResponse });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
