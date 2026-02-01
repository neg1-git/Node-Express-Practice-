const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'jugurtu',     
  host: 'localhost',
  port: 5432,
  database: 'todo_db'    
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};