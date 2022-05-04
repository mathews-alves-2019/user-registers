import { Controller } from '../../../../interfaces';
import Database from '../../../../config/database';
import { GetAdressWithQueryController } from '../../controllers';
import { FindAdressRepository } from '../../../commons/repositories/adress';

export const makeGetAdressController = (): Controller => {
    const controller = new GetAdressWithQueryController(
        new FindAdressRepository(new Database()),
    );
    return controller;
};
