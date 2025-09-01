import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    process.env.DB_USER,
    {
        host: process.env.DB_HOST,
        dialect : process.env.DB_DIALECT
    }
)

export const startDB = async()=>{
    try {
            await sequelize.authenticate(),
    console.log("Se pudo autenticar con la Data Base");
    await sequelize.sync()  
    } catch (error) {
        Message: "Error al autenticar con la Data Base"
    }

}