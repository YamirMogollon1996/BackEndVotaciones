import express from "express"
let appRouter = express.Router()
import { ControllerUsuario } from "../controllerEstudiante/controlador-Estudiante.js"
import { ServiciosEstudiante } from "../servicios/Estudiante-servicios.js"   


let MyServicio  =    new ServiciosEstudiante()
export let UserController = new ControllerUsuario(MyServicio) 
  


appRouter.get('/', UserController.createUsuario)
appRouter.post('/find', UserController.BuscarDatos)
appRouter.get('/todos', UserController.finall)

export {
    appRouter
}