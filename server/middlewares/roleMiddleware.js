import User from "../Model/Users.js";

export const isRecruiter = async (req, res, next) => {
  try {
    const userId = req.id;
    
    if (!userId) {
      return res.status(401).json({
        message: 'User not authenticated',
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    if (user.role !== 'Recruiter') {
      return res.status(403).json({
        message: 'Access denied. Recruiter role required.',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};

export const isStudent = async (req, res, next) => {
  try {
    const userId = req.id;
    
    if (!userId) {
      return res.status(401).json({
        message: 'User not authenticated',
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    if (user.role !== 'Student') {
      return res.status(403).json({
        message: 'Access denied. Student role required.',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}; 