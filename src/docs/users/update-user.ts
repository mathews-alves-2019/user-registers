export default {
    put: {
        security: [{
            ApiKeyAuth: [],
        }],
        tags: ['Users'],
        description: 'Rota para atualizar usuário.',
        operationId: 'userUpdate',
        parameters: [
            {
                name: 'id',
                in: 'path',
                example: 'b8ee7164-fd5f-4163-8ee2-cbc9e60812e3',
                required: true,
                description: 'Id do usuário a ser atualizado.',
            },
            {
                name: 'name',
                in: 'body',
                example: 'Nome de Exemplo',
                description: 'Nome do usuário a ser atualizado.',
            },
            {
                name: 'email',
                in: 'body',
                example: 'example@email.com',
                description: 'Email do usuário a ser atualizado.',
            },
            {
                name: 'password',
                in: 'body',
                example: 'senhavalida123',
                description: 'Senha do usuário a ser atualizado.',
            },
            {
                name: 'confirmPassword',
                in: 'body',
                example: 'senhavalida123',
                description: 'Confirmação da senha do usuário a ser atualizado.',
            },
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserRegister',
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Usuário atualizado.',
            },
            500: {
                description: 'Erro no servidor.',
            },
            400: {
                description: 'Parâmetro inválido.',
            },
        },
    },
};
