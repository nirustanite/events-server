const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./event/router');

const app = express();
const port = 4000;
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(router);

app.listen(port, () => console.log(`Starting on port ${port}`))