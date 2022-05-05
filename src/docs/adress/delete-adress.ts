export default {
    delete: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Adress'],
        description: 'Rota para excluir endereço.',
        operationId: 'adressDelete',
        parameters: [
            {
                name: 'id',
                in: 'path',
                example: '6bdcc335-852e-4949-88d6-db0cb5244a7b',
                required: false,
                description: 'Id do endereço a ser excluido.',
            },
        ],
        responses: {
            200: {
                description: 'Endereço excluído.',
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
