const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },

    faculty: {
        type: String,
        required: true
    },

    number: {
        type: String,
    },

    curators: {
        type: String,
    }
})

module.exports = model('Laboratory', schema)