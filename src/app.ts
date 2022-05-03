import 'reflect-metadata';
import { app } from './server';
import 'dotenv/config';

const runServer = async () => {
    const port = 8080;
    const server = await app();
    // eslint-disable-next-line no-console
    server.listen(port, () => console.log(`listening on port ${port}`));
};

runServer();
