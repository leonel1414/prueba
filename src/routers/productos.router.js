const express = require('express');
const controller = require('../controllers/producto.controller');
const multer = require('multer');
const path = require('path');
const router = express.Router();

//const upload = multer({ dest: 'uploads/' });

/*const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
*/

const storage = multer.memoryStorage();

const upload = multer({ storage, fileFilter: (req,file,cb) =>{
    /*
    if(path.extname(file.originalname) != ".jpg"){
        return cb(new Error('Solo se permiten archivos .jpg'));
    }

    if(file.mimetype != "image/jpeg" && file.mimetype != "image/jpeg"){
        return cb(new Error('Solo se permiten archivos .jpg'));
    }*/

    const fileTypes = /jpeg|jpg|png/;
    
    const mimetype = fileTypes.test(file.mimetype);

    const extname = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    if(mimetype && extname){
        return cb(null, true);
    }
    cb(new Error("Error: El archivo debe ser una imagen valida"), false);
    },
    limits:{fileSize: 1024 * 1024 * 5},
});


router.get('/create',controller.create);
router.post('/',upload.single('image'),controller.store);


router.get('/',controller.getProductos);
router.get('/:id',controller.getProductosId);

router.get('/:id/edit',controller.edit);
router.put('/:id',upload.single('image'),controller.update);

router.delete('/:id',controller.destroy);

module.exports = router;


