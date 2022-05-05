export default {
    put: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Adress'],
        description: 'Rota para atualizar endereço do usuário.',
        operationId: 'adressUpdate',
        parameters: [
            {
                name: 'id',
                in: 'path',
                example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                required: true,
                description: 'Id do endereço a ser atualizado.',
            },
            {
                name: 'cep',
                in: 'body',
                example: '08090‑284',
                description: 'CEP do endereço do usuário a ser atualizado.',
            },
            {
                name: 'country',
                in: 'body',
                example: 'BR',
                description: 'País do endereço do usuário a ser atualizado.',
            },
            {
                name: 'state',
                in: 'body',
                example: 'PE',
                description: 'Estado do usuário a ser atualizado.',
            },
            {
                name: 'street',
                in: 'body',
                example: 'Rua Castelo Branco',
                description: 'Rua do usuário a ser atualizado.',
            },
            {
                name: 'houseNumber',
                in: 'body',
                description: 'Número da casa do usuário a ser atualizado.',
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
                description: 'Endereço atualizado.',
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
