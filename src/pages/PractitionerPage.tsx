import { Appointments } from "../components/practitioner-page/appointments/appointments";
import "./PractitionerPage.scss";

export const PractitionerPage = () => {
  return (
    <div className="practitioner-page">
      <h1 className="practitioner-page__title">Appointments Dashboard</h1>
      <div className="practitioner-page__content">
        <Appointments />
        <div className="practitioner-page__main">
          <p className="practitioner-page__welcome">
            Welcome to your appointments dashboard. Use the sidebar to view and
            manage your appointments.
          </p>
        </div>
      </div>
    </div>
  );
};
