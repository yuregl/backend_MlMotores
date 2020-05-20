const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.post('/register', UserController.create);
routes.get('/users', UserController.list);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;
