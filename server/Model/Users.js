import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    FullName : {type : String},
    email : {type: String , unique : true},
    otp:{type:String},
    phoneNumber : {type : Number},
    role : { type : String, enum : ['Student','Recruiter']},
    password : {type : String},
    isVerified: { type: Boolean, default: false },
    profile : {
        bio:{type : String},
        skills : [{type : String}],
        resume : {type : String},
        resumeOriginalName : {type : String},
        company:{type : mongoose.Schema.Types.ObjectId , ref : 'Company'}, 
        profilePic : {type : String,
            default : ''
        },
    },
},{timestamps : true});

const User = mongoose.model('User',UserSchema);

export default User;
