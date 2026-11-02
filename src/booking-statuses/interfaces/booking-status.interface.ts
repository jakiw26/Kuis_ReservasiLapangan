export interface BookingStatus {
  id: number;
  name: 'BOOKED' | 'CANCELLED' | 'COMPLETED';
  description: string;
}