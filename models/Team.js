const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    location: String,
    logo: String,
    home_ground: String
});

module.exports = mongoose.model('Team', teamSchema);