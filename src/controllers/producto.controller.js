const querystring = require('querystring');
const model = require('../models/product');

const create = (req,res) =>{
    res.render('productos/create');
}

const store = async (req,res) => {
    const {name} = req.body;

    try {

        const result = await model.store(name);

        console.log(result);

        res.redirect('/productos');

    } catch (error) {

        console.error(error);

        res.status(500).send('Error al crear el producto');
    }

};

const getProductos = async (req, res) => {
    try {

        const productos = await model.findAll();
        res.render('productos', { productos });

    } catch (error) {
        
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};

const getProductosId =  (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
    .then(res => res.json())
    .then(producto => res.json(producto));
};

module.exports = {
    getProductos,
    getProductosId,
    create,
    store
};

//12:02