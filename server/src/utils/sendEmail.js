import nodemailer from "nodemailer";
import ejs from "ejs";
import dotenv from "dotenv";

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

const adminTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Enquiry</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: grid;
        place-content: center;
        font-family: "Segoe UI", Arial, sans-serif;
        background-color: #fff;
      }

      .container {
        max-width: 600px;
        background-color: #fefefe;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }

      header {
        padding: 20px;
        color: #fff;
      }

      header h1 {
        color: #ff385c;
        font-size: 30px;
        font-weight: 700;
      }

      .message {
        width: 100%;
        padding: 20px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }

      .message h2,
      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }

      .message p span {
        color: #ff385c;
        font-weight: 600;
      }
      
      footer {
        text-align: center;
        padding: 20px;
        color: #333;
        font-size: 14px;
        font-weight: 600;
      }

      footer p {
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <header>
        <h1>Shri Sai Brindhavanam Foundation</h1>
      </header>
      <section class="message">
        <h3>Dear Admin,</h3>
        <p>You have received an enquiry mail!</p>
        <p><span>Name : </span><%=fname%> <%=lname%></p>
        <p><span>Email : </span><%=email%></p>
        <p><span>Message : </span><%=message%></p>
      </section>
      <footer>
        <p>Sent with &hearts; from Virtual India.</p>
        <p>&copy; 2025 Virtual India. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
`;

const userTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acknowledgement Email</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: grid;
        place-content: center;
        font-family: "Segoe UI", Arial, sans-serif;
        background-color: #fff;
      }

      .container {
        max-width: 600px;
        background-color: #fefefe;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }

      header {
        padding: 20px;
        color: #fff;
      }

      header h1 {
        color: #ff385c;
        font-size: 30px;
        font-weight: 700;
      }

      .message {
        width: 100%;
        padding: 20px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }

      .message h2,
      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }

      .message p span {
        color: #ff385c;
        font-weight: 600;
      }

      footer {
        text-align: center;
        padding: 20px;
        color: #333;
        font-size: 14px;
        font-weight: 600;
      }

      footer p {
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <header>
        <h1>Shri Sai Brindhavanam Foundation</h1>
      </header>
      <section class="message">
        
        <h2>Thank You for Contacting Us, <%=fname%>!</h2>
        <p>
          We’re excited to welcome you to <span>Shri Sai Brindhavanam Foundation</span>. We have received your message and will get back to you shortly.
        </p>
        <p>Best Regards,</p>
        <p>- SSBF </p>
      </section>
      <footer>
        <p>Sent with &hearts; from Virtual India.</p>
        <p></p>
        <p>&copy; 2025 Virtual India. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
`;

export const sendEnquiryMail = async (fname, lname, email, message) => {
  try {
    const compiledAdminTemplate = ejs.compile(adminTemplate);

    const adminHTML = compiledAdminTemplate({
      fname,
      lname,
      email,
      message,
    });

    const adminMailOptions = {
      from: email,
      to: process.env.NODEMAILER_USER,
      subject: "Enquiry",
      html: adminHTML,
    };

    const adminMailResponse = await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent successfully:", adminMailResponse.messageId);

    const compiledUserTemplate = ejs.compile(userTemplate);

    const userHTML = compiledUserTemplate({
      fname,
      lname,
      email,
      message,
    });

    const userMailOptions = {
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Welcome",
      html: userHTML,
    };

    const userMailResponse = await transporter.sendMail(userMailOptions);
    console.log("User email sent successfully:", userMailResponse.messageId);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
    // console.log(error);
    // return { error };
  }
};
