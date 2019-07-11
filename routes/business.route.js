
const express = require('express')
const routes = express.Router();
const control = require('../controllers/controller.route')


routes.post('/add', control.poster);
routes.get('/lister', control.lister);
routes.get('/editer/:id', control.edit);
routes.post('/maj/:id', control.maj);
routes.get('/deletes/:id', control.deleter);

module.exports = routes;


