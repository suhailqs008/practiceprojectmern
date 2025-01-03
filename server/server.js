require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students");
const cors = require("cors");
const { connection } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DataBase");
  } catch (error) {
    console.log(error);
    console.log("Couldn't connect to DataBase");
  }
  console.log(`Server running on port ${PORT}`);
});
