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
import { EmailAlreadyExistsValidation } from '../../../../validators/EmailAlreadyExistsValidation';
import { FindUserByEmailRepository } from '../../../commons/repositories/user/FindUserByEmailRepository';
import Database from '../../../../config/database';

export const makeUserValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    const userRegisterDTO = new UserRegisterDTO('','','');
    const fieldsFromUserRegisterDTO: Array<Object> = Object.keys(userRegisterDTO).map((key) => key);
    for (const field of fieldsFromUserRegisterDTO) {
        validations.push(new RequiredFieldValidation(field as string));
    }
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
    validations.push(new PasswordValidation('password', 'confirmPassword', new PasswordValidatorAdapter()));
    validations.push(new EmailAlreadyExistsValidation('email', new FindUserByEmailRepository(new Database())));
    return new ValidationComposite(validations);
};
