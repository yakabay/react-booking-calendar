import { BookingSlots } from "../components/client-page/BookingSlots/BookingSlots";
import { ClientForm } from "../components/client-page/ClientForm/ClientForm";
import "./ClientPage.scss";

export const ClientPage = () => {
  return (
    <div className="client-page">
      <h1 className="client-page__title">Book an Appointment</h1>
      <div className="client-page__content">
        <div className="client-page__calendar">
          <BookingSlots />
        </div>
        <div>
          <ClientForm />
        </div>
      </div>
    </div>
  );
};
