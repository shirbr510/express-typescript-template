import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT?.length ? parseInt(process.env.PORT) : 3000,
  cors_origin: process.env.CORS_ORIGIN,
};

export default config;