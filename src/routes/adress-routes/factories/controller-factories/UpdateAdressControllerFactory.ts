import { Controller } from '../../../../interfaces';
import Database from '../../../../config/database';
import { UpdateAdressRepository, FindAdressRepository } from '../../../commons/repositories/adress';
import { UpdateAdressController } from '../../controllers';
import { makeAdressValidation } from '../validation-factories';

export const makeUpdateAdressController = (): Controller => {
    const controller = new UpdateAdressController(
        makeAdressValidation(),
        new UpdateAdressRepository(new Database()),
        new FindAdressRepository(new Database()),
    );
    return controller;
};
