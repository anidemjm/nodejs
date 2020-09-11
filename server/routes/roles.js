const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Crea roles
// api/roles
router.post('/', rolController.crearRol);

// Obtener todos los roles
router.get('/',  rolController.obtenerRoles);

// Actualizar rol via ID
router.put('/:id', rolController.actualizarRol);

// Eliminar un rol
router.delete('/:id', rolController.eliminarRol);

module.exports = router;