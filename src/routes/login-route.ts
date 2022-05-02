import { Router } from 'express';

import adaptRoute from './commons/adapters/route-adapter';
import { makeLoginController } from './login-route/factories/controller-factories/LoginControllerFactory';

export default async (router: Router) => {
    router.post('/login', adaptRoute(makeLoginController()));
};
