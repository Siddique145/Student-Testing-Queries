import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  scores: { type: Object, required: true }, // Object to hold the score data (English, Math, etc.)
  graduated: { type: Boolean, required: true },
  hobbies: { type: [String], default: [] } // Array of hobbies
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
