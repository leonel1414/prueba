const express = require('express');
const controller = require('../controllers/producto.controller');
const multer = require('multer');
const path = require('path');
const router = express.Router();

//const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });


router.get('/create',controller.create);
router.post('/',upload.single('image'),controller.store);


router.get('/',controller.getProductos);
router.get('/:id',controller.getProductosId);

router.get('/:id/edit',controller.edit);
router.put('/:id',controller.update);

router.delete('/:id',controller.destroy);

module.exports = router;


