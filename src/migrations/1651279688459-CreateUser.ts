import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1651279688459 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar(200)',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar(80)',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
