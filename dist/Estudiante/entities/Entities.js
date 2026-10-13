var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
let Estudiante = class Estudiante {
    id;
    dni;
    nombre;
    apellido_paterno;
    apellido_materno;
    grado;
    seccion;
    voto;
};
__decorate([
    PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Estudiante.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 8, unique: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "dni", void 0);
__decorate([
    Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Estudiante.prototype, "nombre", void 0);
__decorate([
    Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Estudiante.prototype, "apellido_paterno", void 0);
__decorate([
    Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Estudiante.prototype, "apellido_materno", void 0);
__decorate([
    Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Estudiante.prototype, "grado", void 0);
__decorate([
    Column({ type: "varchar", length: 10 }),
    __metadata("design:type", String)
], Estudiante.prototype, "seccion", void 0);
__decorate([
    Column({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Estudiante.prototype, "voto", void 0);
Estudiante = __decorate([
    Entity()
], Estudiante);
export { Estudiante };
//# sourceMappingURL=Entities.js.map