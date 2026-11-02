import { Test, TestingModule } from '@nestjs/testing';
import { BookingStatusesService } from './booking-statuses.service.js';

describe('BookingStatusesService', () => {
  let service: BookingStatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingStatusesService],
    }).compile();

    service = module.get<BookingStatusesService>(BookingStatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
