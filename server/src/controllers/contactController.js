import asyncHandler from "express-async-handler";
import { validateContact } from "../validators/contactValidator.js";
import { capitalize } from "../utils/helper.js";
import { sendEnquiryMail } from "../utils/sendEmail.js";

export const sendMail = asyncHandler(async (req, res) => {
  // Validate request body
  const { error, value } = validateContact(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }

  let { fname, lname, email, message } = value;

  // Capitalize first and last name
  fname = capitalize(fname);
  lname = capitalize(lname);

  console.log("Sending email with details:", { fname, lname, email, message });

  // Send enquiry email
  const response = await sendEnquiryMail(fname, lname, email, message);

  if (response.error) {
    console.error("Email sending failed:", response.error);
    return res.status(500).json({ success: false, message: "Failed to send email", error: response.error });
  }

  return res.status(200).json({ success: true, message: "Mail sent successfully!" });
});
