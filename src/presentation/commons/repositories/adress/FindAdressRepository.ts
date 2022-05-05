import Adress from '../../entities/Adress';
import { EntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';

export class FindAdressRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(where: { country: string, state: string, id: string }) {
        return await this.database.init().then(async () => await this.database
            .getConnection().manager
            .find(Adress, {
                where,
            }));
    }
}
