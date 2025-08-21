const querystring = require('querystring');


const create = (req,res) =>{
    res.render('productos/create');
}

const store = (req,res) => {
    const {name} = req.body;

}

const getProductos =  (req, res) => {
    const query = querystring.stringify(req.query);

    //const limit = req.query.limit;
    fetch('https://fakestoreapi.com/products?' + query)
    .then(res => res.json())
    .then(productos => {
        res.render('productos',{productos})
    });
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