import { create } from "zustand";
import { produce } from "immer";
import { getCurrentDate } from "@shared/utils";
import { mockAppointments } from "@/moks/mock-appointments";
import { Appointment } from "@shared/types";

export interface BookingStore {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
}

export const selectors = {
  appointments: (state: BookingStore) => state.appointments,
  addAppointment: (state: BookingStore) => state.addAppointment,
  selectedDate: (state: BookingStore) => state.selectedDate,
  setSelectedDate: (state: BookingStore) => state.setSelectedDate,
  selectedTime: (state: BookingStore) => state.selectedTime,
  setSelectedTime: (state: BookingStore) => state.setSelectedTime,
} as const;

export const useBookingStore = create<BookingStore>(set => {
  return {
    appointments: mockAppointments,
    addAppointment: newAppointment =>
      set(
        produce((state: BookingStore) => {
          state.appointments.push({
            ...newAppointment,
            id: Math.random().toString(36).substring(2, 11),
          });
          state.selectedTime = null;
        })
      ),
    selectedDate: getCurrentDate(),
    setSelectedDate: newDate =>
      set(
        produce((state: BookingStore) => {
          state.selectedDate = newDate;
        })
      ),
    selectedTime: null,
    setSelectedTime: newTime =>
      set(
        produce((state: BookingStore) => {
          state.selectedTime = newTime;
        })
      ),
  };
});
