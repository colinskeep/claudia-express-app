'use strict'
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./src/router.js');

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || process.env.CORS_WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  },
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Content-Length',
    'X-Requested-With',
    'Accept',
  ],
  methods: [
    'GET',
    'PUT',
    'POST',
    'DELETE',
    'OPTIONS',
  ],
  optionsSuccessStatus: 200,
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(cors(corsOptions));
app.use('/', routes);

module.exports = app;
