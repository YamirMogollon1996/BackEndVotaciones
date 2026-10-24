var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
let Candidato = class Candidato {
    id;
    nombre;
    apellido;
    partido;
    foto;
    voto;
    anio;
    activo;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Candidato.prototype, "id", void 0);
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Candidato.prototype, "nombre", void 0);
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Candidato.prototype, "apellido", void 0);
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Candidato.prototype, "partido", void 0);
__decorate([
    Column({ nullable: true, type: 'varchar' }),
    __metadata("design:type", String)
], Candidato.prototype, "foto", void 0);
__decorate([
    Column({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Candidato.prototype, "voto", void 0);
__decorate([
    Column({
        name: 'anio',
        type: 'int',
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Number)
], Candidato.prototype, "anio", void 0);
__decorate([
    Column({ default: true, type: 'boolean' }),
    __metadata("design:type", Boolean)
], Candidato.prototype, "activo", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Candidato.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Candidato.prototype, "updatedAt", void 0);
Candidato = __decorate([
    Entity()
], Candidato);
export { Candidato };
