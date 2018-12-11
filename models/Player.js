const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    player_id: String,
    afl_id: String,
    first_name: String,
    last_name: String,
    afl_team: String,
    list_status: String,
    afl_number: String,
    dob: String,
    height: String,
    weight: String,
    jt_state: String,
    junior_team: String,
    afl_games: String,
    afl_goals: String
});

module.exports = mongoose.model('Player', playerSchema);