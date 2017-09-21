const Express = require('express');
const http = require('http');
const path = require('path');
const config = require('./config');

const app = new Express();
const server = new http.Server(app);
const mainDirectory = path.join(__dirname, 'src/www');
const staticDirectory = path.join(__dirname, 'build');

app.use(Express.static(staticDirectory));

app.use('*', (req, res) => {
    res.sendFile(path.join(mainDirectory, 'index.html'));
});

server.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    }
    
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
});
