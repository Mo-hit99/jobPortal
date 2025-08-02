import Company from "../Model/Company.js";
import { retryDbOperation } from "../utils/dbUtils.js";

// get all data company
export const getCompanyData = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const companyData = await retryDbOperation(() => Company.find({user: userId}));
    res.status(200).json({
      success: true,
      data: companyData,
      count: companyData.length
    });
  } catch (error) {
    console.error('Error fetching company data:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch company data",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// get data by id of company
export const getByIdCompanyData = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Company ID is required"
      });
    }

    const companyDataById = await retryDbOperation(() => Company.findById(id));

    if (!companyDataById) {
      return res.status(404).json({
        success: false,
        message: "Company not found"
      });
    }

    res.status(200).json({
      success: true,
      data: companyDataById
    });
  } catch (error) {
    console.error('Error fetching company by ID:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch company data",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    const userId = req.id;

    if (!companyName) {
      return res.status(400).json({
        success: false,
        message: "Company Name is required!"
      });
    }

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }

    let company = await retryDbOperation(() => Company.findOne({ name: companyName }));

    if (company) {
      return res.status(400).json({
        success: false,
        message: "Company with this name already exists!"
      });
    }

    company = await retryDbOperation(() => Company.create({
      name: companyName,
      user: userId
    }));

    res.status(201).json({
      success: true,
      message: "Company registered successfully!",
      data: company,
    });
  } catch (error) {
    console.error('Error registering company:', error);
    res.status(500).json({
      success: false,
      message: "Failed to register company",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const updatedCompany = async (req, res) => {
  try {
    const { name, website, location, description } = req.body;
    const companyId = req.params.id;
    const userId = req.id;

    if (!companyId) {
      return res.status(400).json({
        success: false,
        message: 'Company ID is required!'
      });
    }

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
    }

    // Check if company exists and belongs to user
    const existingCompany = await retryDbOperation(() => Company.findById(companyId));

    if (!existingCompany) {
      return res.status(404).json({
        success: false,
        message: 'Company not found!'
      });
    }

    if (existingCompany.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this company'
      });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (website) updateData.website = website;
    if (location) updateData.location = location;
    if (description) updateData.description = description;

    const company = await retryDbOperation(() => Company.findByIdAndUpdate(
      companyId,
      updateData,
      { new: true, runValidators: true }
    ));

    res.status(200).json({
      success: true,
      message: "Company data updated successfully!",
      data: company
    });
  } catch (error) {
    console.error('Error updating company:', error);
    res.status(500).json({
      success: false,
      message: "Failed to update company",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};
