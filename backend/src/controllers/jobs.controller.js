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