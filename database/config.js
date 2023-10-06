const mongoose= require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.DB_Connection, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });

        console.log('db conectada')

    }catch (error) {
        console.log(error);
        throw new Error('Error al conectar con la BD')
    }
}


module.exports = {
    dbConnection
}