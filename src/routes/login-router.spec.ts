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
        await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'valid_email@mail.com',
                    password: 'password123',
                },
            )
            .expect(200);
    });
});
