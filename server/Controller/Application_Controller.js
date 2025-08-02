import Application from "../Model/Application.js";
import Job from "../Model/JobModel.js";
import { retryDbOperation } from "../utils/dbUtils.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        if (!jobId) {
            return res.status(400).json({
                success: false,
                message: 'Job ID is required'
            });
        }

        // Check if user already applied for this job
        const existingApplication = await retryDbOperation(() =>
            Application.findOne({ job: jobId, applicant: userId })
        );

        if (existingApplication) {
            return res.status(400).json({
                success: false,
                message: 'You have already applied for this job!'
            });
        }

        // Check if job exists
        const job = await retryDbOperation(() => Job.findById(jobId));

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found!'
            });
        }

        // Create new application
        const newApplicant = await retryDbOperation(() => Application.create({
            job: jobId,
            applicant: userId,
        }));

        // Add application to job's application array
        job.application.push(newApplicant._id);
        await retryDbOperation(() => job.save());

        res.status(201).json({
            success: true,
            message: 'Application submitted successfully!',
            data: newApplicant
        });
    } catch (error) {
        console.error('Error applying for job:', error);
        res.status(500).json({
            success: false,
            message: "Failed to submit application",
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        const applications = await retryDbOperation(() =>
            Application.find({ applicant: userId })
                .sort({ createdAt: -1 })
                .populate({
                    path: 'job',
                    populate: {
                        path: 'company',
                        select: 'name location website'
                    }
                })
                .lean()
        );

        res.status(200).json({
            success: true,
            data: applications,
            count: applications.length
        });
    } catch (error) {
        console.error('Error fetching applied jobs:', error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch applied jobs",
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const userId = req.id;

        if (!jobId) {
            return res.status(400).json({
                success: false,
                message: 'Job ID is required'
            });
        }

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        const job = await retryDbOperation(() =>
            Job.findById(jobId)
                .populate({
                    path: 'application',
                    options: { sort: { createdAt: -1 } },
                    populate: {
                        path: 'applicant',
                        select: '-password -otp'
                    }
                })
                .lean()
        );

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found.'
            });
        }

        // Check if user is authorized to view applicants (job creator)
        if (job.created_by.toString() !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view applicants for this job'
            });
        }

        res.status(200).json({
            success: true,
            data: job.application,
            count: job.application.length
        });
    } catch (error) {
        console.error('Error fetching applicants:', error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch applicants",
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        const userId = req.id;

        // Validation
        if (!applicationId) {
            return res.status(400).json({
                success: false,
                message: 'Application ID is required'
            });
        }

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        // Allowed status values as per Application model
        const allowedStatuses = ['Pending', 'Shortlisted', 'Rejected', 'Hired', 'Interview'];

        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Status is required'
            });
        }

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: `Invalid status. Allowed values: ${allowedStatuses.join(', ')}`
            });
        }

        // Find application and populate job to check authorization
        const application = await retryDbOperation(() =>
            Application.findById(applicationId).populate('job')
        );

        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found.'
            });
        }

        // Check if user is authorized to update status (job creator)
        if (application.job.created_by.toString() !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this application status'
            });
        }

        // Update status
        application.status = status;
        await retryDbOperation(() => application.save());

        return res.status(200).json({
            success: true,
            message: 'Application status updated successfully.',
            data: {
                applicationId: application._id,
                newStatus: status
            }
        });
    } catch (error) {
        console.error('Error updating application status:', error);
        res.status(500).json({
            success: false,
            message: "Failed to update application status",
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}