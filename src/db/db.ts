import { DataSource, Entity } from "typeorm"
import { Estudiante } from "../Estudiante/entities/Entities.js"
import { Candidato } from "../Candidatos/Entities/Entitites.js"
import dotenv  from "dotenv"
// import path from "path"
// const uploadData = path.join(process.cwd(), 'src', 'migraciones/**/*{.js,.ts}')  

dotenv.config()

console.log('Esoy dentro en en AppDataSource')
console.log(process.env.DB_HOST)
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    entities: [Estudiante, Candidato],
    synchronize: false,
    migrationsRun: true,
    migrations: ["src/migraciones/**/*{.ts,.js}"], 
});
