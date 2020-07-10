/* librerias */
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const config = require('./config/config');

/* inicializacion */
const app = express();
require('./config/database');

/* middelwares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

/* rutas */
app.use('/', require('./routes/auth'));
app.use('/user', require('./routes/users'));
app.use('/product', require('./routes/products'));

/* servidor */
app.listen(config.port, () => {
    console.log('server listen:', config.port);
});