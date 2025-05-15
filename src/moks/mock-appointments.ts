import { Appointment } from "../shared/types";

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    clientName: "John Doe",
    clientEmail: "john@example.com",
    clientPhone: "123-456-7890",
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
    status: "upcoming",
  },
  {
    id: "2",
    clientName: "Jane Smith",
    clientEmail: "jane@example.com",
    clientPhone: "098-765-4321",
    date: new Date().toISOString().split("T")[0],
    time: "14:00",
    status: "upcoming",
  },
  {
    id: "3",
    clientName: "Bob Wilson",
    clientEmail: "bob@example.com",
    clientPhone: "555-555-5555",
    date: new Date().toISOString().split("T")[0],
    time: "16:00",
    status: "upcoming",
  },
];
