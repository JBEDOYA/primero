import express = require("express")
import { Application } from "express"
import bodyparser = require("body-parser")
import usuarioRuta = require("../rutas/usuario.routes")
import loginRuta = require("../rutas/login.routes")

const inicializa = () => {
    const app : Application = express()

    // middleware
    // deshabilitar el urlencoded
    app.use(bodyparser.urlencoded({extended: false}))
    // usa el bodyparser con formato json
    app.use(bodyparser.json())

    app.use("/usuario", usuarioRuta)
    app.use("/login", loginRuta)

	const port = (process.env.PORT ||  3004)
    app.listen(port, ()=>{
        console.log("Servidor inicializado en el puerto "+port)
    })

}

export { inicializa }