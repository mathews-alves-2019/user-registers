import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdress1651584860253 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'adress',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'cep',
                        type: 'varchar(9)',
                        isNullable: false,
                    },
                    {
                        name: 'street',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                    {
                        name: 'houseNumber',
                        type: 'varchar(20)',
                        isNullable: false,
                    },
                    {
                        name: 'country',
                        type: 'varchar(3)',
                        isNullable: false,
                    },
                    {
                        name: 'state',
                        type: 'varchar(25)',
                        isNullable: false,
                    },
                    {
                        name: 'usersId',
                        type: 'uuid',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'usersId_fk',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['usersId'],
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('adress');
    }
}
