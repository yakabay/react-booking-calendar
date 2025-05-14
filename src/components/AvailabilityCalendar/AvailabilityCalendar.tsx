import { useStore } from "../../store/useStore";
import { motion } from "framer-motion";
import "./AvailabilityCalendar.css";

export const AvailabilityCalendar = () => {
  const { timeSlots, selectedDate, setSelectedDate } = useStore();

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
          <motion.div
            key={slot.id}
            className={`calendar__slot ${
              !slot.isAvailable ? "calendar__slot--unavailable" : ""
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="calendar__slot-time">{slot.time}</span>
            <span className="calendar__slot-status">
              {slot.isAvailable ? "Available" : "Unavailable"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
