export declare class ModeloCandidto {
    nombre: string;
    apellido: string;
    partido: string;
    foto?: string | undefined;
    voto: number;
    activo: boolean;
    constructor(nombre: string, apellido: string, partido: string, foto?: string | undefined, voto?: number, activo?: boolean);
    validar(): void;
    votar(): void;
    desactivar(): void;
}
//# sourceMappingURL=ModeloCandidadto.d.ts.map