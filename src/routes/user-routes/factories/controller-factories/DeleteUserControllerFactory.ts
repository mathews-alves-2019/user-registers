import { Controller } from '../../../../interfaces';
import { DeleteUserByIdRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';
import { GetUserController } from '../../controllers';

export const makeDeleteUserController = (): Controller => {
    const controller = new GetUserController(
        new DeleteUserByIdRepository(new Database()),
    );
    return controller;
};
