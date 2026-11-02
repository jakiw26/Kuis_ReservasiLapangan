import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BookingStatusesService } from './booking-statuses.service.js';
import type { BookingStatus } from './interfaces/booking-status.interface.js';

@Controller('booking-statuses')
export class BookingStatusesController {
  constructor(
    private readonly bookingStatusesService: BookingStatusesService,
  ) {}

  @Get()
  findAll(): BookingStatus[] {
    return this.bookingStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): BookingStatus {
    return this.bookingStatusesService.findOne(id);
  }
}