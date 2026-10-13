import { Candidato } from "../Entities/Entitites.js";
export interface RepositorioCandidatos<T> {
    create(datos: T): void;
    findAll(): T[] | Promise<T[]>;
    findById(id: number): Promise<T | null>;
    update(id: number, datos: Partial<T>): void;
    delete(id: number): boolean | Promise<boolean>;
}
export declare class SerivicosCandidado implements RepositorioCandidatos<Candidato> {
    create(datos: Candidato): Promise<void>;
    findAll(): Promise<Candidato[]>;
    findById(id: number): Promise<Candidato | null>;
    update(id: number, datos?: Partial<Candidato>): Promise<Candidato | Promise<Candidato | null>>;
    delete(id: number): boolean | Promise<boolean>;
}
//# sourceMappingURL=ServicioCandidatos.d.ts.map