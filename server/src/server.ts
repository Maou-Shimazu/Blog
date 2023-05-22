import http from 'http';
import express from 'express';
import logging from './config/logging';
import mongoose from 'mongoose';
import config from './config/config';
import firebaseAdmin from 'firebase-admin';

const router = express();

/** Server Handling */
const httpServer = http.createServer(router);

/** Connect to Firebase */
let serviceAccountKey = require('./config/serviceAccountKey.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccountKey)
});

/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logging.info('MongoDB is connected');
    })
    .catch((error) => {
        logging.error(error);
    });

/** Log the request */
router.use((req, res, next) => {
    logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
    });
    next();
});

/** Parse the body of the request */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //* = any url can access
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

/* Routes */

/** Error Handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Start Server */
httpServer.listen(config.server.port, () => {
    logging.info(`Server is running on ${config.server.host}:${config.server.port}`);
});
