import { AppDataSource } from "../../db/db.js";
import { Candidato } from "../Entities/Entitites.js";
import { ModeloCandidto } from "../Entities/ModeloCandidadto.js";
export class SerivicosCandidado {
    async create(datos) {
        console.log('mogollon osorio en el serivico ');
        let RepositorioCan = AppDataSource.getRepository(Candidato);
        let da = RepositorioCan.create({
            activo: datos.activo,
            apellido: datos.apellido,
            foto: datos.foto ?? '',
            nombre: datos.nombre,
            partido: datos.partido,
            voto: datos.voto,
        });
        await RepositorioCan.save(da);
    }
    async findAll() {
        let datos = await AppDataSource.getRepository(Candidato).find();
        return datos;
    }
    async findById(id) {
        let Repo = await AppDataSource.getRepository(Candidato).findOne({
            where: {
                id: id
            }
        });
        return Repo;
    }
    async update(id, datos) {
        let Encontrado = await this.findById(id);
        if (!Encontrado)
            return null;
        Encontrado.voto++;
        await AppDataSource.manager.save(Encontrado);
        return Encontrado;
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
