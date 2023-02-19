const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/ui', swaggerUi.serve);

router.get('/ui', swaggerUi.setup(swaggerDocument));

module.exports = router;