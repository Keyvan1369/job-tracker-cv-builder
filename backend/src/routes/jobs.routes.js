import express from "express";

import authMiddleware
from "../middleware/auth.middleware.js";

import {getJobs,createJob,updateJob,deleteJob} from "../controllers/jobs.controller.js";


const router = express.Router();

router.use(authMiddleware);

router.get("/",getJobs);

router.post("/",createJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);


export default router;