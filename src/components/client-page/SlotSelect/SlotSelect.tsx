import { TimeSlot } from "../TimeSlot/TimeSlot";
import "./SlotSelect.scss";

interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
}

interface SlotSelectProps {
  timeSlots: TimeSlot[];
  selectedTime: string | null;
  onChange: (time: string) => void;
}

export const SlotSelect = ({
  timeSlots,
  selectedTime,
  onChange,
}: SlotSelectProps) => {
  return (
    <div className="slot-select">
      {timeSlots.map((slot) => (
        <TimeSlot
          key={slot.id}
          time={slot.time}
          isAvailable={slot.isAvailable}
          isSelected={selectedTime === slot.time}
          onClick={() => slot.isAvailable && onChange(slot.time)}
        />
      ))}
    </div>
  );
};
