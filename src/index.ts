import { Server } from '@hapi/hapi'
import { Routes } from './router'
import { AppDataSource } from './data-source'
import { noteSubscriber } from "./subscriber/noteSub";


const init = async () => {
  const server = new Server({
    port: 3000,
    host: 'localhost',
});

  AppDataSource.initialize()
  console.log(AppDataSource.subscribers)

  server.route(Routes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();