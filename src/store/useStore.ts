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

interface DateTimeSlots {
  date: string;
  slots: TimeSlot[];
}

interface Store {
  appointments: Appointment[];
  timeSlots: DateTimeSlots[];
  selectedDate: string;
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  setSelectedDate: (date: string) => void;
  selectTimeSlot: (date: string, timeId: string) => void;
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

const generateDateSlots = (
  startDate: string,
  days: number
): DateTimeSlots[] => {
  const dateSlots: DateTimeSlots[] = [];
  const start = new Date(startDate);

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);
    const dateStr = currentDate.toISOString().split("T")[0];

    dateSlots.push({
      date: dateStr,
      slots: generateTimeSlots(),
    });
  }

  return dateSlots;
};

export const useStore = create<Store>((set) => ({
  appointments: [],
  timeSlots: generateDateSlots(new Date().toISOString().split("T")[0], 7),
  selectedDate: new Date().toISOString().split("T")[0],
  addAppointment: (appointment) =>
    set(
      produce((state) => {
        state.appointments.push({
          ...appointment,
          id: Math.random().toString(36).substr(2, 9),
        });
      })
    ),
  setSelectedDate: (date) => set({ selectedDate: date }),
  selectTimeSlot: (date, timeId) =>
    set(
      produce((state) => {
        const dateSlot = state.timeSlots.find(
          (ds: DateTimeSlots) => ds.date === date
        );
        if (!dateSlot) return;

        // Deselect any previously selected slot in this date
        const selectedSlot = dateSlot.slots.find(
          (slot: TimeSlot) => slot.isSelected
        );
        if (selectedSlot) {
          selectedSlot.isSelected = false;
        }

        // Select the new slot
        const clickedSlot = dateSlot.slots.find(
          (slot: TimeSlot) => slot.id === timeId
        );
        if (clickedSlot) {
          clickedSlot.isSelected = true;
        }
      })
    ),
}));
