import { Router } from 'express';

import adaptRoute from '../presentation/commons/adapters/route-adapter';
import { makeLoginController } from '../presentation/login-route/factories/controller-factories/LoginControllerFactory';

export default async (router: Router) => {
    router.post('/login', adaptRoute(makeLoginController()));
};
