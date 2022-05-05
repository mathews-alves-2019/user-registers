export default {
    post: {
        tags: ['Users'],
        description: 'Rota para registar usuário.',
        operationId: 'userRegister',
        parameters: [
            {
                name: 'name',
                in: 'body',
                example: 'Nome de Exemplo',
                required: true,
                description: 'Nome do usuário a ser inserido.',
            },
            {
                name: 'email',
                in: 'body',
                example: 'example@email.com',
                required: true,
                description: 'Email do usuário a ser inserido.',
            },
            {
                name: 'password',
                in: 'body',
                example: 'senhavalida123',
                required: true,
                description: 'Senha do usuário a ser inserido.',
            },
            {
                name: 'confirmPassword',
                in: 'body',
                example: 'senhavalida123',
                required: true,
                description: 'Confirmação da senha do usuário a ser inserido.',
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
                description: 'Usuário registrado.',
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
