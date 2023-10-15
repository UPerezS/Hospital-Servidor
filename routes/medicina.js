const express = require('express');
const router = express.Router();
const medicinaController = require('../controllers/medicinaController');

// POST para registrar una medicina
router.post('/', medicinaController.registrarMedicina);

// GET para obtener medicinas con filtros opcionales
router.get('/', medicinaController.obtenerMedicinas);

// PUT para actualizar una medicina por ID
router.put('/:id', medicinaController.actualizarMedicina);

// GET para obtener una medicina por ID
router.get('/:id', medicinaController.obtenerMedicina);

// DELETE para eliminar una medicina por ID
router.delete('/:id', medicinaController.eliminarMedicina);

// GET para obtener medicinas con filtros
router.get('/filtrar', medicinaController.filtrarMedicinas);

module.exports = router;
