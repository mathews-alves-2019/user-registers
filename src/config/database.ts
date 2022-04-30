import { Connection, createConnection, getConnectionManager } from 'typeorm';

class Database {
    private connection: Connection;

    async init() {
        if (getConnectionManager().has('default')) {
            this.connection = getConnectionManager().get('default');
            return;
        }
        if (!this.connection?.isConnected) {
            this.connection = await createConnection();
        }
    }

    getConnection(): Connection {
        return this.connection;
    }
}

export default Database;
