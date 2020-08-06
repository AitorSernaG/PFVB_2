const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const penyistaSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellidos: {
        type: String,
        trim: true
    },
    poblacion: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Penyista', penyistaSchema);