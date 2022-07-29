import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Index');
})

router.get('/nosotros', (request, response) => {
    response.send('Nosotros');
})

router.get('/contacto', (request, response) => {
    response.send('Contacto');
})

export default router;