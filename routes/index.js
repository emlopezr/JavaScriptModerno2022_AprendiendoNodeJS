import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.render('inicio');
})

router.get('/nosotros', (request, response) => {
    const viajes = 'Cancún'

    response.render('nosotros', {
        viajes
    });
})

router.get('/contacto', (request, response) => {
    response.send('Contacto');
})

export default router;