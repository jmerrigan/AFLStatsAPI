const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/afldb');
 
mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
  });
  
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
  });

const Player = require("./models/Player");

const app = express();
const port = 5000;

app.use(express.json());

app.get('/players', (req, res) => {
  Player.find({})
    .then(doc => res.send(doc));
})

app.get('/players/:name', (req, res) => {
  const {name} = req.params;
  Player.findOne({name})
    .then(doc => res.send(doc));
})

app.post('/players', (req, res) => {
  // create a new team
  const { name, location, logo, home_ground } = req.body;
  const player = new Player({
    name,
    location,
    logo,
    home_ground
  });
  team.save()
    .then(doc => res.send(doc));
});

app.delete('/player/:name', (req, res) => {
  // remove specific team
  const { name } = req.params;
  Player.findOneAndRemove({ name })
    .then(doc => res.send(doc));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});