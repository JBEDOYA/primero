"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var usuarioRuta = require("../rutas/usuario.routes");
var loginRuta = require("../rutas/login.routes");
var inicializa = function () {
    var app = express();
    // middleware
    // deshabilitar el urlencoded
    app.use(bodyparser.urlencoded({ extended: false }));
    // usa el bodyparser con formato json
    app.use(bodyparser.json());
    app.use("/usuario", usuarioRuta);
    app.use("/login", loginRuta);
    var port = (process.env.PORT || 3004);
    app.listen(port, function () {
        console.log("Servidor inicializado en el puerto " + port);
    });
};
exports.inicializa = inicializa;
