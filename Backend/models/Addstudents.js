const mongoose = require("mongoose"); // CJS

const AddstudentsSchema = mongoose.connect({
  name: String,
  email: String,
  password: String,
  grade: String,
  areaOfStudy: String,
  skills: Array,
  language: String,
  qualification: String,
  specialization: String,
  teachingExp: String,
  type: String,
  addData: String,
  timing: Array,
  videoLink: String,
  profilePhoto: String,
});

module.exports = mongoose.model("Addstudents", AddstudentsSchema);
