import { Controller } from '../../../../interfaces';
import { UpdateUserRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';
import { UpdateUserController } from '../../controllers';
import { makeUserValidation } from '../../../register-route/factories/validation-factories/RegisterValidationFactory';

export const makeUpdateUserController = (): Controller => {
    const controller = new UpdateUserController(
        makeUserValidation(),
        new UpdateUserRepository(new Database()),
    );
    return controller;
};
