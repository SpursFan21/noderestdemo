// Index.js
 
const express = require('express');
const mongoose = require('mongoose');
 
const usersRouter = require('./routes/userAPI');
 
//require('dotenv').config(); //for using variables from .env file.
require('./config/config');
 
console.log(process.env.NODE_ENV);
 
console.log(process.env.MONGODB_URL);
 
// Set up the express app
const app = express();
const port = process.env.PORT || 3000;
 
// Allows us to accept the data in JSON format
app.use(express.json());
 
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB is connected!");
});
 
// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', usersRouter); 

//This enabled CORS, Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) 
//on a web page to be requested from another domain outside the domain from which the first resource was served
 
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
 
module.exports = app;