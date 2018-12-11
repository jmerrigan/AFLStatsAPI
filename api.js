const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/afldb');
 
mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
  });
  
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
  });

const Team = require("./models/Team");

const app = express();
const port = 5000;

app.use(express.json());

app.get('/teams', (req, res) => {
  Team.find({})
    .then(doc => res.send(doc));
})

app.get('/teams/:name', (req, res) => {
  const {name} = req.params;
  Team.findOne({name})
    .then(doc => res.send(doc));
})

app.post('/teams', (req, res) => {
  // create a new team
  const { name, location, logo, home_ground } = req.body;
  const team = new Team({
    name,
    location,
    logo,
    home_ground
  });
  team.save()
    .then(doc => res.send(doc));
});

app.delete('/team/:name', (req, res) => {
  // remove specific team
  const { name } = req.params;
  Pokemon.findOneAndRemove({ name })
    .then(doc => res.send(doc));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});