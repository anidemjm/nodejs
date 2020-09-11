const Comanda = require('../models/Comanda');

exports.crearComanda = async (req, res) => {
    try {
        // Crear una nueva comanda
        const comanda = new Comanda(req.body);

        // Guardamos la comanda
        comanda.save();
        res.json(comanda);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtiene todos las comandas
exports.obtenerComandas = async (req, res) => {
    try {
        const comandas = await Rol.find();
        res.json({
            comandas
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

// Actualiza una comanda
exports.actualizarComanda = async (req, res) => {
    try {
        // revisar el ID
        let comanda = await Comanda.findById(req.params.id);

        // Si la comanda existe o no
        if (!comanda) {
            return res.status(404).json({
                msg: 'Comanda no encontrado'
            });
        }

        // Actualizar
        comanda = await Comanda.findOneAndUpdate({
            _id: req.params.id
        }, {
            new: true
        });
        res.json({
            comanda
        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}

// Elimina un comanda por su ID
exports.eliminarComanda = async (req, res) => {
    try {
        // revisar el ID
        let comanda = await Comanda.findById(req.params.id);

        // Si comanda existe o no
        if (!comanda) {
            return res.status(404).json({
                msg: 'Comanda no encontrado'
            });
        }

        // Eliminar Comanda
        await Comanda.findOneAndRemove({
            _id: req.params.id
        });
        res.json({
            msg: 'Comanda eliminado'
        })

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}