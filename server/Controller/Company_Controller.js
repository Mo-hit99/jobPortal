import Company from "../Model/Company.js";

// get all data company
export const getCompanyData = async (req, res) => {
  try {
    const userId = req.id;
    const companyData = await Company.find({user:userId});
    res.status(200).json(companyData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// get data by id of company
export const getByIdCompanyData = async (req, res) => {
  try {
    const { id } = req.params;
    const companyDataById = await Company.findById(id);
    req.status(200).json(companyDataById);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({ message: "Company Name is required!" });
    }

    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res
        .status(400)
        .json({ message: "You cant register same company!" });
    }

   company = await Company.create({
      name: companyName,
      user:  req.id
    });
    console.log(company)
    res.status(201).json({
      message: "Company registered successfully!",
      company,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updatedCompany = async (req, res) => {
  try {
    const { name, website, location, description } = req.body;
    const file = req.file;
    const companyId = req.params.id;
    const company = await Company.findByIdAndUpdate(
       companyId ,
      { description, name, website, location },
      { new: true }
    );
     if(!company){
        return res.status(400).json({
            message:'Company not found!'
        })
     }
    res.status(201).json({ message: "company data updated!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
