import { Appointments } from "@components/practitioner-page/Appointments/Appointments";
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
          <div>
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
