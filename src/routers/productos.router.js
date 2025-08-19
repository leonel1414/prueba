const express = require('express');
const controller = require('../controllers/producto.controller');
const router = express.Router();

router.get('/create',controller.create);
router.post('/',controller.store);


router.get('/',controller.getProductos);
router.get('/:id',controller.getProductosId);

module.exports = router;


//14:58