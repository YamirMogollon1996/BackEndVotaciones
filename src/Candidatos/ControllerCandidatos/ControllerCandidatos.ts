import type { Request, Response } from "express";
import { SerivicosCandidado } from "../ServicioCandidatos/ServicioCandidatos.js";


export default class ControllerCandidatos {
    constructor(private readonly candidatoService: SerivicosCandidado) { }
    obtenerCandidatos = async (req: Request, res: Response) => {
        try {
            const candidatos = await this.candidatoService.findAll()
            return res.status(200).json(candidatos);
        } catch (error) {
            console.log(error)
        }
    };
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
        console.log( req.file?.path)
        // // return res.send({msg:'mensaje'})   
        // // console.log(req.body)
        // // console.log(req.file) 
        // // return res.send({
        // //     msg:'crear  usuario '
        // // })
  
        // try {
        //     console.log('mogollon Osorio')
        //     const candidato = await this.candidatoService.create(req.body);
        //     return res.status(201).json(candidato);
        // } catch (error) {
        //     console.log(error)
        // }
    
    };


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
}
