import { UserRegisterDTO } from '../../../commons/dto';
import {
    ValidationComposite,
    RequiredFieldValidation,
    EmailValidation,
    EmailValidatorAdapter,
    PasswordValidation,
    PasswordValidatorAdapter,
} from '../../../../validators';
import { Validation } from '../../../../interfaces';

export type LoginFields = {
    email: string;
    password: string;
};

export const makeLoginValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    const activity = new UserRegisterDTO('','','');
    const fieldsFromUserRegisterDTO: Array<Object> = Object.keys(activity).map((key) => key);
    for (const field of fieldsFromUserRegisterDTO) {
        validations.push(new RequiredFieldValidation(field as string));
    }
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
    validations.push(new PasswordValidation('password', 'confirmPassword', new PasswordValidatorAdapter()));
    return new ValidationComposite(validations);
};
