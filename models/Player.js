const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    player_id: Number,
    afl_id: Number,
    first_name: String,
    last_name: String,
    afl_team: String,
    list_status: String,
    afl_number: Number,
    dob: String,
    height: Number,
    weight: Number,
    jt_state: String,
    junior_team: String,
    afl_games: Number,
    afl_goals: Number
});

module.exports = mongoose.model('Player', playerSchema);