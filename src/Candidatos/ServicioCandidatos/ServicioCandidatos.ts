
import { Await } from "react-router-dom";
import { AppDataSource } from "../../db/db.js";
import {   Candidato  } from "../Entities/Entitites.js"   
export interface RepositorioCandidatos<T> {
	create(datos: Partial<T>): void 
	findAll(): T[] | Promise<T[]>;
	findById(id: number):  Promise<T | null>;
	update(id: number, datos: Partial<T>): void
	delete(id: number): boolean | Promise<boolean>;
}

export class SerivicosCandidado implements RepositorioCandidatos< Candidato> {
   async create(datos: Partial<Candidato>) {
    
            let ObjetCandidto =  new Candidato()  
            ObjetCandidto.nombre =  datos.nombre! , 
            ObjetCandidto.apellido =  datos.apellido! 
            ObjetCandidto.partido =  datos.partido! , 
            ObjetCandidto.foto =  datos.foto! 
            ObjetCandidto.voto =  datos.voto!
            ObjetCandidto.activo =  datos.activo!  
            
            await AppDataSource.manager.save( ObjetCandidto )

    }  
    async findAll(): Promise<Candidato[]> {        
            let datos  = await AppDataSource.getRepository(Candidato).find() 
            return datos
    } 
    async findById(id: number): Promise<Candidato | null> {
        let Repo  = await  AppDataSource.getRepository(Candidato).findOne({
                    where: {
                        id :id
                    }
        })
        return Repo
    } 
    async update(id: number, datos?: Partial<Candidato>): Promise<Candidato | Promise<Candidato | null> > {
        let Encontrado = await this.findById( id )    
        if ( !Encontrado) return null
        Encontrado.voto!! ++ 
        await AppDataSource.manager.save( Encontrado)
        return Encontrado

    }
    delete(id: number): boolean | Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}

// export class ServicioCandidatos<T extends { id: number | string }> {
// 	constructor(private readonly repositorio:Candidato) {}

// 	crear(datos: Partial<T>): T | Promise<T> {
//                 let createdata =  new 
                

//     }

// 	obtenerTodos(): T[] | Promise<T[]> {
// 		return this.repositorio.findAll();
// 	}

// 	obtenerPorId(id: T['id']): T | null | Promise<T | null> {
// 		return this.repositorio.findById(id);
// 	}

// 	actualizar(id: T['id'], datos: Partial<T>): T | null | Promise<T | null> {
// 		return this.repositorio.update(id, datos);
// 	}

// 	eliminar(id: T['id']): boolean | Promise<boolean> {
// 		return this.repositorio.delete(id);
// 	}
// }
