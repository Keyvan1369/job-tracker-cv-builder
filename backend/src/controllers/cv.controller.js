import CV from "../models/cv.model.js";
import mongoose from "mongoose";

export const createCV = async (req, res) => {
  try {
    if (!req.body.fullName?.trim()) {
      return res.status(400).json({ message: "Full name is required" });
    }

    const cv = await CV.create({
      ...req.body,
      user: req.user.userId,
    });

    res.status(201).json(cv);
  } catch (error) {
    console.error("Create CV Error:", error);
    res.status(500).json({ message: "Failed to create CV" });
  }
};

export const getCVs = async (req, res) => {
  try {
    const cvs = await CV.find({ user: req.user.userId }).sort({ updatedAt: -1 });
    res.json(cvs);
  } catch (error) {
    console.error("Get CVs Error:", error);
    res.status(500).json({ message: "Failed to fetch CVs" });
  }
};

export const getCVById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid CV ID format" });
    }

    const cv = await CV.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!cv) {
      return res.status(404).json({ message: "CV not found" });
    }

    res.json(cv);
  } catch (error) {
    console.error("Get CV Error:", error);
    res.status(500).json({ message: "Failed to fetch CV" });
  }
};

export const updateCV = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid CV ID format" });
    }

    if (req.body.fullName !== undefined && !req.body.fullName?.trim()) {
      return res.status(400).json({ message: "Full name cannot be empty" });
    }

    const cv = await CV.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.userId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!cv) {
      return res.status(404).json({ message: "CV not found" });
    }

    res.json(cv);
  } catch (error) {
    console.error("Update CV Error:", error);
    res.status(500).json({ message: "Failed to update CV" });
  }
};

export const deleteCV = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid CV ID format" });
    }

    const cv = await CV.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!cv) {
      return res.status(404).json({ message: "CV not found" });
    }

    res.json({ message: "CV deleted successfully" });
  } catch (error) {
    console.error("Delete CV Error:", error);
    res.status(500).json({ message: "Failed to delete CV" });
  }
};