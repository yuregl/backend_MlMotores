const express = require("express");
const routes = express.Router();

routes.get("/teste", (req, res) => {
  return res.json({ message: "Ola" });
});

module.exports = routes;
