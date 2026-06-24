import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";
import cvRoutes from "./routes/cv.routes.js";

const app = express();

app.use(cors());

app.use(express.json());




app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobsRoutes);

app.use("/api/cvs", cvRoutes);


export default app;