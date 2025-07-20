import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    phoneNumber : {type : Number},
    address : {type : String},
    website : {type : String},
    description : {type : String},
    location:{type : String},
    logo : {type : String},
    user : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
},{timestamps : true});

const Company = mongoose.model('Company',CompanySchema);

export default Company;