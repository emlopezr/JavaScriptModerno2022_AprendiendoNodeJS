import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la BD
db.authenticate()
    .then(() => console.log('BD conectada'))
    .catch(error => console.log(error))

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar Pug
app.set('view engine', 'pug');

// Middlewere para obtener el año actual
app.use((request, response, next) => {
    response.locals.currentYear = new Date().getFullYear();
    response.locals.nombreSitio = 'Agencia de Viajes';
    return next();
})

// Agregar router
app.use('/', router);

// Agregar la carpeta publica
app.use(express.static('public'));

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})