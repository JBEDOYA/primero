import {Request, Response} from "express"
import { UsuarioORM } from "../orm/usuario.orm";
import jwt = require("jsonwebtoken")

export class UsuarioController{
    async listar(req: Request, res:Response){

        let valor = req.headers.authorization   // OJO: parsea a minusculas

        if(!valor){
            return res.status(401).json({
                ok: true,
                mensaje: "Debes enviar el token"
            })
        }
        try {
            let tmp = await jwt.verify(valor, "zzzzzzA123123$2aads")
        } catch (error) {
            return res.status(401).json({
                ok: true,
                mensaje: "Token Invalido",
                error
            })
        }
/*
        jwt.verify(valor, "zzzzzzA123123$2aads", (err, decode:any)=>{
            if(err){
                return res.status(401).json({
                    ok: true,
                    mensaje: "Token Invalido"
                })
            }


        })
*/        
        const resp =await new UsuarioORM().listar()
        return res.status(200).json({
            ok: true,
            resp
        })
    }    
    async insertar(req: Request, res:Response){
        const detalle = req.body

        const codigo =await new UsuarioORM().insertar(detalle.correo, detalle.clave, detalle.ruta)
        return res.status(200).json({
            ok: true,
            codigo
        })
    }    
    
    async recuperarPorCorreo(req: Request, res:Response){

        const detalle = req.body
        const resp =await new UsuarioORM().recuperarPorCorreo(detalle.correo)
        return res.status(200).json({
            ok: true,
            resp
        })
    } 
    

    async autentica(req: Request, res:Response){
        const body = req.body
        // body.email, body.password

        if(!body){
            return res.status(400).json({
                ok:false,
                mensaje:"Debe enviar el cuerpo"
            })
        }
        if(!body.email){
            return res.status(400).json({
                ok:false,
                mensaje:"Debe enviar el correo"
            })
        }
        const resp =await new UsuarioORM().recuperarPorCorreo(body.email)

        if(!resp){
            return res.status(400).json({
                ok: false,
                mensaje: "Error al validar - Correo invalido"
            })
        }

        if(resp[2] != body.password){
            return res.status(400).json({
                ok: false,
                mensaje: "Erroral validar - Clave invalida"
            })
        }

        const token = jwt.sign(
            {codigo: resp[0], correo: resp[1]},
            "zzzzzzA123123$2aads",
            {expiresIn:240})

        return res.status(200).json({
            ok: true,
            token,
            usuario:resp
        })
    }  
    
    async recuperar(req: Request, res:Response){
        const detalle = req.body

        const reg =await new UsuarioORM().recuperar(detalle.codigo)
        return res.status(200).json({
            ok: true,
            reg
        })
    } 
       
}