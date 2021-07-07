const {Schema, model} = require('mongoose')

const schema = new Schema({

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

module.exports = model('Curator', schema)