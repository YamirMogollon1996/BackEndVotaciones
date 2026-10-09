import { AppDataSource } from "../../db/db.js";
import { Estudiante } from "../entities/Entities.js";


export class ServiciosEstudiante {
    async create(dtoUser: Estudiante) {
        let objeEstudiante = new Estudiante()
        objeEstudiante.dni = dtoUser.dni
        objeEstudiante.nombre = dtoUser.nombre,
            objeEstudiante.apellido_paterno = dtoUser.apellido_paterno,
            objeEstudiante.apellido_materno = dtoUser.apellido_materno,
            objeEstudiante.grado = dtoUser.grado,
            objeEstudiante.seccion = dtoUser.seccion,
            objeEstudiante.voto = dtoUser.voto
        await AppDataSource.manager.save(objeEstudiante)
    }

    async encontarElusaurio(dtoDni: string): Promise<Estudiante | null> {

        console.log('mogollon Osorio')
        let datos = await AppDataSource.getRepository(Estudiante).findOne({
            where: {
                dni: dtoDni
            }
        })
        if (!datos) throw new Error('no esta el usuario')
        console.log(datos)
        return datos
    }  

    
    async AddVoto(dtoDni: string) {

        let datos = await this.encontarElusaurio(dtoDni)
        if (!datos) return
        datos.voto += 1
        return await AppDataSource.manager.save(datos)

    }

    Finall = async () => {
        console.log('mogollon Osorio')
        return await AppDataSource.getRepository(Estudiante).find()

    }

}