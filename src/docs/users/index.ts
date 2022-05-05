import registerUser from './register-user';
import getUser from './get-user';
import deleteUser from './delete-user';
import updateUser from './update-user';

export default {
    '/user': {
        ...registerUser,
    },
    '/user/{id}': {
        ...getUser,
        ...updateUser,
        ...deleteUser,
    },
};
