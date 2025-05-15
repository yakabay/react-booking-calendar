import "./Bookings.scss";
import { useBookingStore, selectors } from "@store/useBookingStore";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { getPastAppointments } from "@shared/utils";
import { getUpcomingAppointments } from "@shared/utils";

export const Bookings = () => {
  const appointments = useBookingStore(selectors.appointments);
  const upcomingAppointments = getUpcomingAppointments(appointments);
  const pastAppointments = getPastAppointments(appointments);

  return (
    <div className="bookings">
      <div className="bookings__section">
        <h2 className="bookings__title">Upcoming Appointments</h2>
        <div className="bookings__list">
          {upcomingAppointments.map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>

      <div className="bookings__section">
        <h2 className="bookings__title">Past Appointments</h2>
        <div className="bookings__list">
          {pastAppointments.map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} isPast />
          ))}
        </div>
      </div>
    </div>
  );
};
