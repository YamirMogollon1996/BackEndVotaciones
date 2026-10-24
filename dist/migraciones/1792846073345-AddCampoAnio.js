export class AddCampoAnio1792846073345 {
    name = 'AddCampoAnio1792846073345';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`candidato\` ADD \`anio\` int NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`candidato\` DROP COLUMN \`anio\``);
    }
}
