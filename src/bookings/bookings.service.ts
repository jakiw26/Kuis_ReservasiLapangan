
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { bookings } from '../data/bookings.data.js';
import { fields } from '../data/fields.data.js';
import { customers } from '../data/customers.data.js';
import { bookingStatuses } from '../data/booking-statuses.data.js';
import type { Booking } from './interfaces/booking.interface.js';

@Injectable()
export class BookingsService {
    findAll(): Booking[] {
        return bookings;
    }

    findOne(id: number): Booking {
        const booking = bookings.find((item) => item.id === id);

        if (!booking) {
            throw new NotFoundException('Pemesanan tidak ditemukan');
        }

        return booking;
    }

    create(data: {
        fieldId: number;
        date: string;
        startTime: string;
        endTime: string;
        customerName: string;
    }): Booking {
        const field = fields.find((item) => item.id === data.fieldId);

        if (!field) {
            throw new NotFoundException('Lapangan tidak ditemukan');
        }

        if (field.status !== 'AVAILABLE') {
            throw new BadRequestException('Lapangan sedang tidak tersedia');
        }

        const customer = customers.find(
            (item) => item.name.toLowerCase() === data.customerName.toLowerCase(),
        );

        if (!customer) {
            throw new NotFoundException('Pelanggan tidak ditemukan');
        }

        const bookedStatus = bookingStatuses.find(
            (item) => item.name === 'BOOKED',
        );

        if (!bookedStatus) {
            throw new NotFoundException('Status BOOKED tidak ditemukan');
        }

        const [startHour, startMinute] = data.startTime.split(':').map(Number);
        const [endHour, endMinute] = data.endTime.split(':').map(Number);

        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;

        if (end <= start) {
            throw new BadRequestException(
                'Jam selesai harus setelah jam mulai',
            );
        }

        const isConflict = bookings.some((booking) => {
            if (
                booking.fieldId !== data.fieldId ||
                booking.date !== data.date
            ) {
                return false;
            }

            const status = bookingStatuses.find(
                (item) => item.id === booking.bookingStatusId,
            );

            if (status?.name !== 'BOOKED') {
                return false;
            }

            const [existingStartHour, existingStartMinute] =
                booking.startTime.split(':').map(Number);

            const [existingEndHour, existingEndMinute] =
                booking.endTime.split(':').map(Number);

            const existingStart =
                existingStartHour * 60 + existingStartMinute;

            const existingEnd =
                existingEndHour * 60 + existingEndMinute;

            return start < existingEnd && end > existingStart;
        });

        if (isConflict) {
            throw new BadRequestException(
                'Jadwal lapangan sudah dipesan pada waktu tersebut',
            );
        }

        const totalPrice = ((end - start) / 60) * field.pricePerHour;

        const newBooking: Booking = {
            id:
                bookings.length > 0
                    ? Math.max(...bookings.map((item) => item.id)) + 1
                    : 1,
            customerId: customer.id,
            customerName: customer.name,
            fieldId: field.id,
            bookingStatusId: bookedStatus.id,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            totalPrice,
        };

        bookings.push(newBooking);

        return newBooking;
    }

    getByUser(userId: number): Booking[] {
        return bookings.filter((item) => item.customerId === userId);
    }

    cancel(id: number): Booking {
        const booking = this.findOne(id);

        const currentStatus = bookingStatuses.find(
            (item) => item.id === booking.bookingStatusId,
        );

        if (currentStatus?.name !== 'BOOKED') {
            throw new BadRequestException(
                'Pemesanan tidak dapat dibatalkan',
            );
        }

        const cancelledStatus = bookingStatuses.find(
            (item) => item.name === 'CANCELLED',
        );

        if (!cancelledStatus) {
            throw new NotFoundException('Status CANCELLED tidak ditemukan');
        }

        booking.bookingStatusId = cancelledStatus.id;

        return booking;
    }
}
