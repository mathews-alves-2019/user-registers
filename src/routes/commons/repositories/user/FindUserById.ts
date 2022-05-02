import User from '../../entities/User';
import { EntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';

export class FindUserByIdRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(id: string) {
        return await this.database.init().then(async () => await this.database
            .getConnection().manager
            .findOne(User, {
                where: { id },
            }));
    }
}
