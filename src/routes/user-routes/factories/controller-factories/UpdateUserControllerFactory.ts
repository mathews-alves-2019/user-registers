import { Controller } from '../../../../interfaces';
import { FindUserByIdRepository, UpdateUserRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';
import { UpdateUserController } from '../../controllers';
import { makeUserValidationForUpdate } from '../validation-factories/UserValidationForUpdate';

export const makeUpdateUserController = (): Controller => {
    const database = new Database();
    const controller = new UpdateUserController(
        makeUserValidationForUpdate(),
        new UpdateUserRepository(database),
        new FindUserByIdRepository(database),
    );
    return controller;
};
