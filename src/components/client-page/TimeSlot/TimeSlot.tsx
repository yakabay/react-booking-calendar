import { motion } from "framer-motion";
import clsx from "clsx";
import "./TimeSlot.scss";

interface TimeSlotProps {
  time: string;
  isAvailable: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export const TimeSlot = ({
  time,
  isAvailable,
  isSelected,
  onClick,
}: TimeSlotProps) => {
  return (
    <motion.button
      className={clsx("time-slot", {
        "time-slot--unavailable": !isAvailable,
        "time-slot--selected": isSelected,
      })}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isAvailable ? 1 : 0.3,
        y: 0,
      }}
      transition={{ duration: 0.05 }}
      onClick={onClick}
      disabled={!isAvailable}
      aria-pressed={isSelected}
      aria-label={`${time} time slot, ${
        isAvailable ? "available" : "unavailable"
      }`}
    >
      <span className="time-slot__time">{time}</span>
      <span className="time-slot__status">
        {isAvailable ? "Available" : "Unavailable"}
      </span>
    </motion.button>
  );
};
