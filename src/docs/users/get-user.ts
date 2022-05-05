export default {
    get: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Users'],
        description: 'Rota para encontrar usuário(s). Pode ser passado id apenas ou pais(country) ou estado(state) via querystring.',
        operationId: 'userGet',
        parameters: [
            {
                name: 'id',
                in: 'path',
                example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                required: false,
                description: 'Id do usuário a ser encontrado na base.',
            },
            {
                name: 'country',
                in: 'query',
                example: 'BR',
                description: 'País do usuário a ser encontrado na base.',
            },
            {
                name: 'state',
                in: 'query',
                example: 'PB',
                description: 'Estado do usuário a ser encontrado na base.',
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
