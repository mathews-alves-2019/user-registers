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
    router.post('/addAdress', verifyJWT, adaptRoute(makeAddAdressController()));
    router.get('/getAdress/:id', verifyJWT, adaptRoute(makeGetAdressController()));
    router.get('/getAdress/', verifyJWT, adaptRoute(makeGetAdressController()));
    router.delete('/deleteAdress/:id', verifyJWT, adaptRoute(makeDeleteAdressController()));
    router.put('/updateAdress/:id', verifyJWT, adaptRoute(makeUpdateAdressController()));
};
