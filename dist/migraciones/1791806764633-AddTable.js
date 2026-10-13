export class AddTable1791806764633 {
    name = 'AddTable1791806764633';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`candidato\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`apellido\` varchar(255) NOT NULL, \`partido\` varchar(255) NOT NULL, \`foto\` varchar(255) NULL, \`voto\` int NOT NULL DEFAULT '0', \`activo\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`candidato\``);
    }
}
//# sourceMappingURL=1791806764633-AddTable.js.map