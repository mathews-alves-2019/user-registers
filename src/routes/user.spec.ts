import 'reflect-metadata';
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
                    email: 'forDeleteEmail@mail.com',
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
                    email: 'forDeleteEmail@mail.com',
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

    test('Should return 200 when all params are valid and the use is deleted', async () => {
        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'forDeleteEmail@mail.com',
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
