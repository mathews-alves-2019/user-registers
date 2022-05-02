import 'reflect-metadata';
import randomEmail from 'random-email';
import { Express } from 'express';
import { app } from '../server';

const request = require('supertest');

let server: Express;

describe('User register test', () => {
    beforeAll(async () => {
        server = await app();
    });

    test('Should return 200 when all params are valid', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'validPassword123',
                },
            )
            .expect(200);
    });

    test('Should return 401 when the email sent is invalid', async () => {
        await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'invalid_email@mail.com',
                    password: 'validPassword123',
                },
            )
            .expect(401);
    });

    test('Should return 401 when the password sent is invalid', async () => {
        const email = randomEmail({ domain: 'test.com' });
        await request(server)
            .post('/api/regiterUser')
            .send(
                {
                    email,
                    password: 'validPassword123',
                    confirmPassword: 'validPassword123',
                    name: 'Login Test',
                },
            );

        await request(server)
            .post('/api/login')
            .send(
                {
                    email,
                    password: 'wrongPasswordAndInvalid',
                },
            )
            .expect(401);
    });
});
