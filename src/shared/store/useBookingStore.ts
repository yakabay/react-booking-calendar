import { create } from "zustand";
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

export const useBookingStore = create<BookingStore>(set => ({
  appointments: mockAppointments,
  addAppointment: newAppointment =>
    set(state => {
      const updatedAppointments = [...state.appointments];
      updatedAppointments.push({
        ...newAppointment,
        id: Math.random().toString(36).substring(2, 11),
      });

      return {
        appointments: updatedAppointments,
        selectedTime: null,
      };
    }),
  selectedDate: getCurrentDate(),
  setSelectedDate: newDate =>
    set({
      selectedDate: newDate,
    }),
  selectedTime: null,
  setSelectedTime: newTime => set({ selectedTime: newTime }),
}));
