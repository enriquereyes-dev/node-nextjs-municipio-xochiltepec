const app = require('./app');
const conectarBaseDatos = require('./config/db');
const { env, validarVariablesEntorno } = require('./config/env');

const iniciarServidor = async () => {
    try {
        validarVariablesEntorno();

        await conectarBaseDatos();

        app.listen(env.port, () => {
            console.log(`Servidor ejecutándose en http://localhost:${env.port}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error.message);
        process.exit(1);
    }
};

iniciarServidor();