import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from './config/cors';
import setRoutes from './config/routes';

export const app = async (): Promise<Express> => {
    const expressApp = express();

    expressApp.use(bodyParser.urlencoded({ extended: true }));
    expressApp.use(bodyParser.json());
    expressApp.use(cors);
    setRoutes(expressApp);

    return expressApp;
};
