import { useBookingStore, selectors } from "@store/useBookingStore";
import { SlotSelect } from "../SlotSelect/SlotSelect";
import "./BookingCalendar.scss";
import { generateTimeSlots } from "@shared/utils";

export const BookingCalendar = () => {
  const appointments = useBookingStore(selectors.appointments);
  const selectedDate = useBookingStore(selectors.selectedDate);
  const selectedTime = useBookingStore(selectors.selectedTime);
  const setSelectedDate = useBookingStore(selectors.setSelectedDate);
  const setSelectedTime = useBookingStore(selectors.setSelectedTime);

  const timeSlots = generateTimeSlots(selectedDate, appointments);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setSelectedTime(null);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <h2 className="calendar__title">Available Time Slots</h2>
        <div className="calendar__date-container">
          <input
            type="date"
            className="calendar__date-input"
            value={selectedDate}
            onChange={handleDateChange}
            min={new Date().toISOString().split("T")[0]}
          />
          {timeSlots.every(slot => !slot.isAvailable) && (
            <p className="calendar__no-slots">No slots available. Please try another date.</p>
          )}
        </div>
      </div>

      <SlotSelect timeSlots={timeSlots} selectedTime={selectedTime} onChange={setSelectedTime} />
    </div>
  );
};
