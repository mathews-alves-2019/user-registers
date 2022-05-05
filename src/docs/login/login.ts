export default {
    post: {
        tags: ['Login'],
        description: 'Rota para login.',
        operationId: 'loginRouter',
        parameters: [
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
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/LoginDTO',
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
