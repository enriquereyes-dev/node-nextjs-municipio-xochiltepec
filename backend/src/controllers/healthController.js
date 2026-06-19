const obtenerEstadoApi = (req, res) => {
    res.status(200).json({
        mensaje: 'API de Xochiltepec Emblemático funcionando correctamente',
        estado: 'online',
        entorno: process.env.NODE_ENV || 'development',
        fecha: new Date().toISOString(),
    });
};

module.exports = {
    obtenerEstadoApi,
};