
const model = require('../models/product');
const modelCategory = require('../models/category');

const create = async (req,res) =>{

    try {

        const categorias = await modelCategory.findAll();
        res.render('productos/create', { categorias });

    } catch (error) {

        console.error(error);
        res.status(500).send('Error en categorias');
    }
}

const store = async (req,res) => {
    const {name,categoryId} = req.body;

    try {

        const result = await model.create({name,categoryId});

        console.log(result);

        res.redirect('/productos');

    } catch (error) {

        console.error(error);

        res.status(500).send('Error al crear el producto');
    }
};

const getProductos = async (req, res) => {
    try {

        const productos = await model.findAll({
            include: "category"
        });
        res.render('productos/index', { productos });

    } catch (error) {

        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};

const getProductosId = async (req, res) => {

    const {id} = req.params;

    try {
        const producto = await model.findByPk(id);
        res.render('productos/show', { producto });

        if(!producto){
            return res.status(404).send('Producto no encontrado');
        }

    } catch (error) {

        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};

const edit = async (req, res) =>{
        const {id} = req.params;

    try {
        const producto = await model.findById(id);
        res.render('productos/edit', { producto });

        if(!producto){
            return res.status(404).send('Producto no encontrado');
        }

    } catch (error) {

        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};

const update = async (req , res) =>{
        const {id} = req.params;
        const {name} = req.body;

    try {
        const result = await model.update(id, name);
        res.redirect('/productos');

    } catch (error) {

        console.error(error);
        res.status(500).send('Error al actualizar el producto');
    }
};

const destroy = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await model.destroy(id);
        res.redirect('/productos');

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el producto');
    }
};

module.exports = {
    getProductos,
    getProductosId,
    create,
    store,
    edit,
    update,
    destroy
};

