

const model = require('../models/category');



const create = (req, res) => {
    res.render("categorias/create");
};

const store = async (req, res) => {
    const { name } = req.body;

    try {

        const categorias = await model.create({name});
        res.redirect('/categorias');

    } catch (error) {

        console.error(error);
        return res.status(500).send("Error al obtener las categorías");
    }
    



    /*   model.create(name,(error,id) =>{

        if(error){
            //return console.error(error);
            return res.status(500).send("Error al crear la categoría");
        }
        console.log(`Categoría creada con ID: ${id}`);
        res.redirect("/categorias");
    });
*/
};

const index = async (req, res) => {

    try {

        const categorias = await model.findAll();
        res.render("categorias/index", { categorias });

    } catch (error) {
        
        console.error(error);
        return res.status(500).send("Error al obtener las categorías");
    }


    /*
    model.findAll((error, categorias) => {

        if(error){
            return res.status(500).send("Error al obtener las categorías");
        }
        res.render("categorias/index", { categorias });

    });
*/
};

const show = async (req, res) => {

    const { id } = req.params;

    try {

        const categoria = await model.findByPk(id);
        res.render("categorias/show", { categoria });

        if(!categoria){
            return res.status(404).send("No existe la categoria");
        }
        
    } catch (error) {
        
        console.error(error);
        return res.status(500).send("Error al obtener las categorías");
    }



    /*
    model.findById(id,(error, categoria)=>{
        if(error){
            return res.status(500).send("Error al obtener las categorías");
        }

        if(!categoria){
            return res.status(404).send("No existe la categoria");
        }

        res.render("categorias/show", { categoria });

    });
    */
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

    const { id } = req.params;

    model.destroy(id,(error, changes) =>{
        if(error){
            return res.status(500).send("Error al eliminar la categoría");
        }

        console.log(`Categoría eliminada, cambios: ${changes}`);
        
        res.redirect("/categorias");
    });
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
