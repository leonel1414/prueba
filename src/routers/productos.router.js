const express = require('express');
const controller = require('../controllers/producto.controller');
const router = express.Router();

router.get('/create',controller.create);
router.post('/',controller.store);


router.get('/',controller.getProductos);
router.get('/:id',controller.getProductosId);

router.get('/:id/edit',controller.edit);
router.put('/:id',controller.update);

router.delete('/:id',controller.destroy);

module.exports = router;


