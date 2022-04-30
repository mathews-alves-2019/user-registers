import 'reflect-metadata';
import { app } from './server';
import 'dotenv/config';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const runServer = async () => {
    const port = 8080;
    const server = await app();
    server.listen(port, () => console.log(`listening on port ${port}`));
};

runServer();
