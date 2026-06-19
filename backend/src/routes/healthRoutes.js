const express = require('express');
const { obtenerEstadoApi } = require('../controllers/healthController');

const router = express.Router();

router.get('/health', obtenerEstadoApi);

module.exports = router;