import { SerivicosCandidado } from "../ServicioCandidatos/ServicioCandidatos.js";
import { ModeloCandidto } from "../Entities/ModeloCandidadto.js";
import { CloudbinaryInstance } from "../../Cloudbinary.js";
import { SubirImagen } from "../helper/SubirImagen.js";
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
            const uploader = await SubirImagen(req.file?.buffer);
            if (!req.file)
                throw new Error('necesita enviar una imagen ');
            let modeloData = new ModeloCandidto(req.body.nombre, req.body.apellido, req.body.partido, req.file?.path, req.body.voto, req.body.activo);
            console.log(modeloData);
            await this.candidatoService.create(modeloData, uploader.secure_url);
            return res.send({
                msg: 'se creo el candidadto con foto'
            });
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).send('Error inesperado');
        }
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
