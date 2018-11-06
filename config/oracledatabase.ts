import oracledb =require("oracledb")
// crear el pool

const inicializa = async () => {
    await oracledb.createPool({
        user:"jbedoya",
        password:"diego",
        connectString:"180.100.100.136:1521/sd1",
        poolMin: 10,
        poolMax: 20,
        poolIncrement: 1
    })
}

export { inicializa }