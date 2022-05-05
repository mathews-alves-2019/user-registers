export default {
    get: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Adress'],
        description: 'Rota para encontrar endereço do usuário(s). Pode ser passado país(country) ou estado(state) via querystring.',
        operationId: 'adressGetByQuery',
        parameters: [
            {
                name: 'country',
                in: 'query',
                example: 'BR',
                required: false,
                description: 'País do usuário a ser encontrado na base.',
            },
            {
                name: 'state',
                in: 'query',
                example: 'PB',
                required: false,
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
