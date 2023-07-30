import { Module } from '@nestjs/common';
import { StationaryController } from './stationary.controller';
import { Stationary } from './stationary';
import { StationaryService } from './stationary.service';

@Module({
  controllers: [StationaryController],
  providers: [Stationary, StationaryService]
})
export class StationaryModule {}
