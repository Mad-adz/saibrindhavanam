export const generateAdminEnquiryTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enquiry - SSBF</title>
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
      }

      .container {
        max-width: 720px;
        background-color: #fefefe;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        background-color: #fffbeb;
      }

      header {
        padding: 20px;
      }

      header h1 {
        color: #ff6900;
        font-size: 30px;
        font-weight: 700;
      }

      .message {
        width: 100%;
        padding: 20px;
        border-top: 1px solid #ffd6a8;
        border-bottom: 1px solid #ffd6a8;
        color: #000;
      }

      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }
      
      .message span {
        color: #ff6900;
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

        <p>You have a new enquiry. Please check and respond soon.</p>
        <p><span>Name : </span>${data?.fname} ${data?.lname}</p>
        <p><span>Email : </span>${data?.email}</p>
        <p><span>Message : </span>${data?.message}</p>

        
      </section>
      <footer>
        <p>Sent with 🧡 from <span>Shri Sai Brindhavanam Foundation</span>.</p>
        <p>Copyrights &copy; 2025 Mad Adz. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>`;

export const generateUserEnquiryTemplate = (fname) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Donation Received</title>
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
      }

      .container {
        max-width: 720px;
        background-color: #fefefe;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        background-color: #fffbeb;
      }

      header {
        padding: 20px;
      }

      header h1 {
        color: #ff6900;
        font-size: 30px;
        font-weight: 700;
      }

      .message {
        width: 100%;
        padding: 20px;
        border-top: 1px solid #ffd6a8;
        border-bottom: 1px solid #ffd6a8;
        color: #000;
      }

      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }
      
      .message span {
        color: #ff6900;
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
        <h3>Thank You for Contacting Us, ${fname} 😊</h3>
        <p>
         Welcome to <span>Shri Sai Brindhavanam Foundation</span>.
         </br> We've received your message and will respond soon.
        </p>
        <p>Best Regards,</p>
        <p>- SSBF Team </p>

        
      </section>
      <footer>
        <p>Sent with 🧡 from <span>Shri Sai Brindhavanam Foundation</span>.</p>
        <p>Copyrights &copy; 2025 Mad Adz. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>`;
