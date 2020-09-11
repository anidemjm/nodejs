const mongoose = require('mongoose');

const ComandaSchema = mongoose.Schema({
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    codigo: {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('Comanda', ComandaSchema);