import app from './app';
import config from './config';

const server = app.listen(config.port, () => {
  console.log('info', `Server is running on Port: ${config.port}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.info('Closing http server.');
  server.close((err: unknown) => {
    console.info('Http server closed.');
    process.exit(err ? 1 : 0);
  });
});