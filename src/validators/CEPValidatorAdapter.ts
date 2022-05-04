import { BasicValidator } from '../interfaces';

export class CEPValidatorAdapter implements BasicValidator {
    isValid(cep: string): boolean {
        const cepFormat = /^[0-9]{8}$/;
        const formatedCEP = cep.replace(/\D/g, '');
        if (formatedCEP.length <= 0) {
            return false;
        }
        return cepFormat.test(formatedCEP);
    }
}
