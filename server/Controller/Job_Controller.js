import Job from "../Model/JobModel.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({ message: "All fields required!!" });
    }

    const jobForData = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      experienceLevel: experience,
      position,
      jobType,
      company: companyId,
      created_by: userId,
    });

    res.status(201).json({message:'job created successfully!!'})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};



export const getAllJobs = async (req, res) => {
  try {
    const keyword = (!req.query.keyword || req.query.keyword === 'null') ? '' : req.query.keyword;
    let query = {};

    if (keyword) {
      query = {
        $or: [
          { title: { $regex: keyword, $options: 'i' } },
          { description: { $regex: keyword, $options: 'i' } }
        ]
      };
    }

    // Pagination logic
    const page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
    const limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 10;
    const skip = (page - 1) * limit;

    const totalJobs = await Job.countDocuments(query);
    const jobs = await Job.find(query)
      .populate('company', 'companyName')
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      jobs,
      totalJobs,
      currentPage: page,
      totalPages: Math.ceil(totalJobs / limit),
      pageSize: limit
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};


export const getJobById = async (req,res) => {
    try {
        const jobId = req.params.id;

        const jobById = await Job.findById(jobId).populate('company', 'name')
        if(!jobById){
            return res.status(400).json("Job not founded!!")
        }

        res.status(200).json(jobById)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

// admin
export const getAdminJob = async (req,res)=> {
    try {
        const adminId = req.id;

        const jobs = await Job.find({created_by:adminId}).populate('company', 'name')
        if(!jobs){
            return res.status(404).json({message:'job not founded!!'})
        }
        res.status(200).json(jobs)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
} 