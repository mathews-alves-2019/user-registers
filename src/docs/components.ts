export default {
    components: {
        schemas: {
            AdressDTO: {
                type: 'object',
                properties: {
                    usersId: {
                        type: 'string',
                        description: 'Id do usuário para o qual está sendo inserido um endereço.',
                        example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                    },
                    cep: {
                        type: 'string',
                        description: 'CEP do endereço.',
                        example: '08090‑284',
                    },
                    street: {
                        type: 'string',
                        description: 'Rua do endereço.',
                        example: false,
                    },
                    houseNumber: {
                        type: 'string',
                        description: 'Número da residência do endereço.',
                        example: false,
                    },
                    country: {
                        type: 'string',
                        description: 'País do endereço.',
                        example: 'BR',
                    },
                    state: {
                        type: 'string',
                        description: 'Estado do endereço.',
                        example: 'PB',
                    },
                },
            },
            LoginDTO: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: 'Email para login.',
                        example: 'example@email.com',
                    },
                    password: {
                        type: 'string',
                        description: 'Senha para login.',
                        example: 'senhavalida123',
                    },
                },
            },
            UserRegister: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: 'Email para registro de usuário.',
                        example: 'example@email.com',
                    },
                    password: {
                        type: 'string',
                        description: 'Senha para registro de usuário.',
                        example: 'senhavalida123',
                    },
                    confirmPassword: {
                        type: 'string',
                        description: 'Confirmação de senha para registro de usuário.',
                        example: 'senhavalida123',
                    },
                    name: {
                        type: 'string',
                        description: 'Nome para registro de usuário.',
                        example: 'Nome de Exemplo',
                    },
                },
            },
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                name: 'x-access-token',
                in: 'header',
            },
        },
    },
};
