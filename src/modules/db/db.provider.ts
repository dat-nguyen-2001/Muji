import mongoose from 'mongoose';
import { getConfig } from 'src/shared/config.provider';

const config = getConfig();
const mongodbUri = config.get('mongodb.uri');

export const DatabaseProvider = [
  {
    provide: 'DbConnectString',
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return mongoose
        .connect(mongodbUri)
        .then(() => console.log('CONNECTED TO MONGODB'));
    },
  },
];
