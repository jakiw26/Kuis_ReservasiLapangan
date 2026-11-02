import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, } from '@nestjs/common';
import { BookingsService } from './bookings.service.js';
import type { Booking } from './interfaces/booking.interface.js';

@Controller()
export class BookingsController {
    constructor(
        private readonly bookingsService: BookingsService,
    ) { }

    @Get('bookings')
    findAll(): Booking[] {
        return this.bookingsService.findAll();
    }

    @Post('bookings')
    create(
        @Body()
        body: {
            fieldId: number;
            date: string;
            startTime: string;
            endTime: string;
            customerName: string;
        },
    ): Booking {
        return this.bookingsService.create(body);
    }

    @Get('bookings/:id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
    ): Booking {
        return this.bookingsService.findOne(id);
    }

    @Get('users/:userId/bookings')
    getByUser(
        @Param('userId', ParseIntPipe) userId: number,
    ): Booking[] {
        return this.bookingsService.getByUser(userId);
    }

    @Patch('bookings/:id/cancel')
    cancel(
        @Param('id', ParseIntPipe) id: number,
    ): Booking {
        return this.bookingsService.cancel(id);
    }
}