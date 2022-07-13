const { Router } = require('express');

const ContactController = require('./app/controllers/ContactContoller');

const routes = Router();

routes.get('/contacs', ContactController.index);

module.exports = routes;
