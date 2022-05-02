import { makeLoginValidation } from '../validation-factories/LoginValidationFactory';
import { Controller } from '../../../../interfaces';
import { LoginController } from '../../controllers/LoginController';
import { FindUserByEmailRepository } from '../../../commons/repositories/user/FindUserByEmailRepository';
import Database from '../../../../config/database';

export const makeLoginController = (): Controller => {
    const controller = new LoginController(
        makeLoginValidation(),
        new FindUserByEmailRepository(new Database()),
    );
    return controller;
};
