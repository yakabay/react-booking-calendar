import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import "./ClientForm.scss";
import { useAppointmentsStore } from "@store/useBookingStore";
import { clientFormSchema, type ClientFormData } from "./schema";
import { InputField } from "@components/client-page/InputField/InputField";
import { useSuccessMessage } from "@shared/hooks/useSuccessMessage";
import { SuccessMessage } from "@shared/components/SuccessMessage/SuccessMessage";

export const ClientForm = () => {
  const { isVisible, message, showSuccess } = useSuccessMessage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientFormSchema),
  });
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

    reset();
    showSuccess("Appointment booked successfully!");
  };

  return (
    <>
      <SuccessMessage message={message} isVisible={isVisible} />
      <motion.form
        className="client-form"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <InputField label="Name" type="text" register={register} name="name" errors={errors} />

        <InputField label="Email" type="email" register={register} name="email" errors={errors} />

        <InputField label="Phone" type="tel" register={register} name="phone" errors={errors} />

        <button type="submit" className="client-form__submit" disabled={!selectedTime}>
          Book Appointment
        </button>
      </motion.form>
    </>
  );
};
