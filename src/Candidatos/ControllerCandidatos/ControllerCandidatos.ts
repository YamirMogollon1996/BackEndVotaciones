import type { Request, Response } from "express";
import { SerivicosCandidado } from "../ServicioCandidatos/ServicioCandidatos.js";
import { ModeloCandidto } from "../Entities/ModeloCandidadto.js";
import { CloudbinaryInstance } from "../../Cloudbinary.js";
import { SubirImagen } from "../helper/SubirImagen.js";



export default class ControllerCandidatos {
    constructor(private readonly candidatoService: SerivicosCandidado) { }
    obtenerCandidatos = async (req: Request, res: Response) => {
        console.log('mogollon osorioe n el obtener Datos')
        try {
            const candidatos = await this.candidatoService.findAll()
            return res.status(200).json(candidatos);
        } catch (error) {
            console.log(error)
        }
    }

    obtenerCandidatoPorId = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const candidato = await this.candidatoService.findById(Number(id));
            return res.status(200).json(candidato);
        } catch (error) {
            console.log(error)
        }
    };
    crearCandidato = async (req: Request, res: Response) => {

        try {
            const uploader = await SubirImagen(req.file?.buffer!)
            if (!req.file) throw new Error('necesita enviar una imagen ')
            let modeloData = new ModeloCandidto(
                req.body.nombre,
                req.body.apellido,
                req.body.partido,
                req.file?.path,
                req.body.anio,
                req.body.voto,
                req.body.activo
            )
            await this.candidatoService.create(modeloData, uploader.secure_url)
            return res.send({
                msg: 'se creo el candidadto con foto'
            })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).send('Error inesperado');
        }


    }
    actualizarCandidato = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            let datos = await this.candidatoService.update(Number(id))
            return res.send({
                msg: 'voto para el candidado'
            })
        } catch (error) {
            console.log(error)
        }
    };
    eliminarCandidato = async (req: Request, res: Response) => {
        // await this.candidatoService.eliminarCandidato(req.params.id);
        // return res.status(204).send();
    };
    TotalVotos = async (req: Request, res: Response) => {
        try {
            let datos = await this.candidatoService.findAllConTotalVotos()
            return res.send(datos)

        } catch (error) {
            return error
            
        }


    }

}
