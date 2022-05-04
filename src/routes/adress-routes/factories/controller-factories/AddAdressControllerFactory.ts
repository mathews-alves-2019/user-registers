import { Controller } from '../../../../interfaces';
import Database from '../../../../config/database';
import { AddAdressController } from '../../controllers';
import { AddAdressRepository } from '../../../commons/repositories/adress';
import { makeAdressValidation } from '../validation-factories';

export const makeAddAdressController = (): Controller => {
    const controller = new AddAdressController(
        makeAdressValidation(),
        new AddAdressRepository(new Database()),
    );
    return controller;
};
