import express from "express"
let appRouter = express.Router()
import { ControllerUsuario } from "../controllerEstudiante/controlador-Estudiante.js"
import { ServiciosEstudiante } from "../servicios/Estudiante-servicios.js"
let MyServicio = new ServiciosEstudiante()
export let UserController = new ControllerUsuario(MyServicio)
appRouter.get('/', UserController.createUsuario)
appRouter.post('/find', UserController.BuscarDatos)
/**
 * @openapi
 * /estudiantes/{id}/buscar:
 *   post:
 *     summary: Registrar voto de un estudiante
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description:Usuario Encontrado
 *       400:
 *         description: El estudiante ya votó
 */
appRouter.get('/todos', UserController.finall)


/**
 * @openapi
 * /estudiantes/{id}/voto:
 *   post:
 *     summary: Registrar voto de un estudiante
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Voto registrado correctamente
 *       400:
 *         description: El estudiante ya votó
 */
appRouter.post('/addVoto', UserController.ChangueVoto)



/**
 * @openapi
 * /estudiantes/totalvotos:
 *   get:
 *     summary: totalEstudiantes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Voto registrado correctamente
 *       400:
 *         description: El estudiante ya votó
 */
appRouter.get('/totalvotos', UserController.TotalesVots)


export {
    appRouter
}