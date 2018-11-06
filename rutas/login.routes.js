"use strict";
var express = require("express");
var usuario_controller_1 = require("../api/controladora/usuario.controller");
var router = express.Router();
var controladora = new usuario_controller_1.UsuarioController();
router.post("/", controladora.autentica);
module.exports = router;
