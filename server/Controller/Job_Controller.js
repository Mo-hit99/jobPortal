import Job from "../Model/JobModel.js";
import { retryDbOperation } from "../utils/dbUtils.js";

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

    // Validation
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
      return res.status(400).json({
        success: false,
        message: "All fields are required!!"
      });
    }

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }

    // Validate salary is a positive number
    const salaryNum = Number(salary);
    if (isNaN(salaryNum) || salaryNum <= 0) {
      return res.status(400).json({
        success: false,
        message: "Salary must be a valid positive number"
      });
    }

    // Validate position is a positive number
    const positionNum = Number(position);
    if (isNaN(positionNum) || positionNum <= 0) {
      return res.status(400).json({
        success: false,
        message: "Position must be a valid positive number"
      });
    }

    const jobForData = await retryDbOperation(() => Job.create({
      title: title.trim(),
      description: description.trim(),
      requirements: requirements.split(",").map(req => req.trim()).filter(req => req.length > 0),
      salary: salaryNum,
      location: location.trim(),
      experienceLevel: experience,
      position: positionNum,
      jobType,
      company: companyId,
      created_by: userId,
    }));

    res.status(201).json({
      success: true,
      message: 'Job created successfully!!',
      data: jobForData
    });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({
      success: false,
      message: "Failed to create job",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};



export const getAllJobs = async (req, res) => {
  try {
    const keyword = (!req.query.keyword || req.query.keyword === 'null') ? '' : req.query.keyword;
    let query = {};

    if (keyword && keyword.trim()) {
      const sanitizedKeyword = keyword.trim();
      query = {
        $or: [
          { title: { $regex: sanitizedKeyword, $options: 'i' } },
          { description: { $regex: sanitizedKeyword, $options: 'i' } }
        ]
      };
    }

    // Pagination logic with validation
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 10)); // Max 50 items per page
    const skip = (page - 1) * limit;

    // Use Promise.all for concurrent operations
    const [totalJobs, jobs] = await Promise.all([
      retryDbOperation(() => Job.countDocuments(query)),
      retryDbOperation(() => Job.find(query)
        .populate('company', 'name')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()) // Use lean() for better performance
    ]);

    const totalPages = Math.ceil(totalJobs / limit);

    res.status(200).json({
      success: true,
      data: {
        jobs,
        pagination: {
          totalJobs,
          currentPage: page,
          totalPages,
          pageSize: limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};


export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                success: false,
                message: "Job ID is required"
            });
        }

        const jobById = await retryDbOperation(() =>
            Job.findById(jobId)
                .populate('company', 'name')
                .populate('application')
                .lean()
        );

        if (!jobById) {
            return res.status(404).json({
                success: false,
                message: "Job not found!!"
            });
        }

        res.status(200).json({
            success: true,
            data: jobById
        });
    } catch (error) {
        console.error('Error fetching job by ID:', error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch job",
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}

// admin
export const getAdminJob = async (req, res) => {
    try {
        const adminId = req.id;

        if (!adminId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        const jobs = await retryDbOperation(() =>
            Job.find({ created_by: adminId })
                .populate('company', 'name')
                .sort({ createdAt: -1 })
                .lean()
        );

        res.status(200).json({
            success: true,
            data: jobs,
            count: jobs.length
        });
    } catch (error) {
        console.error('Error fetching admin jobs:', error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch jobs",
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}