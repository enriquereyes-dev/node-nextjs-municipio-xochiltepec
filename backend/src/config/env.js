require('dotenv').config();

const env = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGODB_URI,
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
};

const validarVariablesEntorno = () => {
    const variablesRequeridas = ['MONGODB_URI'];

    variablesRequeridas.forEach((variable) => {
        if (!process.env[variable]) {
            throw new Error(`Falta configurar la variable de entorno: ${variable}`);
        }
    });
};

module.exports = {
    env,
    validarVariablesEntorno,
};