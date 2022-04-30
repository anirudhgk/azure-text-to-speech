const { textToSpeech } = require('./azure-cognitiveservices-speech');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const controller = require('./controller');

// function to create the express server
const create = async () => {

    // server
    const app = express();
    app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

    // Log request
    app.use(controller.appLogger);

    // creates a temp file on server, that streams to client
    app.get('/text-to-speech', async (req, res, next) => {

        const { phrase, file } = req.query;

        if (!phrase) res.status(404).send('Invalid query string');

        let fileName = null;

        // stream from file or memory
        if (file && file === true) {
            fileName = `./temp/stream-from-file-${timeStamp()}.mp3`;
        }

        const audioStream = await textToSpeech(phrase, fileName);
        res.set({
            'Content-Type': 'audio/mpeg',
            'Transfer-Encoding': 'chunked'
        });
        audioStream.pipe(res);
    });

    // root route - serve static html file
    app.get('/', (req, res) => {
        return res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // Catch errors
    app.use(controller.logErrors);
    app.use(controller.clientError404Handler);
    app.use(controller.clientError500Handler);
    app.use(controller.errorHandler);

    return app;
};

module.exports = {
    create
};
