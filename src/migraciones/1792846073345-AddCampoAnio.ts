// import { QueryRunner } from "typeorm";
import  type { MigrationInterface ,QueryRunner   }  from 'typeorm'
export class AddCampoAnio1792846073345 implements MigrationInterface {
    name = 'AddCampoAnio1792846073345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`candidato\` ADD \`anio\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`candidato\` DROP COLUMN \`anio\``);
    }

}
