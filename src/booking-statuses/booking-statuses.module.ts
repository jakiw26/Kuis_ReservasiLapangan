import { Module } from '@nestjs/common';
import { BookingStatusesController } from './booking-statuses.controller.js';
import { BookingStatusesService } from './booking-statuses.service.js';

@Module({
  controllers: [BookingStatusesController],
  providers: [BookingStatusesService]
})
export class BookingStatusesModule {}
