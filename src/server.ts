import app from './app';
import { DatabaseBootstrap } from './bootstrap/database.bootstrap';
import { ServerBootstrap } from './bootstrap/server.bootstrap';

const serverBoostrap = new ServerBootstrap(app);
const databaseBootstrap = new DatabaseBootstrap();
/* serverBoostrap
    .initialize()
    .then(()=> console.log("ok"), (error)=> console.log(error));
 */

const start = async () => {
    try {
        await databaseBootstrap.initialize();
        await serverBoostrap.initialize();
    }
    catch (err) {
        console.log(err)
        databaseBootstrap.closeConnection();
        process.exit(1)
    }
}

start();