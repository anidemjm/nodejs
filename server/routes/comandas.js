const express = require('express');
const router = express.Router();
const comandasController = require('../controllers/comandasController');
const auth = require('../middleware/auth');

// Crea comandas
// api/comandas
router.post('/', auth, comandasController.crearComanda);

// Obtener todos las comandas
router.get('/', auth, comandasController.obtenerComandas);

// Actualizar comanda via ID
router.put('/:id', auth, comandasController.actualizarComanda);

// Eliminar un comanda
router.delete('/:id', auth, comandasController.eliminarComanda);

module.exports = router;