import express, { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import bodyParser from 'body-parser';
import cors from './config/cors';
import setRoutes from './config/routes';
import docs from './docs';

export const app = async (): Promise<Express> => {
    const expressApp = express();

    expressApp.use(bodyParser.urlencoded({ extended: true }));
    expressApp.use(bodyParser.json());
    expressApp.use(cors);
    expressApp.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
    setRoutes(expressApp);

    return expressApp;
};
