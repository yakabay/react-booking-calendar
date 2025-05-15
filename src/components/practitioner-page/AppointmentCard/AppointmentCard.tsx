import { motion } from "framer-motion";
import { Appointment } from "../../../shared/types";
import "./AppointmentCard.scss";

interface AppointmentCardProps {
  appointment: Appointment;
  isPast?: boolean;
}

export const AppointmentCard = ({
  appointment,
  isPast = false,
}: AppointmentCardProps) => {
  return (
    <motion.div
      key={appointment.id}
      className={`appointment ${isPast ? "appointment--past" : ""}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isPast ? 0.7 : 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="appointment__header">
        <span className="appointment__name">{appointment.clientName}</span>
        <span className="appointment__time">{appointment.time}</span>
      </div>
      <div className="appointment__details">
        <p className="appointment__email">{appointment.clientEmail}</p>
        <p className="appointment__phone">{appointment.clientPhone}</p>
      </div>
    </motion.div>
  );
};
