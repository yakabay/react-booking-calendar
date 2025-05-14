import { AvailabilityCalendar } from "../components/AvailabilityCalendar/AvailabilityCalendar";
import { ClientForm } from "../components/ClientForm/ClientForm";
import "./ClientPage.css";

export const ClientPage = () => {
  return (
    <div className="client-page">
      <h1 className="client-page__title">Book an Appointment</h1>
      <div className="client-page__content">
        <div className="client-page__calendar">
          <AvailabilityCalendar />
        </div>
        <div className="client-page__form">
          <ClientForm />
        </div>
      </div>
    </div>
  );
};
