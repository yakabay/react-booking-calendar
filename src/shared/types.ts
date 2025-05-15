export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  time: string;
}

export interface TimeSlot {
  time: string;
  isAvailable: boolean;
}
