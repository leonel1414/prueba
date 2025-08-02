const categorias = [
    {id:1,nombre:'categoria 1'},
    {id:2,nombre:'categoria 2'},
    {id:3,nombre:'categoria 3'}];

const index = (req,res) => {
    res.render('categorias/index',{categorias});
};

const show = (req,res) => {
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
    res.redirect('/categorias');
}

const edit = (req,res) =>{
    const {id} = req.params;
    const categoria = categorias.find(categoria => categoria.id == id);
    
    if(!categoria){
        return res.status(404).send('Categoria no encontrada');
    }
    
    res.render('categorias/edit', {categoria});
}

module.exports = {
    index,
    show,
    create,
    store,
    edit
};

