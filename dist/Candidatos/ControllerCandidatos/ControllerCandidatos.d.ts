import type { Request, Response } from "express";
import { SerivicosCandidado } from "../ServicioCandidatos/ServicioCandidatos.js";
export default class ControllerCandidatos {
    private readonly candidatoService;
    constructor(candidatoService: SerivicosCandidado);
    obtenerCandidatos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    obtenerCandidatoPorId: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    crearCandidato: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    actualizarCandidato: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    eliminarCandidato: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=ControllerCandidatos.d.ts.map