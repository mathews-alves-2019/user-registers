import { Router } from 'express';

import adaptRoute from './commons/adapters/route-adapter';
import { makeRegisterController } from './register-route/factories/controller-factories/RegisterControllerFactory';

export default async (router: Router) => {
    router.post('/regiterUser', adaptRoute(makeRegisterController()));
};
