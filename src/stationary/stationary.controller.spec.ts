import { Test, TestingModule } from '@nestjs/testing';
import { StationaryController } from './stationary.controller';

describe('StationaryController', () => {
  let controller: StationaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationaryController],
    }).compile();

    controller = module.get<StationaryController>(StationaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
