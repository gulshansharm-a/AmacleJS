require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN || '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Handle MySQL connection errors
connection.connect((err) => {
  if (err) {
    throw new Error('Error connecting to MySQL:', err);
  }

  console.log('Connected to MySQL');
});

app.use(bodyParser.json());

// JWT Secret key
const jwtSecret = 'your_secret_key';

// Middleware for authentication
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  console.log("token for req", token)
  console.log("token for api", jwtSecret)
  if (!token) return res.sendStatus(401);

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

// Endpoint to create a table
app.post('/createtable', authenticateToken, (req, res) => {
  const createTableQuery = req.body.data;

  connection.query(createTableQuery, (err, results, fields) => {
    if (err) {
      console.error('Error creating table:', err);
      res.status(500).json({ message: 'Error creating table', error: { code: err.code, message: err.sqlMessage } });
    } else {
      console.log('Table created successfully fields: ', fields);
      res.json({ message: 'Table created', data: results, fields });
    }
  });
});

app.post('/getData', authenticateToken, (req, res) => {
  const fetchDataQuery = req.body.data;

  connection.query(fetchDataQuery, (err, results, fields) => {
    if (err) {
      console.error('Error fetching data from table:', err);
      res.status(500).json({ message: 'Error fetching data', error: { code: err.code, message: err.sqlMessage } });
    } else {
      console.log('Data fetched successfully');
      res.json({ data: results, fields });
    }
  });
});


// Close MySQL connection when the server is shutting down
process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
    } else {
      console.log('MySQL connection closed');
    }
    process.exit();
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
