// index.js

const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb'); // MongoClient for separate MongoDB connection
const usersRouter = require('./routes/userAPI');

require('dotenv').config(); // For using variables from .env file

// Set up the express app
const app = express(); // Instantiates the express object
const port = process.env.PORT || 3000; // App runs on localhost:3000 in development environment

// Allows us to accept the data in JSON format
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB (Mongoose) is connected!");
}).catch((err) => {
  console.error("Error connecting to MongoDB with Mongoose: ", err);
});

// MongoClient connection
const uri = "mongodb+srv://12Batwom34:12Batwom34@dockerdatacluster.f3sgr.mongodb.net/?retryWrites=true&w=majority&appName=DockerDataCluster"; 

// Create a MongoClient with MongoClientOptions to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your MongoDB deployment using MongoClient!");
  } catch (error) {
    console.error("Error connecting to MongoDB using MongoClient: ", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Start the MongoClient connection
run().catch(console.dir);

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', usersRouter);
