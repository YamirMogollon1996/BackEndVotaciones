import Express from "express";
import { ServiciosEstudiante } from "../servicios/Estudiante-servicios.js";
import { ValidateDatos } from "../entities/dto/dtodni.js";
export class ControllerUsuario {
    ServiciosSenior;
    constructor(ServiciosSenior) {
        this.ServiciosSenior = ServiciosSenior;
    }
    BuscarDatos = async (req, res) => {
        const { dni } = req.body;
        let validaciones = ValidateDatos(dni);
        if (Object.values(validaciones).length > 0) {
            return res.send({
                msg: validaciones
            });
        }
        else {
            try {
                let EncontrarData = await this.ServiciosSenior.encontarElusaurio(dni);
                return res.send(EncontrarData);
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "no esta el usuario") {
                        res.status(400).json({ error: "usuario no encontrado" });
                    }
                    else {
                        res.status(500).json({ error: "Error interno del servidor" });
                    }
                }
            }
        }
    };
    async createUsuario() {
    }
    ChangueVoto = async (req, res) => {
        try {
            console.log('mogollon');
            const { dni } = req.body;
            let validaciones = ValidateDatos(dni);
            console.log(validaciones);
            await this.ServiciosSenior.AddVoto(dni);
            return res.send({ msg: 'voto añadidio' });
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.message === "ya votastes") {
                    res.status(400).json({ error: "El estudiante ya emitió su voto" });
                }
                else {
                    res.status(500).json({ error: "Error interno del servidor" });
                }
            }
        }
    };
    finall = async (req, res) => {
        console.log('mogollon');
        try {
            let datos = await this.ServiciosSenior.Finall();
            console.log(datos);
            return res.send(datos);
        }
        catch (error) {
            return error;
        }
    };
}
