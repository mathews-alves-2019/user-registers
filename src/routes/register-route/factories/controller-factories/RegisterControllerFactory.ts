import { makeLoginValidation } from '../validation-factories/RegisterValidationFactory';
import { Controller } from '../../../../interfaces';
import { RegisterController } from '../../controllers/RegisterController';
import { CreateUserRepository } from '../../../commons/repositories/user/UserRepository';
import Database from '../../../../config/database';

export const makeLoginController = (): Controller => {
    const database = new Database();
    const controller = new RegisterController(
        makeLoginValidation(),
        new CreateUserRepository(database),
    );
    return controller;
};
