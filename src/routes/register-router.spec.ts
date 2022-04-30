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
                    confirmPassword: 'password123',
                    name: 'Name test',
                },
            )
            .expect(200);
    });

    test('Should return 400 when password do not have numbers or letters', async () => {
        await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'valid_email@mail.com',
                    password: '12345678',
                    confirmPassword: '12345678',
                    name: 'Name test',
                },
            )
            .expect(400);
    });

    test('Should return 400 when passwords are divergents', async () => {
        await request(server)
            .post('/api/login')
            .send(
                {
                    email: 'valid_email@mail.com',
                    password: 'password1234',
                    confirmPassword: 'password',
                    name: 'Name test',
                },
            )
            .expect(400);
    });
});
