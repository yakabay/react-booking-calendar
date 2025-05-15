import { useAppointmentsStore } from "../../../store/useBookingStore";
import { SlotSelect } from "../SlotSelect/SlotSelect";
import "./BookingCalendar.scss";
import { generateTimeSlots } from "../../../shared/utils";

export const BookingCalendar = () => {
  const {
    appointments,
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
  } = useAppointmentsStore();

  const timeSlots = generateTimeSlots(selectedDate, appointments);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setSelectedTime(null);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <h2 className="calendar__title">Available Time Slots</h2>
        <input
          type="date"
          className="calendar__date-input"
          value={selectedDate}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <SlotSelect
        timeSlots={timeSlots}
        selectedTime={selectedTime}
        onChange={setSelectedTime}
      />
    </div>
  );
};
