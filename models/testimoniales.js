import sequelize from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: sequelize.STRING,
    },
    correo: {
        type: sequelize.STRING,
    },
    mensaje: {
        type: sequelize.STRING,
    },
})