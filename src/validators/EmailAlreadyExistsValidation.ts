import { EntityRepository, Validation } from '../interfaces';
import { UserAlreadyExistsError } from '../errors';

export class EmailAlreadyExistsValidation implements Validation {
    constructor(
        private readonly fieldName: string,
        private readonly repository: EntityRepository,
    ) { }

    async validate(input: any): Promise<Error> {
        const user = await this.repository.execute(input[this.fieldName]);
        if (user && user.email) {
            return new UserAlreadyExistsError();
        }
    }
}

export default EmailAlreadyExistsValidation;
