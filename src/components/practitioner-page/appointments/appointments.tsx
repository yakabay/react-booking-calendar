import "./Appointments.scss";
import { useAppointmentsStore } from "../../../store/useBookingStore";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { getPastAppointments } from "../../../shared/utils";
import { getUpcomingAppointments } from "../../../shared/utils";

export const Appointments = () => {
  const { appointments } = useAppointmentsStore();
  const upcomingAppointments = getUpcomingAppointments(appointments);
  const pastAppointments = getPastAppointments(appointments);

  return (
    <div className="appointments">
      <div className="appointments__section">
        <h2 className="appointments__title">Upcoming Appointments</h2>
        <div className="appointments__list">
          {upcomingAppointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>

      <div className="appointments__section">
        <h2 className="appointments__title">Past Appointments</h2>
        <div className="appointments__list">
          {pastAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              isPast
            />
          ))}
        </div>
      </div>
    </div>
  );
};
