const express = require('express');
const routes = express.Router();

//Auth

const auth = require('./middlewares/auth');
const authAdmin = require('./middlewares/authAdmin');

//Controllers

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SearchUserController');
const IDServiceUnique = require('./controllers/ServiceControllerUnique');
const ServiceController = require('./controllers/ServiceController');
const AdminServiceController = require('./controllers/AdminServiceController');
const AdminServiceUniqueController = require('./controllers/AdminServiceUniqueController');
const AdminUserController = require('./controllers/AdminUserController');

//Validators Users

const { createUser, deleteUser, updateUser } = require('./validators/valUsers');

//Validators Services

const { listService } = require('./validators/valServices');

//Validators Services Unique

const { lookServiceUnique } = require('./validators/valServicesUnique');

//Validators Admin Service

const {
	createService,
	deleteService,
	updateService,
	listServiceAdmin,
	listServiceByIDAdmin,
} = require('./validators/valAdminService');

//Validators Admin Service Unique

const {
	createServiceUnique,
	deleteServiceUnique,
	updateServiceUnique,
	listServiceUnique,
} = require('./validators/valAdminServicesUnique');

//Routes Admin Service

routes.post(
	'/admin/services',
	createService,
	authAdmin,
	AdminServiceController.create
);

routes.delete(
	'/admin/services',
	deleteService,
	authAdmin,
	AdminServiceController.deleteID
);

routes.put(
	'/admin/services',
	updateService,
	authAdmin,
	AdminServiceController.update
);

routes.get(
	'/admin/services',
	listServiceAdmin,
	authAdmin,
	AdminServiceController.list
);

routes.get(
	'/admin/services/listID',
	listServiceByIDAdmin,
	authAdmin,
	AdminServiceController.listIDUser
);

//Routes Admin Service Unique

routes.post(
	'/admin/service/unique',
	createServiceUnique,
	authAdmin,
	AdminServiceUniqueController.create
);

routes.put(
	'/admin/service/unique',
	updateServiceUnique,
	authAdmin,
	AdminServiceUniqueController.update
);

routes.delete(
	'/admin/service/unique',
	deleteServiceUnique,
	authAdmin,
	AdminServiceUniqueController.deleteID
);

routes.get(
	'/admin/service/unique',
	listServiceUnique,
	authAdmin,
	AdminServiceUniqueController.list
);

//Routes Users

routes.post('/register', createUser, UserController.create);
routes.put('/users/:id', updateUser, auth, UserController.update);
routes.delete('/users', deleteUser, auth, UserController.delete);

//Route Login

routes.post('/login', SessionController.login);

//Routes Services

routes.get('/services', listService, ServiceController.index);

//Routes Services Unique

routes.get('/services/unique/:id', lookServiceUnique, IDServiceUnique.product);

module.exports = routes;
