import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationaryModule } from './stationary/stationary.module';

@Module({
  imports: [StationaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
