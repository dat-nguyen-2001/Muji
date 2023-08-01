import { StationaryService } from './stationary.service';
import { Controller, Get } from '@nestjs/common';

@Controller('stationary')
export class StationaryController {
  constructor(private readonly stationaryService: StationaryService) {}
  @Get()
  async indexStationary(): Promise<number[]> {
    return this.stationaryService.indexStationary();
  }
}
