import { CloudbinaryInstance } from "../../Cloudbinary.js";
import { AppDataSource } from "../../db/db.js";
import { Candidato } from "../Entities/Entitites.js"
import { ModeloCandidto } from "../Entities/ModeloCandidadto.js"


export interface RepositorioCandidatos<T> {
    create(datos: ModeloCandidto): void
    findAll(): T[] | Promise<T[]>;
    findById(id: number): Promise<T | null>;
    update(id: number, datos: Partial<T>): void
    delete(id: number): boolean | Promise<boolean>;
}


export class SerivicosCandidado implements RepositorioCandidatos<Candidato> {
    async create(datos: ModeloCandidto, path?: string) {
        try {
            let RepositorioCan = AppDataSource.getRepository(Candidato)
            let da = RepositorioCan.create({
                activo: datos.activo,
                apellido: datos.apellido,
                foto: path!,
                nombre: datos.nombre,
                partido: datos.partido,
                voto: datos.voto,
            })
            await RepositorioCan.save(da)

        } catch (error) {
            console.log(error)
        }
    }
    async findAll(): Promise<Candidato[]> {
        let datos = await AppDataSource.getRepository(Candidato).find()
        return datos
    }
    async findById(id: number): Promise<Candidato | null> {
        let Repo = await AppDataSource.getRepository(Candidato).findOne({
            where: {
                id: id
            }
        })
        return Repo
    }
    async update(id: number, datos?: Partial<Candidato>):
        Promise<Candidato | Promise<Candidato | null>> {
        let Encontrado = await this.findById(id)
        if (!Encontrado) return null
        Encontrado.voto!! ++
        await AppDataSource.manager.save(Encontrado)
        return Encontrado
    }
    delete(id: number): boolean | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
