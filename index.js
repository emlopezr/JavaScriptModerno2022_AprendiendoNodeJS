import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar Pug
app.set('view engine', 'pug');

// Middlewere para obtener el año actual
app.use((request, response, next) => {
    response.locals.currentYear = new Date().getFullYear();
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