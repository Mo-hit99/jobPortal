import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    job : {type : mongoose.Schema.Types.ObjectId , ref : 'Job'},
    status : {type : String , enum : ['Pending','Shortlisted','Rejected','Hired','Interview'] , default : 'Pending'},
    applicant:{
        type : mongoose.Schema.Types.ObjectId , ref : 'User'
    }
},{timestamps : true});

const Application = mongoose.model('Application',ApplicationSchema);

export default Application;