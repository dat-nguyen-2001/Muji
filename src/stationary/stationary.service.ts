import { Injectable } from '@nestjs/common';

@Injectable()
export class StationaryService {
  async indexStationary(): Promise<number[]> {
    return [1, 2, 3];
  }
}
