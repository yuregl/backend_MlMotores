const createService = require('./createService');
const deleteService = require('./deleteService');
const updateService = require('./updateServices');
const listServiceAdmin = require('./listService');
const listServiceByIDAdmin = require('./listServiceByID');

module.exports = {
	createService,
	deleteService,
	updateService,
	listServiceAdmin,
	listServiceByIDAdmin,
};
