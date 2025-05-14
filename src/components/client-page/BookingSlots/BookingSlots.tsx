import { useStore } from "../../../store/useStore";
import { Slot } from "../Slot/Slot";
import "./BookingSlots.scss";

export const BookingSlots = () => {
  const { timeSlots, selectedDate, setSelectedDate, selectTimeSlot } =
    useStore();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
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

      <div className="calendar__slots">
        {timeSlots.map((slot) => (
          <Slot
            key={slot.id}
            time={slot.time}
            isAvailable={slot.isAvailable}
            isSelected={slot.isSelected}
            onClick={() => selectTimeSlot(slot.id)}
          />
        ))}
      </div>
    </div>
  );
};
