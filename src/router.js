const express = require('express');
const router = new express.Router();
const exampleRoute = require('./v1/routes/example.js');

router.use('/api/v1/example', exampleRoute);

module.exports = router;
