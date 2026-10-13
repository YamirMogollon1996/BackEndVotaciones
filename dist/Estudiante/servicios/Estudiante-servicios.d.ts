import { Estudiante } from "../entities/Entities.js";
export declare class ServiciosEstudiante {
    create(dtoUser: Estudiante): Promise<void>;
    encontarElusaurio(dtoDni: string): Promise<Estudiante | null>;
    AddVoto(dtoDni: string): Promise<Estudiante | undefined>;
    Finall: () => Promise<Estudiante[]>;
}
//# sourceMappingURL=Estudiante-servicios.d.ts.map