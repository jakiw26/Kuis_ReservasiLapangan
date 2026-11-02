import { Test, TestingModule } from '@nestjs/testing';
import { BookingStatusesController } from './booking-statuses.controller.js';

describe('BookingStatusesController', () => {
  let controller: BookingStatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingStatusesController],
    }).compile();

    controller = module.get<BookingStatusesController>(BookingStatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
