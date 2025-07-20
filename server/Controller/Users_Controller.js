import User from "../Model/Users.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()
import bcrypt from "bcrypt";

import nodemailer from "nodemailer";
import otpTemplate from "../EmailTemplate/otpVerificationTemplate.js";
import { successfullyResetPasswordTemplate } from "../EmailTemplate/SuccessfullyResetPasswordTemplate.js";

const Max_age = 3 * 24 * 60 * 60;

function createToken(id) {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: Max_age * 100 });
}
function generateOpt() {
  let otp = "";
  otp = Math.floor(Math.random() * 9000 + 1000).toString();

  return otp;
}

export const createUser = async (req, res) => {
  try {
    const { FullName, email, phoneNumber, role, password } = req.body;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !password || !FullName || !phoneNumber || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be 8 characters long and contain at least one uppercase,lowercase,number and special character",
      });
    }

    const otp = generateOpt();
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already existed!" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    if (!otp) {
      return res.status(400).json({ message: "invalid Otp" });
    }
    const user = await User.create({
      FullName,
      email,
      otp,
      phoneNumber,
      role,
      password: hashPassword,
    });
    const token = createToken(user._id);

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.NODE_MAIL_ID,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // This will bypass the self-signed certificate check
      },
    });
    let mailOptions = {
      from: `"JobPortal" <${process.env.NODE_MAIL_ID}>`,
      to: `${user.email}`,
      subject: "verification Email",
      html: otpTemplate(user.name, otp),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
    res.status(201).json({ message: " register successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// verification otp

export const verificationOtp = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ message: "invalid Otp" });
    }

    const user = await User.findOne({ otp: code });

    if (!user) {
      return res.status(400).json({ message: "invalid Otp" });
    }

    user.otp = null;
    user.isVerified = true;
    await user.save();
    res.status(201).json({ message: "verified successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login controller

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be 8 characters long and contain at least one uppercase,lowercase,number and special character",
      });
    }

    let existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(400).json({ message: "User already existed!" });
    }

    const match = await bcrypt.compare(password, existUser.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    if (role !== existUser.role) {
      return res
        .status(400)
        .json({ message: "Account doesn't with current role!" });
    }
    const token = createToken(existUser._id);

    existUser = {
      _id: existUser._id,
      FullName: existUser.FullName,
      email: existUser.email,
      phoneNumber: existUser.phoneNumber,
      role: existUser.role,
      profile: existUser.profile,
    };
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({ message: `Welcome back ${existUser.FullName}`, existUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "successfully logout",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.id;
    
    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findById(userId).select('-password -otp');
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const userId = req.id;
    if (!fullName || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({ message: "All Field Required" });
    }
    const skillsArray = skills.split(",");
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User Not Found!!" });
    }

    (user.FullName = fullName),
      (user.email = email),
      (user.phoneNumber = phoneNumber),
      (user.profile.bio = bio),
      (user.profile.skills = skillsArray);

    // resume todo
    await user.save();

    user = {
      _id: user._id,
      fullName: user.FullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    res.status(200).json({ message: "user profile updated!!", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// forgot password

export const UserForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email required!" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "invalid email" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: "10m",
    });

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.NODE_MAIL_ID,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // This will bypass the self-signed certificate check
      },
    });

    let mailOptions = {
      from: `"Job Portal" <${process.env.NODE_MAIL_ID}>`,
      to: `${user.email}`,
      subject: "Reset your Password",
      html: `<p>Reset Your Password
             Click on the following link to reset your password:
             ${process.env.CLIENT_LINK + "/resetpassword/" + token},
             The link will expire in 10 minutes.</p>
             If you didn't request a password reset, please ignore this email.`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
    res.status(201).json({ message: "successfully send to  Email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// reset password

export const UserResetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "At least one lowercase letter.",
        message1: "At least one uppercase letter.",
        message2: "At least one digit.",
        message3: "At least one digit.,characters at least 8 characters long.",
      });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken) {
      return res.status(401).send({ message: "Invalid token" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    let user = await User.findByIdAndUpdate(
      { _id: decodedToken._id },
      { password: hashPassword }
    );

    if (!user) {
      return res.status(401).send({ message: "no user found" });
    }
    await user.save();
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.NODE_MAIL_ID,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // This will bypass the self-signed certificate check
      },
    });

    let mailOptions = {
      from: `"Job Portal" <${process.env.NODE_MAIL_ID}>`,
      to: `${user.email}`,
      subject: "Reset your Password",
      html: successfullyResetPasswordTemplate(user.FullName) ,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
    res.send({ Status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
