const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {

    // Extraer username y password
    const { username, password } = req.body;
    
    try {
        // Revisar que el usuario registrado sea unico        
        let usuario = await Usuario.findOne({ username });

        if(usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        // guardar usuario
        await usuario.save();

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}