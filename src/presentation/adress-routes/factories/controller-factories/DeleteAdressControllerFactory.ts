import { Controller } from '../../../../interfaces';
import Database from '../../../../config/database';
import { DeleteAdressRepository } from '../../../commons/repositories/adress/DeleteAdressRepository';
import { DeleteAdressController } from '../../controllers';

export const makeDeleteAdressController = (): Controller => {
    const controller = new DeleteAdressController(
        new DeleteAdressRepository(new Database()),
    );
    return controller;
};
