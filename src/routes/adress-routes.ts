import { Router } from 'express';

import adaptRoute from './commons/adapters/route-adapter';
import { verifyJWT } from './commons/auth/auth';
import {
    makeGetAdressController,
    makeUpdateAdressController,
    makeDeleteAdressController,
    makeAddAdressController,
} from './adress-routes/factories/controller-factories';

export default async (router: Router) => {
    router.post('/addAdress', verifyJWT, adaptRoute(makeAddAdressController()));
    router.get('/getAdress/:id', verifyJWT, adaptRoute(makeGetAdressController()));
    router.get('/getAdress/', verifyJWT, adaptRoute(makeGetAdressController()));
    router.delete('/deleteAdress/:adressId', verifyJWT, adaptRoute(makeDeleteAdressController()));
    router.put('/updateAdress/:id', verifyJWT, adaptRoute(makeUpdateAdressController()));
};
