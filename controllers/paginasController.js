import { Viaje } from "../models/viaje.js";

const paginaInicio = (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request, response) => {
    // Consultar la BD
    try {
        const viajes = await Viaje.findAll();

        response.render('viajes', {
            pagina: 'Próximos viajes',
            viajes
        });
    } catch (error) {
        console.log(error)
    }

}

const paginaTestimoniales = (request, response) => {
    response.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

// Muetra un viaje por su slug

const paginaDetalleViaje = async (request, response) => {
    const { slug } = request.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } })

        response.render('viaje', {
            pagina: `Viaje a ${viaje.titulo}`,
            viaje
        });
    } catch (error) {
        console.log(error)
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}