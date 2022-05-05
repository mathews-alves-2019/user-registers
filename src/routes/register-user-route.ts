import { Router } from 'express';

import adaptRoute from '../presentation/commons/adapters/route-adapter';
import { makeRegisterController } from '../presentation/register-route/factories/controller-factories';

export default async (router: Router) => {
    router.post('/user', adaptRoute(makeRegisterController()));
};
