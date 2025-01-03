const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  guardianName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  class: {
    type: String,
    enum: ["class-1", "class-2", "class-3", "class-4"],
    required: true,
  },
  admissionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("admission", studentSchema);
