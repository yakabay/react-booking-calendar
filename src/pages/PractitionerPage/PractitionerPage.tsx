import { Bookings } from "@/components/practitioner-page/Bookings/Bookings";
import "./PractitionerPage.scss";

export const PractitionerPage = () => {
  return (
    <div className="practitioner-page">
      <h1 className="practitioner-page__title">Appointments Dashboard</h1>
      <div className="practitioner-page__content">
        <div className="practitioner-page__block">
          <Bookings />
        </div>
        <div className="practitioner-page__block">
          <div className="practitioner-page__welcome-container">
            <p className="practitioner-page__welcome">Welcome to your appointments dashboard.</p>
            <p className="practitioner-page__welcome">
              Here you can view your upcoming and past appointments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
