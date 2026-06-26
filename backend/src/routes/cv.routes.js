import express from "express";

import { createCV , getCVs , updateCV , deleteCV} from "../controllers/cv.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();


router.use(authMiddleware);

router.post("/", createCV);

router.get("/", getCVs);

router.put("/:id",updateCV);

router.delete("/:id", deleteCV);



export default router;