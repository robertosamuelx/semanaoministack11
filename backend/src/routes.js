const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.list );

routes.post('/incidents', IncidentController.create);

routes.get('/profile', ProfileController.list);

routes.get('/incidents', IncidentController.list);

routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/session',SessionController.create);

module.exports = routes;