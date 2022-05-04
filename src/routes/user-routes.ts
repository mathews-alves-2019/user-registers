import { Router } from 'express';

import adaptRoute from '../presentation/commons/adapters/route-adapter';
import { verifyJWT } from '../presentation/commons/auth/auth';
import { makeGetUserController, makeDeleteUserController, makeUpdateUserController } from '../presentation/user-routes/factories/controller-factories';

export default async (router: Router) => {
    router.get('/getUser/:userId', verifyJWT, adaptRoute(makeGetUserController()));
    router.delete('/deleteUser/:userId', verifyJWT, adaptRoute(makeDeleteUserController()));
    router.put('/updateUser/:userId', verifyJWT, adaptRoute(makeUpdateUserController()));
};
