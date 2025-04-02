export const adminDonationTemplate = `
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
        color: #333;
      }

      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }

      
      .table-donation {
        overflow: auto;
        width: 100%;
        background-color: #fffbeb;
        padding: 10px;
      }

      .table-donation table {
        border: 1px solid #dededf;
        height: 100%;
        width: 100%;
        table-layout: auto;
        border-collapse: collapse;
        border-spacing: 1px;
        text-align: left;
      }
      
      
      .table-donation th, .table-donation td {
        border: 1px solid #dededf;
        color: #000;
        padding: 4px 10px;
      }
      
      .table-donation td span {
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

        

        <p>
          <% if (payment?.state === "COMPLETED") { %>
            You have received a new successful donation from the user mentioned below.
          <% } else if (payment?.state === "FAILED") { %>
            A user attempted to donate, but the payment was unsuccessful.
          <% } else { %>
            A new donation request has been received and is currently being processed.
          <% } %>
        </p>


        <p>Please find the details of the donation below.</p>
        <div class="table-donation" >
          <table>
            <tbody>
              <tr>
                <td><span>Name</span></td>
                <td><%=user?.fname%> <%=user?.lname%></td>
              </tr>
              <tr>
                <td><span>Email</span></td>
                <td><%=user?.email%></td>
              </tr>
              <tr>
                <td><span>Mobile</span></td>
                <td><%=user?.mobile%></td>
              </tr>
              <tr>
                <td><span>Amount (₹)</span></td>
                <td>Rs.<%=user?.amount%></td>
              </tr>
              <tr>
                <td><span>Comments</span></td>
                <td><%=user?.comments%></td>
              </tr>
              <tr>
                <td><span>Order ID</span></td>
                <td><%=payment?.orderId%></td>
              </tr>
              <tr>
                <td><span>Status</span></td>
                <td><%=payment?.state%></td>
              </tr>
              <tr>
                <td><span>Payment Mode</span></td>
                <td><%=payment?.paymentMode%></td>
              </tr>
              <tr>
                <td><span>Transaction ID</span></td>
                <td><%=payment?.transactionId%></td>
              </tr>
              <tr>
                <td><span>Time</span></td>
                <td><%=payment?.timestamp%></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer>
        <p>Sent with 🧡 from <span>Shri Sai Brindhavanam Foundation</span>.</p>
        <p>Copyrights &copy; 2025 Mad Adz. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>`;

export const userDonationTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thanks for Donating Us</title>
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
        color: #333;
      }

      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }

      
      .table-donation {
        overflow: auto;
        width: 100%;
        background-color: #fffbeb;
        padding: 10px;
      }

      .table-donation table {
        border: 1px solid #dededf;
        height: 100%;
        width: 100%;
        table-layout: auto;
        border-collapse: collapse;
        border-spacing: 1px;
        text-align: left;
      }
      
      
      .table-donation th, .table-donation td {
        border: 1px solid #dededf;
        color: #000;
        padding: 4px 10px;
      }
      
      .table-donation td span {
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
        <h3>Dear <%=user?.fname%>,</h3>
        
        

        <p>
          <% if (payment?.state === "COMPLETED") { %>
            Your donation has been received successfully. Thank you for your support!
          <% } else if (payment?.state === "FAILED") { %>
            Your payment was unsuccessful. Please try again or contact support.
          <% } else { %>
            We have received your donation request. It is currently under processing.
          <% } %>
        </p>

        <p>Please find the details of the donation below.</p>
        
        <div class="table-donation" >
          <table>
            <tbody>
              <tr>
                <td><span>Name</span></td>
                <td><%=user?.fname%> <%=user?.lname%></td>
              </tr>
              <tr>
                <td><span>Email</span></td>
                <td><%=user?.email%></td>
              </tr>
              <tr>
                <td><span>Mobile</span></td>
                <td><%=user?.mobile%></td>
              </tr>
              <tr>
                <td><span>Amount (₹)</span></td>
                <td>Rs.<%=user?.amount%></td>
              </tr>
              <tr>
                <td><span>Comments</span></td>
                <td><%=user?.comments%></td>
              </tr>
              <tr>
                <td><span>Order ID</span></td>
                <td><%=payment?.orderId%></td>
              </tr>
              <tr>
                <td><span>Status</span></td>
                <td><%=payment?.state%></td>
              </tr>
              <tr>
                <td><span>Payment Mode</span></td>
                <td><%=payment?.paymentMode%></td>
              </tr>
              <tr>
                <td><span>Transaction ID</span></td>
                <td><%=payment?.transactionId%></td>
              </tr>
              <tr>
                <td><span>Time</span></td>
                <td><%=payment?.timestamp%></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer>
        <p>Sent with 🧡 from <span>Shri Sai Brindhavanam Foundation</span>.</p>
        <p>Copyrights &copy; 2025 Mad Adz. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>`;

export const adminEnquiryTemplate = `
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
        <h3>Dear Admin,</h3>

        <p>You have a new enquiry. Please check and respond soon.</p>
        <p><span>Name : </span><%=fname%> <%=lname%></p>
        <p><span>Email : </span><%=email%></p>
        <p><span>Message : </span><%=message%></p>

        
      </section>
      <footer>
        <p>Sent with 🧡 from <span>Shri Sai Brindhavanam Foundation</span>.</p>
        <p>Copyrights &copy; 2025 Mad Adz. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>`;

export const userEnquiryTemplate = `
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
        <h3>Thank You for Contacting Us, <%=fname%> 😊</h3>
        <p>
         Welcome to <span>Shri Sai Brindhavanam Foundation</span>.</br> We've received your message and will respond soon.
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
