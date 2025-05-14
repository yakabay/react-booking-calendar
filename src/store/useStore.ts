import { create } from "zustand";
import { produce } from "immer";

interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  time: string;
  status: "upcoming" | "past";
}

interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
  isSelected: boolean;
}

interface Store {
  appointments: Appointment[];
  timeSlots: TimeSlot[];
  selectedDate: string;
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  setSelectedDate: (date: string) => void;
  selectTimeSlot: (timeId: string) => void;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    slots.push({
      id: `${hour}:00`,
      time: `${hour}:00`,
      isAvailable: true,
      isSelected: false,
    });
  }
  return slots;
};

export const useStore = create<Store>((set, get) => ({
  appointments: [],
  timeSlots: generateTimeSlots(),
  selectedDate: new Date().toISOString().split("T")[0],
  addAppointment: (appointment) =>
    set(
      produce((state: Store) => {
        state.appointments.push({
          ...appointment,
          id: Math.random().toString(36).substr(2, 9),
        });
      })
    ),
  setSelectedDate: (date) =>
    set(
      produce((state: Store) => {
        const selectedSlot = state.timeSlots.find((slot) => slot.isSelected);
        if (selectedSlot) {
          selectedSlot.isSelected = false;
        }
        state.selectedDate = date;
      })
    ),
  selectTimeSlot: (timeId: string) =>
    set(
      produce((state: Store) => {
        const selectedSlot = state.timeSlots.find((slot) => slot.isSelected);
        const clickedSlot = state.timeSlots.find((s) => s.id === timeId);
        if (selectedSlot) {
          selectedSlot.isSelected = false;
        }
        if (clickedSlot) {
          clickedSlot.isSelected = true;
        }
      })
    ),
}));
