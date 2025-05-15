import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./ClientForm.scss";
import { useAppointmentsStore } from "../../../store/useBookingStore";

interface ClientFormData {
  name: string;
  email: string;
  phone: string;
}

export const ClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>();
  const { selectedDate, selectedTime, addAppointment } = useAppointmentsStore();

  const onSubmit = (data: ClientFormData) => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    addAppointment({
      clientName: data.name,
      clientEmail: data.email,
      clientPhone: data.phone,
      date: selectedDate,
      time: selectedTime,
    });
  };

  return (
    <motion.form
      className="client-form"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="client-form__field">
        <label htmlFor="name" className="client-form__label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="client-form__input"
          {...register("name", { required: "Name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <span className="client-form__error" role="alert">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="client-form__field">
        <label htmlFor="email" className="client-form__label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="client-form__input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <span className="client-form__error" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="client-form__field">
        <label htmlFor="phone" className="client-form__label">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className="client-form__input"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
          })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <span className="client-form__error" role="alert">
            {errors.phone.message}
          </span>
        )}
      </div>

      <button type="submit" className="client-form__submit">
        Book Appointment
      </button>
    </motion.form>
  );
};
