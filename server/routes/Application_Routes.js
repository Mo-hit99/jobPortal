import express from 'express'
import isAuthenticated from '../middlewares/authMiddleware.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../Controller/Application_Controller.js';

const Application_Routes = express.Router();


Application_Routes.post('/applyjob/:id',isAuthenticated,applyJob)
Application_Routes.get('/getapplyjob',isAuthenticated,getAppliedJobs)
Application_Routes.get('/:id/applicant',isAuthenticated,getApplicants)
Application_Routes.post('/applicant/status/:id',isAuthenticated,updateStatus)

export default Application_Routes;