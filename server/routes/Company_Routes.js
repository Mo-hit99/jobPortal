import express from 'express'
import { getByIdCompanyData, getCompanyData, registerCompany, updatedCompany } from '../Controller/Company_Controller.js';
import isAuthenticated from '../middlewares/authMiddleware.js';


const Company_Routes = express.Router();


Company_Routes.get('/getCompanyData',getCompanyData)
Company_Routes.get('/getCompanyData/:id',getByIdCompanyData)

Company_Routes.post('/companyRegister',isAuthenticated,registerCompany)

Company_Routes.put('/update/companyData/:id',isAuthenticated,updatedCompany)


export default Company_Routes;