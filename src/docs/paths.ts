import userRoute from './users';
import adressRoute from './adress';
import login from './login';

export default {
    paths: {
        ...userRoute,
        ...adressRoute,
        ...login,
    },
};
