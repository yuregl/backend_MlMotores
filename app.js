const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORTA = 3333;

app.use(express.json());
app.use(routes);

app.listen(PORTA);
