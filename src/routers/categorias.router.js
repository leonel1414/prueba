const express = require('express');
const router = express.Router();

const controller = require('../controllers/categorias.controller');

router.get('/create',controller.create);
router.post('/', controller.store);
router.get('/', controller.index);
router.get('/:id', controller.show);

//editar
router.get('/:id/edit',controller.edit);
router.put('/:id', controller.update);

// Eliminar
router.delete('/:id',controller.destroy);

module.exports = router;
