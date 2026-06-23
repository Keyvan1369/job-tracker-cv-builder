import express from "express";

import authMiddleware
from "../middleware/auth.middleware.js";

import {

  getJobs,

  createJob,

}

from "../controllers/jobs.controller.js";


const router = express.Router();




router.use(authMiddleware);


router.get(

  "/",

  getJobs

);


router.post(

  "/",

  createJob

);


export default router;