import { UpdateEntityRepository } from '../../../../interfaces';
import Database from '../../../../config/database';
import Adress from '../../entities/Adress';

export class UpdateAdressRepository implements UpdateEntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(adress: Adress) {
        return await this.database.init().then(async () => await this.database.getConnection()
            .manager.save(Adress, adress).then((response: any) => response));
    }
}
