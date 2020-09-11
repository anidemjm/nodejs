const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rol',
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);