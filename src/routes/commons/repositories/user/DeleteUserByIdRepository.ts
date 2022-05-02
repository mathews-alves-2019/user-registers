import User from '../../entities/User';
import { EntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';

export class DeleteUserByIdRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(id: string) {
        return await this.database.init().then(async () => await this.database
            .getConnection().manager
            .delete(User, id));
    }
}
