import express from 'express'
import { getAdminJob, getAllJobs, getJobById, postJob } from '../Controller/Job_Controller.js'
import isAuthenticated from '../middlewares/authMiddleware.js'
import { isRecruiter } from '../middlewares/roleMiddleware.js'


const Job_Routes = express.Router()


Job_Routes.get('/getjobs',isAuthenticated,getAllJobs)
Job_Routes.get('/getSingleJob/:id',isAuthenticated,getJobById)
Job_Routes.get('/getJobByAdmin',isAuthenticated,getAdminJob)
Job_Routes.post('/createJobs',isAuthenticated,isRecruiter,postJob)


export default Job_Routes;