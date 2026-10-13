import Express from "express";
import { ServiciosEstudiante } from "../servicios/Estudiante-servicios.js";
import type { Request, Response } from "express";
export declare class ControllerUsuario {
    private readonly ServiciosSenior;
    constructor(ServiciosSenior: ServiciosEstudiante);
    BuscarDatos: (req: Request, res: Response) => Promise<Express.Response<any, Record<string, any>> | undefined>;
    createUsuario(): Promise<void>;
    ChangueVoto: (req: Request, res: Response) => Promise<Express.Response<any, Record<string, any>> | undefined>;
    finall: (req: Request, res: Response) => Promise<unknown>;
}
//# sourceMappingURL=controlador-Estudiante.d.ts.map