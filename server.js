// entry point
const express = require('express');
const { createServer } = require('node:http');
const path = require('path');
const apiAuthRoutes = require('./src/routes/api/v1/auth');
const pageRoutes = require('./src/routes/pages');

// mongodb
const mongoose = require('mongoose');
const dbhost = '127.0.0.1';
const dbport = '27017';
const dbname = 'tictacs';

// app instance
const app = express();
const port = 3000;

// http server
const server = createServer(app);

// middleware and api routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json parsing
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/v1/auth', apiAuthRoutes);
app.use('/', pageRoutes);

async function main () {
  // connect to mongodb server
  try {
    await mongoose.connect(`mongodb://${dbhost}:${dbport}/${dbname}`, {
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout
    });
    console.log('Connected successfully!');
  } catch (error) {
    console.error('Cannot connect to MongoDB', error);
    throw error;
  }
}

// connect to db, then start server
main()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to server', error);
  });
