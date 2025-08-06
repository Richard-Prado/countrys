import { Test, TestingModule } from '@nestjs/testing';
import { CountrysController } from './countrys.controller';

describe('CountrysController', () => {
  let controller: CountrysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountrysController],
    }).compile();

    controller = module.get<CountrysController>(CountrysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
