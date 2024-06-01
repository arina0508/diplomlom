// server/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getStudentByEmail, createStudent } = require('../models/student');

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingStudent = await getStudentByEmail(email);
    if (existingStudent) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newStudent = await createStudent(email, hashedPassword);
    const token = jwt.sign({ email: newStudent.email, id: newStudent.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(201).json({ result: newStudent, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await getStudentByEmail(email);
    if (!student) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, student.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ email: student.email, id: student.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ result: student, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  register,
  login,
};
