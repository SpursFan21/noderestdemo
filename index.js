// Index.js
 
const express = require('express');
const mongoose = require('mongoose');
 
//const usersRouter = require('./routes/userAPI');
 
require('dotenv').config(); //for using variables from .env file.
 
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