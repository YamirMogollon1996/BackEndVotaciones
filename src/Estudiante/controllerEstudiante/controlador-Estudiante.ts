import Express from "express"
import { ServiciosEstudiante } from "../servicios/Estudiante-servicios.js"
import type { Request, Response } from "express"  


export class ControllerUsuario {
    constructor(private readonly ServiciosSenior: ServiciosEstudiante) { }
    BuscarDatos = async (req: Request, res: Response) => {
        const { dni } = req.body
        try {
            let EncontrarData = await this.ServiciosSenior.encontarElusaurio(dni)
            return res.send(EncontrarData)

        } catch (error) {
            console.log(error)
            return error
        }
    }
    
    async createUsuario() {
    }
    ChangueVoto = async (req: Request, res: Response) => {
        try {
            await this.ServiciosSenior.AddVoto(req.body)
            return res.send({ msg: 'voto añadidio' })
        } catch (error) {
            return error
        }
    }
    finall = async (req: Request, res: Response) => {
        console.log('mogollon Oosrio')
        try {
            let datos = await this.ServiciosSenior.Finall()
            return res.send(datos)
        } catch (error) {

            return error

        }

    }
}