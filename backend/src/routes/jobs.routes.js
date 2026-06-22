import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Jobs route works ✅",
  });
});

export default router;