import { motion } from "framer-motion";
import "./Appointments.scss";
import { useStore } from "../../../store/useStore";

export const Appointments = () => {
  const { appointments } = useStore();

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === "upcoming"
  );
  const pastAppointments = appointments.filter(
    (appointment) => appointment.status === "past"
  );

  return (
    <div className="appointments">
      <div className="appointments__section">
        <h2 className="appointments__title">Upcoming Appointments</h2>
        <div className="appointments__list">
          {upcomingAppointments.map((appointment) => (
            <motion.div
              key={appointment.id}
              className="appointments__item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="appointments__item-header">
                <span className="appointments__item-name">
                  {appointment.clientName}
                </span>
                <span className="appointments__item-time">
                  {appointment.time}
                </span>
              </div>
              <div className="appointments__item-details">
                <p className="appointments__item-email">
                  {appointment.clientEmail}
                </p>
                <p className="appointments__item-phone">
                  {appointment.clientPhone}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="appointments__section">
        <h2 className="appointments__title">Past Appointments</h2>
        <div className="appointments__list">
          {pastAppointments.map((appointment) => (
            <motion.div
              key={appointment.id}
              className="appointments__item appointments__item--past"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="appointments__item-header">
                <span className="appointments__item-name">
                  {appointment.clientName}
                </span>
                <span className="appointments__item-time">
                  {appointment.time}
                </span>
              </div>
              <div className="appointments__item-details">
                <p className="appointments__item-email">
                  {appointment.clientEmail}
                </p>
                <p className="appointments__item-phone">
                  {appointment.clientPhone}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
