const express = require('express');
//const db = require('./db');
const Event = require('./event/model');

const app = express();

const port = 4000;

app.listen(port, () => console.log(`Starting on port ${port}`))