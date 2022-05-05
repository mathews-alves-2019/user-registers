import { Router } from 'express';

import adaptRoute from '../presentation/commons/adapters/route-adapter';
import { verifyJWT } from '../presentation/commons/auth/auth';
import { makeGetUserController, makeDeleteUserController, makeUpdateUserController } from '../presentation/user-routes/factories/controller-factories';

export default async (router: Router) => {
    router.get('/user/:id', verifyJWT, adaptRoute(makeGetUserController()));
    router.delete('/user/:id', verifyJWT, adaptRoute(makeDeleteUserController()));
    router.put('/user/:id', verifyJWT, adaptRoute(makeUpdateUserController()));
};
