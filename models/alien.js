const mongoose = require('mongoose');

const alienScema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    tech: {
        type: 'String',
        require: true
    }
})

module.exports = mongoose.model('Alien',alienScema)