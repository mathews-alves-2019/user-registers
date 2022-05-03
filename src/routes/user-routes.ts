import { Router } from 'express';

import adaptRoute from './commons/adapters/route-adapter';
import { verifyJWT } from './commons/auth/auth';
import { makeGetUserController, makeDeleteUserController, makeUpdateUserController } from './user-routes/factories/controller-factories';

export default async (router: Router) => {
    router.get('/getUser/:userId', verifyJWT, adaptRoute(makeGetUserController()));
    router.delete('/deleteUser/:userId', verifyJWT, adaptRoute(makeDeleteUserController()));
    router.put('/updateUser/:userId', verifyJWT, adaptRoute(makeUpdateUserController()));
};
