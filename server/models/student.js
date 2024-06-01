const pool = require('../config/db');

const getStudentByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM Student WHERE email = $1', [email]);
  return result.rows[0];
};

const createStudent = async (email, password) => {
  const result = await pool.query(
    'INSERT INTO Student (email, password) VALUES ($1, $2) RETURNING *',
    [email, password]
  );
  return result.rows[0];
};

module.exports = {
  getStudentByEmail,
  createStudent,
};