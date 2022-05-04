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

    test('Should return 200 when all params are valid and the user inserted.', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email,
                    password: 'password123',
                    confirmPassword: 'password123',
                    name: 'Name test',
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
            .get(`/api/getUser/${data['id']}`)
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });

    test('Should return 200 when all params are valid and the user is updated', async () => {
        const email = randomEmail({ domain: 'testupdate.com' });

        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email,
                    password: 'password123',
                    confirmPassword: 'password123',
                    name: 'Name test',
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
        const emailUpdated = randomEmail({ domain: 'testupdated.com' });

        await request(server)
        // eslint-disable-next-line @typescript-eslint/dot-notation
            .put(`/api/updateUser/${data['id']}`)
            .send(
                {
                    emailUpdated,
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
            .delete(`/api/deleteUser/${data['id']}`)
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });
});
