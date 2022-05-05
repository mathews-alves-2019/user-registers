export default {
    delete: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Users'],
        description: 'Rota para excluir usuário. ',
        operationId: 'userDelete',
        parameters: [
            {
                name: 'id',
                in: 'path',
                example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                required: false,
                description: 'Id do usuário a ser excluido.',
            },
        ],
        responses: {
            200: {
                description: 'Usuário excluído.',
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
