const express = require('express');
const routes = express.Router();

//Controllers

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SearchUserController');
const IDServiceUnique = require('./controllers/ServiceControllerUnique');
const ServiceController = require('./controllers/ServiceController');

//Validators Users

const { createUser, deleteUser, updateUser } = require('./validators/valUsers');

//Validators Services

const {
	createService,
	deleteService,
	listService,
	updateService,
} = require('./validators/valServices');

//Validators Services Unique

const {
	createServiceUnique,
	deleteServiceUnique,
	lookServiceUnique,
	updateServiceUnique,
} = require('./validators/valServicesUnique');

routes.post('/register', createUser, UserController.create);
routes.get('/users', UserController.list);
routes.put('/users/:id', updateUser, UserController.update);
routes.delete('/users/:id', deleteUser, UserController.delete);

routes.post('/login', SessionController.login);

routes.get('/services', listService, ServiceController.index);
routes.post('/services/create', createService, ServiceController.create);
routes.put('/services/update/:id', updateService, ServiceController.update);
routes.delete(
	'/services/delete/:id',
	deleteService,
	ServiceController.deleteID
);

routes.get('/services/unique/:id', lookServiceUnique, IDServiceUnique.product);
routes.post(
	'/services/unique/create',
	createServiceUnique,
	IDServiceUnique.create
);
routes.put(
	'/services/unique/update/:id',
	updateServiceUnique,
	IDServiceUnique.update
);
routes.delete(
	'/services/unique/delete/:id',
	deleteServiceUnique,
	IDServiceUnique.deleteID
);

module.exports = routes;
