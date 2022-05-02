import { Controller } from '../../../../interfaces';
import { FindUserByIdRepository } from '../../../commons/repositories/user';
import Database from '../../../../config/database';
import { GetUserController } from '../../controllers';

export const makeGetUserController = (): Controller => {
    const controller = new GetUserController(
        new FindUserByIdRepository(new Database()),
    );
    return controller;
};
