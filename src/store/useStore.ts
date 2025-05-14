import { create } from "zustand";

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
}

interface Store {
  appointments: Appointment[];
  timeSlots: TimeSlot[];
  selectedDate: string;
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  updateTimeSlot: (id: string, isAvailable: boolean) => void;
  setSelectedDate: (date: string) => void;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    slots.push({
      id: `${hour}:00`,
      time: `${hour}:00`,
      isAvailable: true,
    });
  }
  return slots;
};

export const useStore = create<Store>((set) => ({
  appointments: [],
  timeSlots: generateTimeSlots(),
  selectedDate: new Date().toISOString().split("T")[0],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [
        ...state.appointments,
        { ...appointment, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  updateTimeSlot: (id, isAvailable) =>
    set((state) => ({
      timeSlots: state.timeSlots.map((slot) =>
        slot.id === id ? { ...slot, isAvailable } : slot
      ),
    })),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
