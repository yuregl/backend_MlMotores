const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SearchUserController');
const IDProduto = require('./controllers/ProductController');

routes.post('/register', UserController.create);
routes.get('/users', UserController.list);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/login', SessionController.login);

routes.post('/services/:id', IDProduto.product);

module.exports = routes;
