import { Appointment, TimeSlot } from "./types";

export const generateTimeSlots = (
  date: string,
  appointments: Appointment[]
): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    const time = `${hour}:00`;
    const isBooked = appointments.some(
      (apt) => apt.date === date && apt.time === time
    );
    slots.push({
      id: time,
      time: time,
      isAvailable: !isBooked,
    });
  }
  return slots;
};

export const getCurrentDate = () => new Date().toISOString().split("T")[0];
