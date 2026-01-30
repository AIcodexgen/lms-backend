const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  issuedAt: Date
});

module.exports = mongoose.model("Certificate", CertificateSchema);
