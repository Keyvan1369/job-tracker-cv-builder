import express from "express";

import {
  createCV,
  getCVs,
} from "../controllers/cv.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createCV);

router.get("/", getCVs);

export default router;