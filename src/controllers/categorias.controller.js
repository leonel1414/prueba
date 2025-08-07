/*const categorias = [
    {id:1,nombre:'categoria 1'},
    {id:2,nombre:'categoria 2'},
    {id:3,nombre:'categoria 3'}
];*/
const fs = require('fs');
const path = require('path');

let categorias = [];


const index = (req,res) => {
    // de un archivo JSON a un array
    const categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.js'), 'utf-8'));
    res.render('categorias/index',{categorias});
};

const show = (req,res) => {

    const categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.js'), 'utf-8'));

    const {id} = req.params;
    const categoria = categorias.find(categoria => categoria.id == id);
    console.log(categoria);

    if(!categoria){
        return res.status(404).send('Categoria no encontrada');
    }
    
    res.render('categorias/show',{categoria});
};

const create = (req,res) => {
    res.render('categorias/create');
};

const store = (req,res) => {
    const {nombre} = req.body;
    const categoria ={
        id: categorias.length + 1,
        nombre,
    };
    categorias.push(categoria);

    // guardar archivo en JSON 
    fs.writeFileSync(path.resolve(__dirname, '../../categorias.js'),JSON.stringify(categorias))


    res.redirect('/categorias');
}

const edit = (req,res) =>{

    const categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.js'), 'utf-8'));

    const {id} = req.params;
    const categoria = categorias.find(categoria => categoria.id == id);
    
    if(!categoria){
        return res.status(404).send('Categoria no encontrada');
    }
    
    res.render('categorias/edit', {categoria});
}

const update = (req, res) => {
    const categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.js'), 'utf-8'));

    const {id} = req.params;
    const {nombre} = req.body;
    const categoria = categorias.find(categoria => categoria.id == id);
    
    if(!categoria){
        return res.status(404).send('Categoria no encontrada');
    }
    
    categoria.nombre = nombre;
    // guardar archivo en JSON
    fs.writeFileSync(path.resolve(__dirname, '../../categorias.js'), JSON.stringify(categorias));
    res.redirect('/categorias');
}

const destroy = (req, res) => {
    const categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.js'), 'utf-8'));

    const {id} = req.params;
    const categoriaIndex = categorias.findIndex(categoria => categoria.id == id);
    
    if(categoriaIndex === -1){
        return res.status(404).send('Categoria no encontrada');
    }
    
    categorias.splice(categoriaIndex, 1);

    // guardar archivo en JSON
    fs.writeFileSync(path.resolve(__dirname, '../../categorias.js'), JSON.stringify(categorias));

    res.redirect('/categorias');

    
}

module.exports = {
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy
};

