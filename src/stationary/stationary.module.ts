import { Module } from '@nestjs/common';
import { StationaryController } from './stationary.controller';
import { StationaryService } from './stationary.service';

@Module({
  controllers: [StationaryController],
  providers: [StationaryService],
})
export class StationaryModule {}
