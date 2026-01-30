const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema(
  {
    userId: String,
    courseId: String,
    progress: Number,
    completed: Boolean
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
