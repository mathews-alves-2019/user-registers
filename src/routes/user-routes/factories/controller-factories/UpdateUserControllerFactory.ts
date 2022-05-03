import { Controller } from '../../../../interfaces';
import { UpdateUserRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';
import { UpdateUserController } from '../../controllers';
import { makeUserValidationForUpdate } from '../validation-factories/UserValidationForUpdate';

export const makeUpdateUserController = (): Controller => {
    const controller = new UpdateUserController(
        makeUserValidationForUpdate(),
        new UpdateUserRepository(new Database()),
    );
    return controller;
};
