import express from 'express';
import { createUser, login, logout, updateProfile, UserForgotPassword, UserResetPassword, verificationOtp, getCurrentUser } from '../Controller/Users_Controller.js';
import isAuthenticated from '../middlewares/authMiddleware.js';


const User_Routes = express.Router();

User_Routes.post('/register',createUser);
User_Routes.post('/login',login);
User_Routes.post('/otpVerification',verificationOtp)
User_Routes.post('/profile/update',isAuthenticated,updateProfile)
User_Routes.post('/forgotpassword',UserForgotPassword)
User_Routes.post('/resetpassword',UserResetPassword)
User_Routes.get('/logout',logout)
User_Routes.get('/me',isAuthenticated,getCurrentUser)


export default User_Routes;