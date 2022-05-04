import 'reflect-metadata';
import randomEmail from 'random-email';
import { Express } from 'express';
import { app } from '../server';
import { decodeToken } from './commons/auth/auth';

const request = require('supertest');

let server: Express;

describe('User register test', () => {
    beforeAll(async () => {
        server = await app();
        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email: 'forDeleteEmail@email.com',
                    password: 'password123',
                    confirmPassword: 'password123',
                    name: 'Name test',
                },
            );

        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email: 'forUpdateEmail@email.com',
                    password: 'password123',
                    confirmPassword: 'password123',
                    name: 'Name test',
                },
            );
    });

    test('Should return 200 when all params are valid', async () => {
        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'forDeleteEmail@email.com',
                    password: 'password123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
            // eslint-disable-next-line @typescript-eslint/dot-notation
            .get(`/api/getUser/${data['id']}`)
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });

    test('Should return 200 when all params are valid and the user is update', async () => {
        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'forUpdateEmail@email.com',
                    password: 'password123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
        // eslint-disable-next-line @typescript-eslint/dot-notation
            .put(`/api/updateUser/${data['id']}`)
            .send(
                {
                    email: 'forUpdateEmailUpdated@email.com',
                    name: 'Name test updated',
                },
            )
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });

    test('Should return 200 when all params are valid and the user password is update', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email,
                    password: 'password123',
                    confirmPassword: 'password123',
                    name: 'Name password update test',
                },
            );

        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'password123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
        // eslint-disable-next-line @typescript-eslint/dot-notation
            .put(`/api/updateUser/${data['id']}`)
            .send(
                {
                    name: 'Name test updated',
                    email,
                    password: 'password1234',
                    confirmPassword: 'password1234',
                },
            )
            .set('x-access-token', reponse.body.token)
            .expect(200);
    });

    test('Should return 200 when all params are valid and the user is deleted', async () => {
        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'forDeleteEmail@email.com',
                    password: 'password123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
            // eslint-disable-next-line @typescript-eslint/dot-notation
            .delete(`/api/deleteUser/${data['id']}`)
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });

    test('Should return 200 when all params are valid and the use is deleted', async () => {
        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'forUpdateEmailUpdated@email.com',
                    password: 'password123',
                },
            );

        const data = decodeToken(reponse.body.token);

        await request(server)
            // eslint-disable-next-line @typescript-eslint/dot-notation
            .delete(`/api/deleteUser/${data['id']}`)
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });
});
