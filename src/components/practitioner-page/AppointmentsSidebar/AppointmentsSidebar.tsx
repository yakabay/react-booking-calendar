import { motion } from "framer-motion";
import "./AppointmentsSidebar.scss";
import { useStore } from "../../../store/useStore";

export const AppointmentsSidebar = () => {
  const { appointments } = useStore();

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === "upcoming"
  );
  const pastAppointments = appointments.filter(
    (appointment) => appointment.status === "past"
  );

  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <h2 className="sidebar__title">Upcoming Appointments</h2>
        <div className="sidebar__appointments">
          {upcomingAppointments.map((appointment) => (
            <motion.div
              key={appointment.id}
              className="sidebar__appointment"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sidebar__appointment-header">
                <span className="sidebar__appointment-name">
                  {appointment.clientName}
                </span>
                <span className="sidebar__appointment-time">
                  {appointment.time}
                </span>
              </div>
              <div className="sidebar__appointment-details">
                <p className="sidebar__appointment-email">
                  {appointment.clientEmail}
                </p>
                <p className="sidebar__appointment-phone">
                  {appointment.clientPhone}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="sidebar__section">
        <h2 className="sidebar__title">Past Appointments</h2>
        <div className="sidebar__appointments">
          {pastAppointments.map((appointment) => (
            <motion.div
              key={appointment.id}
              className="sidebar__appointment sidebar__appointment--past"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sidebar__appointment-header">
                <span className="sidebar__appointment-name">
                  {appointment.clientName}
                </span>
                <span className="sidebar__appointment-time">
                  {appointment.time}
                </span>
              </div>
              <div className="sidebar__appointment-details">
                <p className="sidebar__appointment-email">
                  {appointment.clientEmail}
                </p>
                <p className="sidebar__appointment-phone">
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
