const server = require('./server');

const port = process.env.PORT || 3000;

server.create()
    .then(app => {
        app.listen(port, () => {
            console.log(`Azure text to speech, server running on port ${port}!`);
        });
    }).catch(err => console.log(err));