// userModel.js
const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  age: Number,
});
 
// This translates to a schema named "users" inside mongoDB database
// Then we export this schema in our code base to make it available to other files in the codebase
module.exports = mongoose.model('User', userSchema);