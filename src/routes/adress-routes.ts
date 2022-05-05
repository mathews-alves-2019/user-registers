import { Router } from 'express';

import adaptRoute from '../presentation/commons/adapters/route-adapter';
import { verifyJWT } from '../presentation/commons/auth/auth';
import {
    makeGetAdressController,
    makeUpdateAdressController,
    makeDeleteAdressController,
    makeAddAdressController,
} from '../presentation/adress-routes/factories/controller-factories';

export default async (router: Router) => {
    router.post('/adress', verifyJWT, adaptRoute(makeAddAdressController()));
    router.get('/adress/:id', verifyJWT, adaptRoute(makeGetAdressController()));
    router.get('/adress', verifyJWT, adaptRoute(makeGetAdressController()));
    router.delete('/adress/:id', verifyJWT, adaptRoute(makeDeleteAdressController()));
    router.put('/adress/:id', verifyJWT, adaptRoute(makeUpdateAdressController()));
};
