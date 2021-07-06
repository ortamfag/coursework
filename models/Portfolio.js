const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },

    NSP: {
        type: String,
        required: true
    },

    group: {
        type: String,
        required: true
    },

    faculty: {
        type: String,
        required: true
    },

    customer: {
        type: String
    },

    curator: {
        type: String
    },

    laboratory: {
        type: String
    }

})

module.exports = model('Portfolio', schema)