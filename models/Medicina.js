const mongoose = require('mongoose');

const MedicinaSchema = mongoose.Schema({
    nombreMedicina: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    viaAdministracion: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
    fechaEntrega: {
        type: Date,
        default: Date.now()
    },
    medicamentoDisponible:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Medicina', MedicinaSchema);