import CV from "../models/cv.model.js";

export const createCV = async (req, res) => {
  try {
    const cv = await CV.create({
      ...req.body,
      user: req.user.userId,
    });

    res.status(201).json(cv);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCVs = async (req, res) => {
  try {
    const cvs = await CV.find({
      user: req.user.userId,
    });

    res.json(cvs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateCV = async (
  req,
  res
) => {
  try {
    const cv =
      await CV.findOneAndUpdate(
        {
          _id: req.params.id,
          user:
            req.user.userId,
        },
        req.body,
        {
          new: true,
        }
      );

    res.json(cv);
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

export const deleteCV = async (
  req,
  res
) => {
  try {
    await CV.findOneAndDelete({
      _id: req.params.id,
      user:
        req.user.userId,
    });

    res.json({
      message:
        "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

export const getCVById = async (req, res) => {
  try {
    const cv = await CV.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!cv) {
      return res.status(404).json({
        message: "CV not found",
      });
    }

    res.json(cv);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};