export const successfullyResetPasswordTemplate = (userName) => {
  return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Successfully Reset</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background-color: #4CAF50;
            color: #fff;
            padding: 20px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
            color: #555;
        }

        .email-body h2 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #333;
        }

        .email-body p {
            line-height: 1.6;
            font-size: 16px;
            color: #555;
        }

        .button-container {
            text-align: center;
            margin-top: 20px;
        }

        .login-button {
            background-color: #4CAF50;
            color: #fff;
            padding: 15px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            border: none;
        }

        .login-button:hover {
            background-color: #45a049;
        }

        .footer {
            background-color: #f4f7fc;
            padding: 10px;
            text-align: center;
            color: #888;
            font-size: 12px;
        }

        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>

    <div class="email-container">
        <div class="header">
            <h1>Password Successfully Reset</h1>
        </div>
        <div class="email-body">
            <h2>Hello ${userName},</h2>
            <p>Your password has been successfully reset. You can now log in to your account using the new password.</p>


            <p>If you did not request this change, please contact support immediately.</p>
            <p>If you have any other questions, feel free to reach out to us.</p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
    </div>

</body>
</html>

 
 
 
 
 
 `;
};
