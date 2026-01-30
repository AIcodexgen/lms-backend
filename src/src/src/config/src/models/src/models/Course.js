const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    isActive: Boolean,
    createdBy: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
