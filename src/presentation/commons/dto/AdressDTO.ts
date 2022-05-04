export class AdressDTO {
    constructor(
        cep: string,
        street: string,
        usersId: string,
        houseNumber: string,
        country: string,
        state: string,
    ) {
        this.cep = cep;
        this.country = country;
        this.state = state;
        this.street = street;
        this.houseNumber = houseNumber;
        this.usersId = usersId;
    }

    cep: string;

    street: string;

    usersId: string;

    houseNumber: string;

    country: string;

    state: string;
}
