const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../config/mongoose');

const corsConfig = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

const app = express();

// Request Middleware
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/v1.0', require('../config/routes/v1.0'));

module.exports = app;