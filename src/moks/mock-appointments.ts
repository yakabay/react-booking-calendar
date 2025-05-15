import { Appointment } from "../shared/types";

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    clientName: "John Doe",
    clientEmail: "john@example.com",
    clientPhone: "123-456-7890",
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
  },
  {
    id: "2",
    clientName: "Jane Smith",
    clientEmail: "jane@example.com",
    clientPhone: "098-765-4321",
    date: new Date().toISOString().split("T")[0],
    time: "14:00",
  },
  {
    id: "3",
    clientName: "Bob Wilson",
    clientEmail: "bob@example.com",
    clientPhone: "555-555-5555",
    date: new Date().toISOString().split("T")[0],
    time: "16:00",
  },
  {
    id: "4",
    clientName: "Alice Brown",
    clientEmail: "alice@example.com",
    clientPhone: "111-222-3333",
    date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
    time: "11:00",
  },
  {
    id: "5",
    clientName: "Charlie Davis",
    clientEmail: "charlie@example.com",
    clientPhone: "444-555-6666",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    time: "15:00",
  },
];
