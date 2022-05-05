export default {
    post: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Adress'],
        description: 'Rota para registar endereço para o usuário.',
        operationId: 'adressRegister',
        parameters: [
            {
                name: 'cep',
                in: 'body',
                example: '08090‑284',
                required: true,
                description: 'CEP do endereço do usuário a ser inserido.',
            },
            {
                name: 'country',
                in: 'body',
                example: 'BR',
                required: true,
                description: 'País do endereço do usuário a ser inserido.',
            },
            {
                name: 'state',
                in: 'body',
                example: 'PE',
                required: true,
                description: 'Estado do usuário a ser inserido.',
            },
            {
                name: 'street',
                in: 'body',
                example: 'Rua Castelo Branco',
                required: true,
                description: 'Rua do usuário a ser inserido.',
            },
            {
                name: 'houseNumber',
                in: 'body',
                required: true,
                description: 'Número da casa do usuário a ser inserido.',
            },
            {
                name: 'usersId',
                in: 'body',
                example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                required: true,
                description: 'Id do usuário.',
            },
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/AdressDTO',
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Endereço registrado.',
            },
            500: {
                description: 'Erro no servidor.',
            },
            400: {
                description: 'Parâmetro inválido.',
            },
            401: {
                description: 'Não autorizado.',
            },
        },
    },
};
