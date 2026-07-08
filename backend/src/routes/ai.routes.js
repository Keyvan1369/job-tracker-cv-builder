import express from "express";
import { aiEngine } from "../controllers/ai.controller.js";
import  protect  from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, aiEngine);

export default router;