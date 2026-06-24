import CV from "../models/cv.model.js";

export const createCV = async (
  req,
  res
) => {
  try {
    const cv = await CV.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(cv);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCVs = async (
  req,
  res
) => {
  try {
    const cvs = await CV.find({
      user: req.user.id,
    });

    res.json(cvs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};