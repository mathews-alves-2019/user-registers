import User from '../../entities/User';
import { EntityRepository } from '../../../../interfaces';
import { UserRegisterDTO } from '../../dto';
import Database from '../../../../config/database';

export class CreateUserRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(user: UserRegisterDTO) {
        return await this.database.init().then(async () => {
            const entity = this.database.getConnection().manager.create(User, user);
            return await this.database.getConnection().manager
                .save(entity).then((response: any) => response);
        });
    }
}
