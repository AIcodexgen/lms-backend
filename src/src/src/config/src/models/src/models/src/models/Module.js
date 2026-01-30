const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
  courseId: String,
  title: String,
  type: String,
  content: String,
  order: Number
});

module.exports = mongoose.model("Module", ModuleSchema);
