export default function otpTemplate(userName, otp) {
  return `
     <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Job Portal OTP Verification</title>
  <style type="text/css">
    /* Reset & Base Styles */
    body, html {
      margin: 0;
      padding: 0;
      background-color: #f2f2f2;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .email-container {
      width: 100%;
      padding: 20px 0;
      background-color: #f2f2f2;
    }
    .email-content {
      width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    /* Header */
    .email-header {
      background: linear-gradient(90deg, #1d82f5, #55acee);
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .email-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 300;
    }
    /* Body */
    .email-body {
      padding: 30px;
      text-align: center;
    }
    .email-body p {
      margin: 10px 0;
      color: #555555;
      font-size: 16px;
    }
    .otp-code {
      display: inline-block;
      padding: 10px 20px;
      background-color: #f1f1f1;
      font-size: 32px;
      letter-spacing: 4px;
      font-weight: bold;
      color: #333333;
      margin: 20px 0;
      border-radius: 4px;
    }
    .verify-btn {
      display: inline-block;
      padding: 12px 25px;
      background-color: #1d82f5;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 16px;
      margin-top: 20px;
    }
    /* Footer */
    .email-footer {
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #777777;
      background-color: #f7f7f7;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-content">
      <div class="email-header">
        <h1>Job Portal OTP Verification</h1>
      </div>
      <div class="email-body">
        <p>Hello,${userName}</p>
        <p>Thank you for choosing our Job Portal. Please use the following One-Time Password (OTP) to verify your account:</p>
        <div class="otp-code">${otp}</div>
        <p>This OTP is valid for 10 minutes. If you did not request this verification, please ignore this email.</p>
      </div>
      <div class="email-footer">
        &copy; ${new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>
 `;
}
