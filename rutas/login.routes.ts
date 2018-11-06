import express = require("express")
import { UsuarioController } from "../api/controladora/usuario.controller";

const router = express.Router()
const controladora = new UsuarioController()

router.post("/", controladora.autentica)

export = router