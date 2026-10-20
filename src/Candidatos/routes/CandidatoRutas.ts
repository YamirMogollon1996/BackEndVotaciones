import Express from "express"
import { SerivicosCandidado } from "../ServicioCandidatos/ServicioCandidatos.js"
import ControllerCandidatos from "../ControllerCandidatos/ControllerCandidatos.js"
export let ExpressRouter = Express.Router()
let RouterCandidatos = new ControllerCandidatos(new SerivicosCandidado())

import { multerDatos } from "../../helpers/SubidaFotos.js"

ExpressRouter.post('/create',multerDatos.single('foto'),RouterCandidatos.crearCandidato)
ExpressRouter.get('/todos', RouterCandidatos.obtenerCandidatos)
ExpressRouter.post('/find', RouterCandidatos.obtenerCandidatoPorId)
