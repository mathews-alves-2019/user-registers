import User from '../../entities/User';
import { UpdateEntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';

export class UpdateUserRepository implements UpdateEntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(user: User) {
        return await this.database.init().then(async () => await this.database.getConnection()
            .manager.save(User, user).then((response: any) => response));
    }
}
