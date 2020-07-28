const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const SurfCheck = require('../database/SurfCheck.js');
const { fstat } = require('fs');

const router = express.Router();

const dist = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();

app.use('/', express.static(dist));
app.use(bodyParser.json());
app.use(router);

app.get('/spots/', (req, res) => {
  SurfCheck.find().distinct('spotName')
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/spots/:name', (req, res) => {
  const { name } = req.params;
  SurfCheck.find({ spotName: name })
    .sort({ createdAt: -1 })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

app.get('/buoydata', (req, res) => {
  fs.readFile('server/SampleBuoyData.txt', "utf-8", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      res.status(200).send(data)
    }
  })
})

app.post('/', (req, res) => {
  const { params } = req.body;
  SurfCheck.create(params)
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

const port = 3000;

app.listen(port, () => console.log('server is listening on port: ', port));

module.exports = app;
