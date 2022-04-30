import { Router } from 'express';

import adaptRoute from './commons/adapters/route-adapter';
import { makeLoginController } from './register-route/factories/controller-factories/RegisterControllerFactory';

export default async (router: Router) => {
    router.post('/login', adaptRoute(makeLoginController()));
};
