import 'reflect-metadata';
import { Express } from 'express';
import { app } from '../server';

const request = require('supertest');

let server: Express;

describe('User register test', () => {
    beforeAll(async () => {
        server = await app();
    });

    test('Should return 200 when all params are valid', async () => {
        const reponse = await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'valid_email@mail.com',
                    password: 'password123',
                },
            );

        await request(server)
            .get('/api/getUser/89e23f92-7e48-4cde-8292-b399dca4b757')
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });
});
