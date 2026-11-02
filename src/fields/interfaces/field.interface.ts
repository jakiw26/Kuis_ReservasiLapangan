export interface Field {
  id: number;
  sportId: number;
  name: string;
  pricePerHour: number;
  status: 'AVAILABLE' | 'MAINTENANCE';
}