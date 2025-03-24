const express = require('express');
const controller = require('../controllers/producto.controller');
const router = express.Router();

router.get('/',controller.getProductos);

router.get('/:id',controller.getProductosId);

module.exports = router;
