import Job from "../models/job.model.js";
import CV from "../models/cv.model.js";

export const getDashboardStats = async (req, res) => {
  try {

    const userId = req.user.userId;

    const jobs = await Job.countDocuments({
      user: userId,
    });

    const cvs = await CV.countDocuments({
      user: userId,
    });

    const interviews = await Job.countDocuments({
      user: userId,
      status: "Interview",
    });

    const offers = await Job.countDocuments({
      user: userId,
      status: "Offer",
    });

    res.json({
      jobs,
      cvs,
      interviews,
      offers,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};