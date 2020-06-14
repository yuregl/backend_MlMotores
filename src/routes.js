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

//Validators Session

const { email, login, password } = require('./validators/valSession');

//Routes Admin Service

routes.post(
	'/admin/service',
	createService,
	authAdmin,
	AdminServiceController.create
);

routes.delete(
	'/admin/service',
	deleteService,
	authAdmin,
	AdminServiceController.deleteID
);

routes.put(
	'/admin/service',
	updateService,
	authAdmin,
	AdminServiceController.update
);

routes.get(
	'/admin/service',
	listServiceAdmin,
	authAdmin,
	AdminServiceController.list
);

routes.get(
	'/admin/service/listID',
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

routes.post('/login', login, SessionController.login);
routes.post(
	'/forgetpassword',
	email,
	SessionController.sendEmailForgetPassword
);
routes.post(
	'/forgetpassword/changepassword',
	password,
	SessionController.changePassword
);

//Routes Services

routes.get('/service', listService, auth, ServiceController.index);

//Routes Services Unique

routes.get('/service/unique', lookServiceUnique, IDServiceUnique.product);

module.exports = routes;
