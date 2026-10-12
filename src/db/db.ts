import { DataSource, Entity } from "typeorm"
import { Estudiante } from "../Estudiante/entities/Entities.js"
import { Candidato } from "../Candidatos/Entities/Entitites.js"
// import path from "path"
// const uploadData = path.join(process.cwd(), 'src', 'migraciones/**/*{.js,.ts}')


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "monorail.proxy.rlwy.net",
    port: 23401,
    username: "root",
    password: "vHpekQFzcAcuRLKAOTTdopkQuFnPKQxO",
    database: "railway",
    entities: [Estudiante, Candidato],
    synchronize: false,
    migrationsRun: true,
    migrations: ["src/migraciones/**/*{.ts,.js}"], 

});
