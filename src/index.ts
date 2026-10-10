import express from "express"
import type { Application } from "express"
import dotenv from "dotenv"
import { AppDataSource } from "./db/db.js"
import { Estudiante } from "./Estudiante/entities/Entities.js"
import { alumnos } from "../src/helpers/data.js"
import type { Ivotaciones } from "../src/helpers/data.js"
import { appRouter } from "./Estudiante/routes/routes.js"
import { swaggerDocs } from "./swager.js"


dotenv.config()
export class Boostrap {
    public app!: Application
    public port: number = 4002
    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(appRouter)

        this.InicarPuerto()
        swaggerDocs(this.app, this.port)

    }
    async InicarPuerto() {
        try {
            await this.app.listen(this.port, () => {
                console.log('Corriendo en el puerto ', this.port)
            })
            await AppDataSource.initialize()
            console.log('Base de datos Conectada!!!!!!!!!!')


        } catch (error) {
            console.log(error)
        }
    }


}

