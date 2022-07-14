const { Router } = require('express');

const CategoryController = require('./app/controllers/CategoryController');
const ContactController = require('./app/controllers/ContactContoller');

const routes = Router();

routes.get('/contacs', ContactController.index);
routes.post('/contacs', ContactController.store);
routes.get('/contacs/:id', ContactController.show);
routes.put('/contacs/:id', ContactController.update);
routes.delete('/contacs/:id', ContactController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.get('/categories/:id', CategoryController.show);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

module.exports = routes;
