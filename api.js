const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/afldb');
 
mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
  });
  
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
  });

const Teams = require("./models/Team");

const app = express();
const port = 5000;

app.use(express.json());

