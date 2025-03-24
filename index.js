require('dotenv').config();
const express = require('express');
const app = express();

const mainRouter = require('./src/routers/main.router');
app.use('/', mainRouter);


app.use("/Productos",require('./src/routers/productos.router'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>console.log(`http://localhost:${PORT}`));

