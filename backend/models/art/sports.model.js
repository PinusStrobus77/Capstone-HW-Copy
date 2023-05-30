const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    imgUrl:{type: String},
    address:{type: String},
    website:{type: String},
    category:{type: String}

});

const Sports = mongoose.model('Sports', sportsSchema);

module.exports =   Sports
