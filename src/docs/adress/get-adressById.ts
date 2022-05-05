export default {
    get: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Adress'],
        description: 'Rota para encontrar endereço do usuário(s).',
        operationId: 'adressGet',
        parameters: [
            {
                name: 'id',
                in: 'path',
                example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                required: false,
                description: 'Id do usuário a ser encontrado na base.',
            },
        ],
        responses: {
            200: {
                description: 'Usuário registrado.',
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
