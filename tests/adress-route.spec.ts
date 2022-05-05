import 'reflect-metadata';
import request from 'supertest';
import randomEmail from 'random-email';
import { Express } from 'express';
import { app } from '../src/server';
import { decodeToken } from '../src/presentation/commons/auth/auth';

let server: Express;

describe('User register test', () => {
    beforeAll(async () => {
        server = await app();
    });

    test('Should return 200 when all params are valid and the adress is inserted', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/user')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'validPassword123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
            .post('/api/adress')
            .send(
                {
                    cep: '08090‑284',
                    street: 'Rua 03 de Outubro; (Ch Três Meninas)',
                    // eslint-disable-next-line @typescript-eslint/dot-notation
                    usersId: data['id'],
                    houseNumber: '10',
                    country: 'BR',
                    state: 'PE',
                },
            )
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });

    test('Should return 200 when all params are valid and the adress is deleted', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/user')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'validPassword123',
                },
            );

        const data = decodeToken(reponse.body.token);

        const adress = await request(server)
            .post('/api/adress')
            .send(
                {
                    cep: '08090‑284',
                    street: 'Rua 03 de Outubro; (Ch Três Meninas)',
                    // eslint-disable-next-line @typescript-eslint/dot-notation
                    usersId: data['id'],
                    houseNumber: '10',
                    country: 'BR',
                    state: 'PE',
                },
            )
            .set('x-access-token', reponse.body.token);

        await request(server)
            .delete(`/api/adress/${adress.body.id}`)
            .send(
                {
                    cep: '08090‑000',
                    street: 'Rua 02 de Outubro',
                    // eslint-disable-next-line @typescript-eslint/dot-notation
                    usersId: data['id'],
                    houseNumber: '20',
                    country: 'BR',
                    state: 'SP',
                },
            )
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });

    test('Should return 200 when the adress is finded by query string.', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/user')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'validPassword123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
            .post('/api/adress')
            .send(
                {
                    cep: '08090‑284',
                    street: 'Rua 03 de Outubro; (Ch Três Meninas)',
                    // eslint-disable-next-line @typescript-eslint/dot-notation
                    usersId: data['id'],
                    houseNumber: '10',
                    country: 'BR',
                    state: 'PE',
                },
            )
            .set('x-access-token', reponse.body.token);

        await request(server)
            .get('/api/adress/?country=BR&state=PE')
            .send()
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });

    test('Should return 200 when the adress is finded by id param.', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/user')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'validPassword123',
                },
            );

        const data = decodeToken(reponse.body.token);

        const adress = await request(server)
            .post('/api/adress')
            .send(
                {
                    cep: '08090‑284',
                    street: 'Rua 03 de Outubro; (Ch Três Meninas)',
                    // eslint-disable-next-line @typescript-eslint/dot-notation
                    usersId: data['id'],
                    houseNumber: '10',
                    country: 'BR',
                    state: 'PE',
                },
            )
            .set('x-access-token', reponse.body.token);

        await request(server)
            .get(`/api/adress/${adress.body.id}`)
            .send()
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });

    test('Should return 200 when all params are valid and the adress is updated', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/user')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'validPassword123',
                },
            );

        const data = decodeToken(reponse.body.token);

        const adress = await request(server)
            .post('/api/adress')
            .send(
                {
                    cep: '58010-010',
                    street: 'R. Manoel Soares',
                    // eslint-disable-next-line @typescript-eslint/dot-notation
                    usersId: data['id'],
                    houseNumber: '13',
                    country: 'BR',
                    state: 'PB',
                },
            )
            .set('x-access-token', reponse.body.token);

        await request(server)
            .put(`/api/adress/${adress.body.id}`)
            .send({
                houseNumber: '13',
                street: 'R. Manoel Soares update test',
            })
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });
});
