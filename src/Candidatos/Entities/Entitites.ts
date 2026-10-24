import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm"

@Entity()
export class Candidato {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'varchar' })
    nombre!: string;

    @Column({ type: 'varchar' })
    apellido!: string;

    @Column({ type: 'varchar' })
    partido!: string;

    @Column({ nullable: true, type: 'varchar' })
    foto!: string;

    @Column({ type: "int", default: 0 })
    voto!: number;   

    @Column({
      name: 'anio',
      type:'int',
      nullable: true,
      default: null,
    })
    anio!:  number

    @Column({ default: true  , type:'boolean'})
    activo!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}