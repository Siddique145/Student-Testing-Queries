import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'; // Import dotenv to load the environment variables
import studentRoutes from './routers/student.js'

dotenv.config(); // Load environment variables from .env file

const port = 4000;
const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(morgan('dev')); // HTTP request logging
app.use(cors()); // Enable Cross-Origin Requests

// MongoDB Connection
mongoose
  .connect(process.env.MONGODBURI)
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log("MongoDB connection error: " + err));

// Routes
app.use('/students', studentRoutes);
// app.get('/', (req, res) => {
//   res.send("Hello App Programming Interface Running Well Student");
// });

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
