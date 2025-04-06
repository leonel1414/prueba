require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded(extendsed = false));

const layouts = require('express-ejs-layouts');
app.use(layouts);
app.set('layout','layouts/layout');

app.use(express.static(path.join(__dirname,'public')));

const mainRouter = require('./src/routers/main.router');
app.use('/', mainRouter);

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'src/views'));



app.use("/productos",require('./src/routers/productos.router'));
app.use("/contacto",require('./src/routers/contacto.router'));
app.use("/categorias",require('./src/routers/categorias.router'));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>console.log(`http://localhost:${PORT}`));

