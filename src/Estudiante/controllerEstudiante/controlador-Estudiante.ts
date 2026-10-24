import Express from "express"
import { ServiciosEstudiante } from "../servicios/Estudiante-servicios.js"
import type { Request, Response } from "express"
import { ValidateDatos } from "../entities/dto/dtodni.js" 

export class ControllerUsuario {   
    constructor(private readonly ServiciosSenior: ServiciosEstudiante) { }
    BuscarDatos = async (req: Request, res: Response) => {
        const { dni } = req.body       
        let validaciones = ValidateDatos(dni)        
        if (Object.values(validaciones).length > 0) {
            return res.send({
                msg: validaciones
            })
        } else {
            try {
                let EncontrarData = await this.ServiciosSenior.encontarElusaurio(dni)
                return res.send(EncontrarData)

            } catch (error) {
                if (error instanceof Error) {
                    if (error.message === "no esta el usuario") {
                        res.status(400).json({ error: "usuario no encontrado" })
                    } else {
                        res.status(500).json({ error: "Error interno del servidor" })
                    }
                }
            }
        }
    }


    async createUsuario() {
    
    }

    ChangueVoto = async (req: Request, res: Response) => {
        try {  
       
            const { dni } = req.body
            let validaciones = ValidateDatos(dni)


            await this.ServiciosSenior.AddVoto(dni)
            return res.send({ msg: 'voto añadidio' })
        } catch (error) {

            if (error instanceof Error) {

                if (error.message === "ya votastes") {
                    res.status(400).json({ error: "El estudiante ya emitió su voto" })
                } else {
                    res.status(500).json({ error: "Error interno del servidor" })
                }
            }
        }
    }
    finall = async (req: Request, res: Response) => {

        try { 
            let datos = await this.ServiciosSenior.Finall()
    
            return res.send(datos)
        } catch (error) {
            return error
        }
    }
}