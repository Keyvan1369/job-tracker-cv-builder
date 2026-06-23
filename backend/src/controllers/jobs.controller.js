import Job from "../models/Job.js";


// GET JOBS

export const getJobs = async (

  req,

  res

) => {

  try {

    const jobs = await Job.find({

      user: req.user.userId,

    }).sort({

      createdAt: -1,

    });

    res.json(jobs);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};



// CREATE JOB

export const createJob = async (

  req,

  res

) => {

  try {

    const {

      company,

      title,

      status,

    } = req.body;


    const job = await Job.create({

      company,

      title,

      status,

      user:

        req.user.userId,

    });


    res.status(201).json(job);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};
export const updateJob = async (
  req,
  res
) => {

  try {

    const job = await Job.findOne({

      _id: req.params.id,

      user: req.user.userId,

    });

    if (!job) {

      return res.status(404).json({

        message: "Job not found",

      });

    }


    job.status =
      req.body.status || job.status;


    await job.save();


    res.json(job);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};
export const deleteJob = async (
  req,
  res
) => {

  try {

    const job = await Job.findOne({

      _id: req.params.id,

      user: req.user.userId,

    });

    if (!job) {

      return res.status(404).json({

        message: "Job not found",

      });

    }


    await job.deleteOne();


    res.json({

      message: "Job deleted",

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};