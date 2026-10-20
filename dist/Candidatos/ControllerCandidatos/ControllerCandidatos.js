import { SerivicosCandidado } from "../ServicioCandidatos/ServicioCandidatos.js";
import { ModeloCandidto } from "../Entities/ModeloCandidadto.js";
export default class ControllerCandidatos {
    candidatoService;
    constructor(candidatoService) {
        this.candidatoService = candidatoService;
    }
    obtenerCandidatos = async (req, res) => {
        console.log('mogollon osorioe n el obtener Datos');
        try {
            const candidatos = await this.candidatoService.findAll();
            return res.status(200).json(candidatos);
        }
        catch (error) {
            console.log(error);
        }
    };
    obtenerCandidatoPorId = async (req, res) => {
        try {
            const { id } = req.params;
            const candidato = await this.candidatoService.findById(Number(id));
            return res.status(200).json(candidato);
        }
        catch (error) {
            console.log(error);
        }
    };
    crearCandidato = async (req, res) => {
        try {
            let modeloData = new ModeloCandidto(req.body.nombre, req.body.apellido, req.body.partido, req.file?.path, req.body.voto, req.body.activo);
            console.log(modeloData);
            await this.candidatoService.create(modeloData);
            return res.send({
                msg: 'se creo el candidadto'
            });
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).send('Error inesperado');
        }
        // try { 
        //     let modeloCantidad =  new ModeloCandidto(
        //                 req.body.nombre , 
        //                 req.body.apellido ,
        //                 req.body.partido ,
        //                 req.file?.path ,
        //                 req.body.voto ,
        //                 req.body.activo
        //     )
        //     await this.candidatoService.create({
        //         nombre:  req.body.nombre ,
        //         apellido:req.body.apellido, 
        //         partido :  req.body.partido ,
        //         foto:  req.file?.path!,
        //         activo:  req.body.activo ,
        //         voto :  req.body.voto
        //     } as any ) 
        //     return res.send({ msg: 'creado',  })
        // } catch (error) {  
        //      console.log( error)
        //     if (error instanceof Error) {
        //         return res.status(400).json({ message: error.message });
        //     }
        //     return res.status(500).send('Error inesperado');
        // }
    };
    actualizarCandidato = async (req, res) => {
        const { id } = req.params;
        try {
            let datos = await this.candidatoService.update(Number(id));
            return res.send({
                msg: 'voto para el candidado'
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    eliminarCandidato = async (req, res) => {
        // await this.candidatoService.eliminarCandidato(req.params.id);
        // return res.status(204).send();
    };
}
