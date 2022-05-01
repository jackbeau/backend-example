// index.js

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

/**
 * App Variables
 */


const port = process.env.PORT || "8080";
const mongoURI = process.env.DATABASE_URL;

/**
 *  App Configuration
 */

app.use(express.json());

/**
 * Routes Definitions
 */

const routes = require('./app/routes');

app.use('/api', routes);


/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`)
});


mongoose.connect(mongoURI);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});