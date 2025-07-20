import Application from "../Model/Application.js";
import Job from "../Model/JobModel.js";

export const applyJob = async (req,res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!userId){
            return res.status(400).json({message:'user id is required'})
        }

        if(!jobId){
            return res.status(400).json({message:'job id is required'})
        }

        const existingApplication = await Application.findOne({job:jobId,applicant:userId})

        if(existingApplication){
            return res.status(400).json({message:'application already applied!'})
        }

        const job = await Job.findById(jobId)

        if(!job){
            return res.status(400).json({message:'Job not Found!'})
        }

        const newApplicant = await Application.create({
            job:jobId,
            applicant:userId,
        })
        job.application.push(newApplicant._id);

        await job.save();

        res.status(201).json({message:'submit successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

export const getAppliedJobs = async (req,res) =>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            option:{sort : {createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}}
            }
        });

        if(!application){
            return res.status(404).json({message:'No Applications'})
        }

        res.status(200).json(application)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

export const getApplicants = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'application',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant',
                select: '-password -otp'
            }
        })
        if(!job){
            return res.status(404).json({message:'Job not found.'})
        }

        res.status(200).json(job.application)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

export const updateStatus = async (req,res) =>{
    try {
        const {status} = req.body;
        const applicantId = req.params.id;

        // Allowed status values as per Application model
        const allowedStatuses = ['Pending','Shortlisted','Rejected','Hired','Interview'];
        if(!status){
            return res.status(400).json({message : 'status is required'})
        }
        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({message: `Invalid status. Allowed values: ${allowedStatuses.join(', ')}`});
        }

        const application = await Application.findOne({_id:applicantId})

        if(!application){
           return res.status(404).json({
            message:'Application not found.'
           })
        }

        application.status = status;
        await application.save();

        return res.status(200).json({message : 'status updated successfully.'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}