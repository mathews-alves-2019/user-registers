import { Controller } from '../../../../interfaces';
import { DeleteUserByIdRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';
import { DeleteUserController } from '../../controllers';

export const makeDeleteUserController = (): Controller => {
    const controller = new DeleteUserController(
        new DeleteUserByIdRepository(new Database()),
    );
    return controller;
};
