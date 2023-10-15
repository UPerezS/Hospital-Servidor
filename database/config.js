const mongoose = require('mongoose');

// Asigna directamente la cadena de conexión
const DB_MONGO = 'mongodb://localhost:27017/medico';

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      //useCreateIndex: true,
    });
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error(error);
    throw new Error('Error al conectar con la base de datos');
  }
};

module.exports = {
  dbConnection,
};
