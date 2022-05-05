import registerAdress from './register-adress';
import updateAdress from './update-adress';
import getAdress from './get-adressById';
import getAdressQuery from './get-adressByQuery';
import deleteAdress from './delete-adress';

export default {
    '/adress': {
        ...registerAdress,
        ...getAdressQuery,
    },
    '/adress/{id}': {
        ...getAdress,
        ...updateAdress,
        ...deleteAdress,
    },
};
