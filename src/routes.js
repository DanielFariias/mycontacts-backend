const { Router } = require('express');

const CategoryController = require('./app/controllers/CategoryController');
const ContactController = require('./app/controllers/ContactContoller');

const routes = Router();

routes.get('/contacts', ContactController.index);
routes.post('/contacts', ContactController.store);
routes.get('/contacts/:id', ContactController.show);
routes.put('/contacts/:id', ContactController.update);
routes.delete('/contacts/:id', ContactController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.get('/categories/:id', CategoryController.show);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

module.exports = routes;
