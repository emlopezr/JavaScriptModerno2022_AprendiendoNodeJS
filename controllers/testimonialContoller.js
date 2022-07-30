import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (request, response) => {
    const { nombre, correo, mensaje } = request.body;

    // Validar
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo está vacío' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' });
    }

    if (errores.length > 0) {
        // Conseguir los testimoniales de la BD
        const testimoniales = await Testimonial.findAll();


        // Mosntrar la vista con errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // OK! -> Insertar en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            // Ya insertó -> Redireccionar al usuario
            response.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}