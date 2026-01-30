const express = require("express");
const Course = require("../models/Course");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = express.Router();

// Admin creates course
router.post("/", auth, role("admin"), async (req, res) => {
  const { title, description, isActive } = req.body;

  const course = await Course.create({
    title,
    description,
    isActive: isActive ?? true,
    createdBy: req.user.id
  });

  res.json(course);
});

// Learners view active courses
router.get("/", async (req, res) => {
  const courses = await Course.find({ isActive: true }).sort({ createdAt: -1 });
  res.json(courses);
});

module.exports = router;
