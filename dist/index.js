import express from "express";
import path from "path";
import { AppDataSource } from "./db/db.js";
import { Estudiante } from "./Estudiante/entities/Entities.js";
import { alumnos } from "../src/helpers/data.js";
import { appRouter } from "./Estudiante/routes/routes.js";
import { swaggerDocs } from "./swager.js";
import { ExpressRouter } from "./Candidatos/routes/CandidatoRutas.js";
import dotenv from "dotenv";
// mysql://root:vHpekQFzcAcuRLKAOTTdopkQuFnPKQxO@monorail.proxy.rlwy.net:23401/railway
// mysql://root:vHpekQFzcAcuRLKAOTTdopkQuFnPKQxO@monorail.proxy.rlwy.net:23401/railway
dotenv.config();
export class Boostrap {
    app;
    port = 4002;
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/uploads", express.static(path.join(process.cwd(), "src", "uploads")));
        this.app.use(appRouter);
        this.app.use(ExpressRouter);
        swaggerDocs(this.app, this.port);
        this.InicarPuerto();
    }
    async InicarPuerto() {
        try {
            await this.app.listen(this.port, () => {
                console.log('Corriendo en el puerto ', this.port);
            });
            AppDataSource.initialize().then(() => {
                console.log('base de datos inciqzada');
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
