import Adress from '../../entities/Adress';
import { EntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';

export class DeleteAdressRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(adressId: string) {
        return await this.database.init().then(async () => await this.database
            .getConnection().manager
            .delete(Adress, adressId));
    }
}
