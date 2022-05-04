import { makeUserValidation } from '../validation-factories';
import { Controller } from '../../../../interfaces';
import { RegisterController } from '../../controllers';
import { CreateUserRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';

export const makeRegisterController = (): Controller => {
    const controller = new RegisterController(
        makeUserValidation(),
        new CreateUserRepository(new Database()),
    );
    return controller;
};
