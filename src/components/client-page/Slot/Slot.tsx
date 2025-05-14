import { motion } from "framer-motion";
import clsx from "clsx";
import "./Slot.css";

interface SlotProps {
  time: string;
  isAvailable: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export const Slot = ({ time, isAvailable, isSelected, onClick }: SlotProps) => {
  return (
    <motion.button
      className={clsx("slot", {
        "slot--unavailable": !isAvailable,
        "slot--selected": isSelected,
      })}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={!isAvailable}
      aria-pressed={isSelected}
      aria-label={`${time} time slot, ${
        isAvailable ? "available" : "unavailable"
      }`}
    >
      <span className="slot__time">{time}</span>
      <span className="slot__status">
        {isAvailable ? "Available" : "Unavailable"}
      </span>
    </motion.button>
  );
};
