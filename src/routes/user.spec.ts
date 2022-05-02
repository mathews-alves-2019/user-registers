import 'reflect-metadata';
import { Express } from 'express';
import { app } from '../server';
import { decodeToken } from './commons/auth/auth';

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

        const data = decodeToken(reponse.body.token);

        await request(server)
            // eslint-disable-next-line @typescript-eslint/dot-notation
            .get(`/api/getUser/${data['id']}`)
            .set('x-access-token', reponse.body.token)
            .send()
            .expect(200);
    });
});
