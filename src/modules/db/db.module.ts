import { Module } from '@nestjs/common';
import { DatabaseProvider } from './db.provider';

@Module({
  providers: [...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class DbModule {}
