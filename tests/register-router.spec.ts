import 'reflect-metadata';
import request from 'supertest';
import randomEmail from 'random-email';
import { Express } from 'express';
import { app } from '../src/server';

let server: Express;

describe('User register test', () => {
    beforeAll(async () => {
        server = await app();
    });

    test('Should return 200 when all params are valid', async () => {
        await request(server)
            .post('/api/user')
            .send(
                {
                    email: randomEmail({ domain: 'testRegister.com' }),
                    password: 'password123',
                    confirmPassword: 'password123',
                    name: 'Name test',
                },
            )
            .expect(200);
    });

    test('Should return 400 when password do not have numbers or letters', async () => {
        await request(server)
            .post('/api/user')
            .send(
                {
                    email: randomEmail({ domain: 'testRegister.com' }),
                    password: '12345678',
                    confirmPassword: '12345678',
                    name: 'Name test',
                },
            )
            .expect(400);
    });

    test('Should return 400 when passwords are divergents', async () => {
        await request(server)
            .post('/api/user')
            .send(
                {
                    email: randomEmail({ domain: 'testRegister.com' }),
                    password: 'password1234',
                    confirmPassword: 'password',
                    name: 'Name test',
                },
            )
            .expect(400);
    });
});
