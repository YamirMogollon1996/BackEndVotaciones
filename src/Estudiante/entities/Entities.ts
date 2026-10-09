import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"

@Entity()
export class Estudiante {

    @PrimaryGeneratedColumn()
    id!: number;


    @Column({ type: "varchar", length: 8, unique: true })
    dni!: string;

    @Column({ type: "varchar", length: 100 })
    nombre!: string;

    @Column({ type: "varchar", length: 100 })
    apellido_paterno!: string;

    @Column({ type: "varchar", length: 100 })
    apellido_materno!: string;

    @Column({ type: "varchar", length: 50 })
    grado!: string;

    @Column({ type: "varchar", length: 10 })
    seccion!: string;

    @Column({ type: "int", default: 0 })
    voto!: number;



}