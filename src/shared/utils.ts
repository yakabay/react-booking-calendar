import { Appointment, TimeSlot } from "./types";

export const generateTimeSlots = (currentDate: string, appointments: Appointment[]): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    const time = `${hour}:00`;
    const isPast = getAppointmentTime(currentDate, time) < new Date();
    const isBooked = appointments.some(apt => apt.date === currentDate && apt.time === time);
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
  dateTime.setHours(Number(hours));
  return dateTime;
};

export const sortAppointments = (appointments: Appointment[]) => {
  return [...appointments].sort((a, b) => {
    const timeA = getAppointmentTime(a.date, a.time);
    const timeB = getAppointmentTime(b.date, b.time);
    return timeA.getTime() - timeB.getTime();
  });
};

export const getPastAppointments = (appointments: Appointment[]) => {
  return sortAppointments(
    appointments.filter(
      appointment => getAppointmentTime(appointment.date, appointment.time) < new Date()
    )
  );
};

export const getUpcomingAppointments = (appointments: Appointment[]) => {
  return sortAppointments(
    appointments.filter(
      appointment => getAppointmentTime(appointment.date, appointment.time) > new Date()
    )
  );
};
