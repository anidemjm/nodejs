const mongoose = require('mongoose');

const RolSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('Rol', RolSchema);