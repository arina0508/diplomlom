const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'online_rep',
  password: '1',
  port: 5432,
});

module.exports = pool;