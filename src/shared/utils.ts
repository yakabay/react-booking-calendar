import { Appointment, TimeSlot } from "./types";

export const generateTimeSlots = (
  currentDate: string,
  appointments: Appointment[]
): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    const time = `${hour}:00`;
    const isPast = getAppointmentTime(currentDate, time) < new Date();
    const isBooked = appointments.some(
      (apt) => apt.date === currentDate && apt.time === time
    );
    slots.push({
      time: time,
      isAvailable: !isBooked && !isPast,
    });
  }
  return slots;
};

export const getCurrentDate = () => new Date().toISOString().split("T")[0];

export const getAppointmentTime = (date: string, time: string) => {
  const [hours] = time.split(":");
  const dateTime = new Date(date);
  dateTime.setHours(parseInt(hours), 0, 0, 0);
  return dateTime;
};

export const getPastAppointments = (appointments: Appointment[]) => {
  return appointments.filter(
    (appointment) =>
      getAppointmentTime(appointment.date, appointment.time) < new Date()
  );
};

export const getUpcomingAppointments = (appointments: Appointment[]) => {
  return appointments.filter(
    (appointment) =>
      getAppointmentTime(appointment.date, appointment.time) > new Date()
  );
};
