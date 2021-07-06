const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    project: {
        type: String,
        required: true
    },

    laboratory: {
        type: String,
        required: true
    }

})

module.exports = model('Portfolio', schema)