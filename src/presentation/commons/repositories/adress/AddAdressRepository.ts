import Adress from '../../entities/Adress';
import { EntityRepository } from '../../../../interfaces';
import { AdressDTO } from '../../dto';
import Database from '../../../../config/database';

export class AddAdressRepository implements EntityRepository {
    constructor(private readonly database: Database){
    }

    async execute(adress: AdressDTO) {
        return await this.database.init().then(async () => {
            const entity = this.database.getConnection().manager.create(Adress, adress);
            return await this.database.getConnection().manager
                .save(entity).then((response: any) => response);
        });
    }
}
