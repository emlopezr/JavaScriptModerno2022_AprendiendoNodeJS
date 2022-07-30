import { Viaje } from "../models/viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio = async (request, response) => {


    try {
        // Consultar tres viajes y tres testimoniales -> Hacer ambas consultas a la vez
        const promiseDB = [Viaje.findAll({ limit: 3 }), Testimonial.findAll({ limit: 3 })]
        const [viajes, testimoniales] = await Promise.all(promiseDB)

        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
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

const paginaTestimoniales = async (request, response) => {
    try {
        // Conseguir los testimoniales de la BD
        const testimoniales = await Testimonial.findAll();

        response.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }

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