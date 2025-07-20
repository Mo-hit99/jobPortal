import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title : {type : String},
    description : {type : String},
    experienceLevel:{type:Number},
    location : {type : String},
    salary : {type : Number},
    requirements:[{type : String}],
    email : {type : String},
    status : {type : String , enum : ['Open','Closed'] , default : 'Open'},
    user : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
    jobType:{type : String },
    position : {type:Number},
    company :{type:mongoose.Schema.Types.ObjectId , ref : 'Company'},
    created_by : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
    application : [{type : mongoose.Schema.Types.ObjectId , ref : 'Application'}]
},{timestamps : true});

const Job = mongoose.model('Job',JobSchema);

export default Job;