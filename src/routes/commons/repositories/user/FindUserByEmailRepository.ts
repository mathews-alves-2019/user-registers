import User from '../../entities/User';
import { EntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';

export class FindUserByEmailRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(email: string) {
        return await this.database.init().then(async () => await this.database
            .getConnection().manager
            .findOne(User, {
                where: { email },
                select: ['password', 'email', 'id'],
            }));
    }
}
