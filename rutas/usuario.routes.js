"use strict";
var express = require("express");
var usuario_controller_1 = require("../api/controladora/usuario.controller");
var router = express.Router();
var controladora = new usuario_controller_1.UsuarioController();
router.get("/listar", controladora.listar);
router.post("/insertar", controladora.insertar);
router.post("/recuperar", controladora.recuperar);
module.exports = router;
