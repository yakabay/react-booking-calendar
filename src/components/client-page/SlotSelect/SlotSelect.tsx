import { TimeSlot as TimeSlotInterface } from "../../../shared/types";
import { TimeSlot } from "../TimeSlot/TimeSlot";
import "./SlotSelect.scss";

interface SlotSelectProps {
  timeSlots: TimeSlotInterface[];
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
          key={slot.time}
          time={slot.time}
          isAvailable={slot.isAvailable}
          isSelected={selectedTime === slot.time}
          onClick={() => slot.isAvailable && onChange(slot.time)}
        />
      ))}
    </div>
  );
};
