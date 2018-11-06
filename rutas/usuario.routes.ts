import express = require("express")
import { UsuarioController } from "../api/controladora/usuario.controller";

const router = express.Router()
const controladora = new UsuarioController()

router.get("/listar", controladora.listar)
router.post("/insertar", controladora.insertar)
router.post("/recuperar", controladora.recuperar)
//eliminar
//recuperar

export = router