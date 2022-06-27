const mongoose = require('mongoose')

const Schema = new mongoose.Schema ({
    Bookname: {
        type: String,
        required: true
    }, 
    Authorname: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    }

})