import { LoginDTO } from '../../../commons/dto';
import {
    ValidationComposite,
    RequiredFieldValidation,
    EmailValidation,
    EmailValidatorAdapter,
} from '../../../../validators';
import { Validation } from '../../../../interfaces';

export const makeLoginValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    const loginDTO = new LoginDTO('','');
    const fieldsFromLoginDTO: Array<Object> = Object.keys(loginDTO).map((key) => key);
    for (const field of fieldsFromLoginDTO) {
        validations.push(new RequiredFieldValidation(field as string));
    }
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
    return new ValidationComposite(validations);
};
