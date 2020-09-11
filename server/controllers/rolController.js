const Rol = require('../models/Rol');

exports.crearRol = async (req, res) => {    
    try {
        // Crear un nuevo rol
        const rol = new Rol(req.body);

        // Guardamos el rol
        rol.save();
        res.json(rol);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtiene todos los roles
exports.obtenerRoles = async (req, res) => {
    try {
        const roles = await Rol.find();
        res.json({ roles });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

// Actualiza un rol
exports.actualizarRol = async (req, res) => {
    try {
        // revisar el ID
        let rol = await Rol.findById(req.params.id);

        // Si el rol existe o no
        if(!rol) {
            return res.status(404).json({msg: 'Rol no encontrado'});
        }

        // Actualizar
        rol = await Rol.findOneAndUpdate({ _id: req.params.id }, { new: true });
        res.json({ rol });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}

// Elimina un rol por su ID
exports.eliminarRol = async (req, res) => {
    try {
        // revisar el ID
        let rol = await Rol.findById(req.params.id);

        // Si el rol existe o no
        if(!rol) {
            return res.status(404).json({msg: 'Rol no encontrado'});
        }

        // Eliminar el Rol
        await Rol.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Rol eliminado' })

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}