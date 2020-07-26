const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();

const dist = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();

app.use('/', express.static(dist));
app.use(bodyParser.json());
app.use(router);

const port = 3000;

app.listen(port, () => console.log('server is listening on port: ', port));

module.exports = app;
