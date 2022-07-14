const { Router } = require('express');

const ContactController = require('./app/controllers/ContactContoller');

const routes = Router();

routes.get('/contacs', ContactController.index);
routes.get('/contacs/:id', ContactController.show);
routes.delete('/contacs/:id', ContactController.delete);

module.exports = routes;
