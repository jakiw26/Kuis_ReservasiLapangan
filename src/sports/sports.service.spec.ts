import { Test, TestingModule } from '@nestjs/testing';
import { SportsService } from './sports.service.js';

describe('SportsService', () => {
  let service: SportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportsService],
    }).compile();

    service = module.get<SportsService>(SportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
