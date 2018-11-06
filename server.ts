import appExpress = require("./app/app")
import oraclePool = require ("./config/oracledatabase")

const inicio = async() => {

    try {
        //inicializar el pool
        oraclePool.inicializa()

        //inicializar el express
        await appExpress.inicializa()
        
    } catch(error){
        console.log(error)
        process.exit(1)
    }
    
}

inicio()