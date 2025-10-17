const express = require('express')
const Router = express.Router();
const {MostrarRegistros,CriarRegistro,ApagarRegistro} = require('./../controllers/registerCTRS');


Router.get('/',MostrarRegistros)
Router.post('/',CriarRegistro)
Router.delete('/',ApagarRegistro)

module.exports = Router
