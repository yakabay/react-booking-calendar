import { create } from "zustand";
import { produce } from "immer";
import { getCurrentDate } from "../shared/utils";
import { mockAppointments } from "../moks/mock-appointments";
import { Appointment } from "../shared/types";

export interface BookingStore {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
}

export const useAppointmentsStore = create<BookingStore>((set) => {
  return {
    appointments: mockAppointments,
    addAppointment: (appointment) =>
      set(
        produce((state: BookingStore) => {
          state.appointments.push({
            ...appointment,
            id: Math.random().toString(36).substring(2, 11),
          });
        })
      ),
    selectedDate: getCurrentDate(),
    setSelectedDate: (date: string) =>
      set(
        produce((state: BookingStore) => {
          state.selectedDate = date;
        })
      ),
    selectedTime: null,
    setSelectedTime: (time: string | null) =>
      set(
        produce((state: BookingStore) => {
          state.selectedTime = time;
        })
      ),
  };
});
