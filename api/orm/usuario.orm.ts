import oracledb = require("oracledb")

export class UsuarioORM{
    async listar(){
        let conn = await oracledb.getConnection()
        let sql = "call PCKUSUARIO.LISTAR_USUARIO(:val1, :val2)"
        let binds = {
            val1: {
                dir: oracledb.BIND_OUT,
                type: oracledb.CURSOR,
                outFormat: oracledb.CURSOR
            },
            val2: {
                dir: oracledb.BIND_OUT,
                type: oracledb.NUMBER,
                outFormat:oracledb.NUMBER
            }
        }
        let res1: any = await conn.execute(sql, binds)    
        let cantidad = await res1.outBinds.val2
        let res2 =await res1.outBinds.val1.getRows(cantidad)

        return res2
    }
    async insertar(correo:string, clave:string, ruta:string){
        let conn = await oracledb.getConnection()
        let sql = "call PCKUSUARIO.INSERTAR_USUARIO(:val1, :val2, :val3, :val4)"
        let binds = {
            val1: correo,
            val2: clave,
            val3: ruta,
            val4: {
                dir: oracledb.BIND_OUT,
                type: oracledb.NUMBER,
                outFormat:oracledb.NUMBER
            }
        }
        let option = {
            autoCommit: true
        }
        let res: any = await conn.execute(sql, binds, option)    
        let nid = await res.outBinds.val4

        return nid
    }
    async recuperarPorCorreo(correo: string){
        let conn = await oracledb.getConnection()
        let sql = "call PCKUSUARIO.RECUPERAR_USUARIOPORCORREO(:val1,:val2)"
        let binds = {
            val1: correo,
            val2: {
                dir: oracledb.BIND_OUT,
                type: oracledb.CURSOR,
                outFormat: oracledb.CURSOR
            }
        }

        let res1: any = await conn.execute(sql, binds)    
        let res2 = await res1.outBinds.val2.getRow()

        return res2
    }

    async recuperar(codigo:number){
        let conn = await oracledb.getConnection()
        let sql = "call PCKUSUARIO.RECUPERAR_USUARIO(:val1, :val2)"
        let binds = {
            val1: codigo,
            val2: {
                dir: oracledb.BIND_OUT,
                type: oracledb.CURSOR,
                outFormat: oracledb.CURSOR
            }
        }

        let res1: any = await conn.execute(sql, binds)    
        let res2 = await res1.outBinds.val2.getRow()

        return res2
    }
}