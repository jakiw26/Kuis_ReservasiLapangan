import type { BookingStatus } from '../booking-statuses/interfaces/booking-status.interface.js';

export const bookingStatuses: BookingStatus[] = [
  {
    id: 1,
    name: 'BOOKED',
    description: 'Pemesanan sudah dibuat',
  },
  {
    id: 2,
    name: 'CANCELLED',
    description: 'Pemesanan dibatalkan',
  },
  {
    id: 3,
    name: 'COMPLETED',
    description: 'Pemesanan sudah selesai',
  },
];