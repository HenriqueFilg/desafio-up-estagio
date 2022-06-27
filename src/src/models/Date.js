const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    Date: {
        type: Date,
        required: String
    }
})

module.exports = mongoose.model('Date', Schema)