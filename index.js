require('dotenv').config();

const express = require('express');

const app = express();


const methodOverride = require('method-override');


app.use(methodOverride('_method'));


const layouts = require('express-ejs-layouts');


const path = require('path');


app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname,'public')));


app.set('view engine','ejs');
app.set('views', path.join(__dirname,'src/views'));


app.use(layouts);
app.set('layout','layouts/layout');


const mainRouter = require('./src/routers/main.router');
app.use('/', mainRouter);


app.use("/productos",require('./src/routers/productos.router'));
app.use("/contacto",require('./src/routers/contacto.router'));
app.use("/categorias",require('./src/routers/categorias.router'));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>console.log(`http://localhost:${PORT}`));

