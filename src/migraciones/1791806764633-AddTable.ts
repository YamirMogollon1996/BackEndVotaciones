import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddTable1791806764633 implements MigrationInterface {
    name = 'AddTable1791806764633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`candidato\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`apellido\` varchar(255) NOT NULL, \`partido\` varchar(255) NOT NULL, \`foto\` varchar(255) NULL, \`voto\` int NOT NULL DEFAULT '0', \`activo\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`candidato\``);
    }

}
