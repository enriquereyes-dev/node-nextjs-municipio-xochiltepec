const mongoose = require('mongoose');
const { env } = require('./env');

const conectarBaseDatos = async () => {
    try {
        const conexion = await mongoose.connect(env.mongoUri);

        console.log(`MongoDB conectado: ${conexion.connection.host}`);
    } catch (error) {
        console.error('Error al conectar MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = conectarBaseDatos;