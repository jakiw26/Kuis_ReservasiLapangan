import { Injectable, NotFoundException , BadRequestException} from '@nestjs/common';
import { fields } from '../data/fields.data.js';
import type { Field } from './interfaces/field.interface.js';
import { bookings } from '../data/bookings.data.js';
import { bookingStatuses } from '../data/booking-statuses.data.js';

@Injectable()
export class FieldsService {
    findAll(): Field[] {
        return fields;
    }

    findOne(id: number): Field {
        const field = fields.find((item) => item.id === id);

        if (!field) {
            throw new NotFoundException('Lapangan tidak ditemukan');
        }

        return field;
    }

    getAvailability(id: number, date: string) {
        const field = this.findOne(id);

        if (!date) {
            throw new BadRequestException('Tanggal harus diisi');
        }

        const bookedStatus = bookingStatuses.find(
            (item) => item.name === 'BOOKED',
        );

        const bookedSlots = bookings
            .filter((booking) => {
                return (
                    booking.fieldId === id &&
                    booking.date === date &&
                    booking.bookingStatusId === bookedStatus?.id
                );
            })
            .map((booking) => ({
                startTime: booking.startTime,
                endTime: booking.endTime,
            }));

        return {
            fieldId: field.id,
            fieldName: field.name,
            date,
            status: field.status,
            bookedSlots,
        };
    }
}