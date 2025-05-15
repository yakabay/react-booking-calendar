import { Appointments } from "../../components/practitioner-page/Appointments/Appointments";
import "./PractitionerPage.scss";

export const PractitionerPage = () => {
  return (
    <div className="practitioner-page">
      <h1 className="practitioner-page__title">Appointments Dashboard</h1>
      <div className="practitioner-page__content">
        <div className="practitioner-page__block">
          <Appointments />
        </div>
        <div className="practitioner-page__block">
          <p className="practitioner-page__welcome">
            Welcome to your appointments dashboard. Use the sidebar to view and
            manage your appointments.
          </p>
        </div>
      </div>
    </div>
  );
};
