import User from '../../entities/User';
import { UpdateEntityRepository } from '../../../../interfaces';
import { UserRegisterDTO } from '../../dto';
import Database from '../../../../config/database';

export class UpdateUserRepository implements UpdateEntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(user: UserRegisterDTO, userId: string) {
        return await this.database.init().then(async () => {
            const entity = this.database.getConnection().manager.create(User, user);
            entity.id = userId;
            console.log(entity);
            return await this.database.getConnection().manager
                .update(User, userId, { ...entity }).then((response: any) => response);
        });
    }
}
