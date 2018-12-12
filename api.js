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

// app.get('/teams', (req, res) => {
//   Player.find
// })

app.get('/players', (req, res) => {
  Player.find({})
    .then(doc => res.send(doc));
})

app.get('/players/:id', (req, res) => { 
  const {id} = req.params;
  console.log(id)
  Player.findById({_id: id})
    .then(doc => res.send(doc));
})

app.post('/players', (req, res) => {
  // create a new team
  const { player_id,
    afl_id,
    first_name,
    last_name,
    afl_team,
    list_status,
    afl_number,
    dob,
    height,
    weight,
    jt_state,
    junior_team,
    afl_games,
    afl_goals } = req.body;

  const player = new Player({
    player_id,
    afl_id,
    first_name,
    last_name,
    afl_team,
    list_status,
    afl_number,
    dob,
    height,
    weight,
    jt_state,
    junior_team,
    afl_games,
    afl_goals
  });
  player.save()
    .then(doc => res.send(doc));
});

app.delete('/players/:id', (req, res) => {
  // remove specific player
  const { id } = req.params;
  Player.findOneAndRemove({ _id: id })
    .then(doc => res.send(doc));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});