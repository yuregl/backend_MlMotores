const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SearchUserController');
const IDServiceUnique = require('./controllers/ServiceControllerUnique');
const ServiceController = require('./controllers/ServiceController');

routes.post('/register', UserController.create);
routes.get('/users', UserController.list);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/login', SessionController.login);

routes.get('/services', ServiceController.index);
routes.post('/services/create', ServiceController.create);
routes.put('/services/update/:id', ServiceController.update);
routes.delete('/services/delete/:id', ServiceController.deleteID);

routes.get('/services/unique/:id', IDServiceUnique.product);
routes.post('/services/unique/create', IDServiceUnique.create);
routes.put('/services/unique/update/:id', IDServiceUnique.update);
routes.delete('/services/unique/delete/:id', IDServiceUnique.deleteID);

module.exports = routes;
