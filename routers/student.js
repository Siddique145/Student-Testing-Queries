// routes/students.js
import express from 'express';
import Student from '../models/student.js'; // Import the Student model

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    console.log("Querying for all students...");
    const students = await Student.find({});
    console.log("Found students:", students); // Log the result
    res.json(students);
  } catch (err) {
    console.error("Error fetching students:", err); // Log the error
    res.status(500).json({ message: "Error fetching students" });
  }
});

export default router;
