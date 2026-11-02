import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CustomersModule } from './customers/customers.module.js';
import { SportsModule } from './sports/sports.module.js';
import { FieldsModule } from './fields/fields.module.js';
import { BookingStatusesModule } from './booking-statuses/booking-statuses.module.js';
import { BookingsModule } from './bookings/bookings.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'kuis_reservasi-lapang',
    }),
    CustomersModule,
    SportsModule,
    FieldsModule,
    BookingStatusesModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
