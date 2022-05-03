import { makeUserValidation } from '../validation-factories/RegisterValidationFactory';
import { Controller } from '../../../../interfaces';
import { RegisterController } from '../../controllers/RegisterController';
import { CreateUserRepository } from '../../../commons/repositories/user/CreateUserRepository';
import Database from '../../../../config/database';

export const makeRegisterController = (): Controller => {
    const controller = new RegisterController(
        makeUserValidation(),
        new CreateUserRepository(new Database()),
    );
    return controller;
};
