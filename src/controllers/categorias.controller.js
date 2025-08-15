
const fs = require('fs');
const path = require('path');
const model = require('../models/category');

let categorias = [];

const create = (req, res) => {
    res.render("categorias/create");
};

const store = (req, res) => {
    const { name } = req.body;

    model.create(name,(error,id) =>{

        if(error){
            //return console.error(error);
            return res.status(500).send("Error al crear la categoría");
        }
        console.log(`Categoría creada con ID: ${id}`);
        res.redirect("/categorias");
    });

};

const index = (req, res) => {

    model.findAll((error, categorias) => {

        if(error){
            return res.status(500).send("Error al obtener las categorías");
        }
        res.render("categorias/index", { categorias });

    });
};

const show = (req, res) => {

    const { id } = req.params;

    model.findById(id,(error, categoria)=>{
        if(error){
            return res.status(500).send("Error al obtener las categorías");
        }

        if(!categoria){
            return res.status(404).send("No existe la categoria");
        }

        res.render("categorias/show", { categoria });

    });
};


const edit = (req, res) => {

    const { id } = req.params;

    model.findById(id,(error, categoria)=>{
        if(error){
            return res.status(500).send("Error al obtener las categorías");
        }

        if(!categoria){
            return res.status(404).send("No existe la categoria");
        }

        res.render("categorias/edit", { categoria });

    });
};

const update = (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    model.update(id,name,(error,changes) =>{

        if(error){
            return res.status(500).send("Error al actualizar la categoría");
        }

        console.log(changes);
        
        res.redirect("/categorias");
    });
};

const destroy = (req, res) => {
    categorias = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
    );

    const { id } = req.params;

    const index = categorias.findIndex((categoria) => categoria.id == id);

    if (index == -1) {
        return res.status(404).send("No existe la categoria");
    }

    categorias.splice(index, 1);

    fs.writeFileSync(
        path.resolve(__dirname, "../../categorias.json"),
        JSON.stringify(categorias)
    );

    res.redirect("/categorias");
};

module.exports = {
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy
};
