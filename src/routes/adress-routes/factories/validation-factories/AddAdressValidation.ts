import { AdressDTO } from '../../../commons/dto';
import {
    ValidationComposite,
    RequiredFieldValidation,
    CEPValidatorAdapter,
} from '../../../../validators';
import { Validation } from '../../../../interfaces';
import { CEPValidation } from '../../../../validators/CEPValidation';

export const makeAdressValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    const adreddDTO = new AdressDTO('','','','','','');
    const fieldsFromAdressDTO: Array<Object> = Object.keys(adreddDTO).map((key) => key);
    for (const field of fieldsFromAdressDTO) {
        validations.push(new RequiredFieldValidation(field as string));
    }
    validations.push(new CEPValidation('cep', new CEPValidatorAdapter()));
    return new ValidationComposite(validations);
};
