import app from './app';
import { ServerBootstrap } from './bootstrap/server.bootstrap';

const serverBoostrap = new ServerBootstrap(app);
/* serverBoostrap
    .initialize()
    .then(()=> console.log("ok"), (error)=> console.log(error));
 */

const start = async () => {
    try {
        await serverBoostrap.initialize();
    }
    catch (err) {
        console.log(err)
    }
}

start();