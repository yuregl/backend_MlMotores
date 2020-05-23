const express = require('express');
const routes = require('./routes');
const cors = require('cors');
// require('dotenv').config();

const app = express();
const PORTA = process.env.PORTA;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORTA);
