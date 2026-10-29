import express from "express";
import path from "path";
import { AppDataSource } from "./db/db.js";
import { Estudiante } from "./Estudiante/entities/Entities.js";
// import { alumnos } from "../src/helpers/data.js"
// import type { Ivotaciones } from "../src/helpers/data.js"
import { appRouter } from "./Estudiante/routes/routes.js";
import { swaggerDocs } from "./swager.js";
import { ExpressRouter } from "./Candidatos/routes/CandidatoRutas.js";
import dotenv from "dotenv";
import cors from 'cors';
import { alumnos } from "./Data/data.js";
// import {  Estudiante }  from "../src/Estudiante/entities/Entities.js" 
dotenv.config();
export class Boostrap {
    app;
    port = 4002;
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/uploads", express.static(path.join(process.cwd(), "src", "uploads")));
        this.app.use(appRouter);
        this.app.use('/candidato', ExpressRouter);
        swaggerDocs(this.app, this.port);
        this.InicarPuerto();
    }
    async InicarPuerto() {
        try {
            await this.app.listen(this.port, () => {
                console.log('Corriendo en el puerto ', this.port);
            });
            let GetRepootirot = AppDataSource.getRepository(Estudiante);
            AppDataSource.initialize().then(() => {
                console.log('se iniciandando -->');
            }).catch(() => {
                console.log('error al iinciar');
            });
            console.log('Base de datos Conectada!!!!!!!!!!');
        }
        catch (error) {
            console.log(error);
        }
    }
}
