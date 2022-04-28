import express from 'express';
import bodyParser from 'body-parser';
import cors from './config/cors';
 
const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors);

const port = 8080;

server.listen(port, function(){
    console.log(`BACKEND is running. Port: ${port}`);
});

export default server;