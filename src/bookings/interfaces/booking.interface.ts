export interface Booking {
  id: number;
  customerId: number;
  customerName: string;
  fieldId: number;
  bookingStatusId: number;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
}