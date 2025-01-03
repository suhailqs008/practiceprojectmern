const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.post("/students", async (req, res) => {
  try {
    const {
      name,
      age,
      guardianName,
      contactNumber,
      class: studentClass,
    } = req.body;
    const newStudent = new Student({
      name,
      age,
      guardianName,
      contactNumber,
      class: studentClass,
    });
    await newStudent.save();
    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  } catch (error) {
    res.status(500).json({ message: "Error adding student", error });
  }
});

router.get("/", async (req, res) => {
  res.status(200).send("HomePage");
});
router.get("/students/:class", async (req, res) => {
  try {
    const students = await Student.find({ class: req.params.class });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
});

module.exports = router;
