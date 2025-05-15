import { Store } from "./useBookingStore";

interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
  isSelected: boolean;
}

export const selectors = {
  selectedTime: (state: Store) => {
    const selectedSlot = state.timeSlots.find(
      (slot: TimeSlot) => slot.isSelected
    );
    return selectedSlot?.time || null;
  },
};
