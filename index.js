import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Agregar router
app.use('/', router);

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})