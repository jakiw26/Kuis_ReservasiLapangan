import { Injectable, NotFoundException } from '@nestjs/common';
import { bookingStatuses } from '../data/booking-statuses.data.js';
import type { BookingStatus } from './interfaces/booking-status.interface.js';

@Injectable()
export class BookingStatusesService {
  findAll(): BookingStatus[] {
    return bookingStatuses;
  }

  findOne(id: number): BookingStatus {
    const status = bookingStatuses.find((item) => item.id === id);

    if (!status) {
      throw new NotFoundException('Status pemesanan tidak ditemukan');
    }

    return status;
  }
}