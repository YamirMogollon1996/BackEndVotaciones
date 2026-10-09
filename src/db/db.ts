import { DataSource } from "typeorm"
import { Estudiante } from "../Estudiante/entities/Entities.js"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_NAME || "root",
    password: process.env.DB_PASS || "12345678",
    database: process.env.DATABASE || "col",
    entities: [Estudiante],
    synchronize: true,  
    
});