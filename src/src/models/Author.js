const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    authorname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', Schema)