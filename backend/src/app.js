const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { env } = require('./config/env');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(helmet());

app.use(
    cors({
        origin: env.frontendUrl,
        credentials: true,
    })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

if (env.nodeEnv === 'development') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de Xochiltepec Emblemático',
        documentacion: '/api/health',
    });
});

app.use('/api', healthRoutes);

app.use((req, res) => {
    res.status(404).json({
        mensaje: 'Ruta no encontrada',
        ruta: req.originalUrl,
    });
});

module.exports = app;