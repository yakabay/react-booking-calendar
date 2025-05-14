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

const mockAppointments: Appointment[] = [
  {
    id: "1",
    clientName: "John Doe",
    clientEmail: "john@example.com",
    clientPhone: "123-456-7890",
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
    status: "upcoming",
  },
  {
    id: "2",
    clientName: "Jane Smith",
    clientEmail: "jane@example.com",
    clientPhone: "098-765-4321",
    date: new Date().toISOString().split("T")[0],
    time: "14:00",
    status: "upcoming",
  },
  {
    id: "3",
    clientName: "Bob Wilson",
    clientEmail: "bob@example.com",
    clientPhone: "555-555-5555",
    date: new Date().toISOString().split("T")[0],
    time: "16:00",
    status: "upcoming",
  },
];

const generateTimeSlots = (
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
      isSelected: false,
    });
  }
  return slots;
};

export const useStore = create<Store>((set, get) => {
  const initialDate = new Date().toISOString().split("T")[0];
  return {
    appointments: mockAppointments,
    timeSlots: generateTimeSlots(initialDate, mockAppointments),
    selectedDate: initialDate,
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

          // Update time slots availability based on appointments
          state.timeSlots.forEach((slot) => {
            const isBooked = state.appointments.some(
              (apt) => apt.date === date && apt.time === slot.time
            );
            slot.isAvailable = !isBooked;
          });
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
          if (clickedSlot && clickedSlot.isAvailable) {
            clickedSlot.isSelected = true;
          }
        })
      ),
  };
});
