import {
  generateTimeSlots,
  getCurrentDate,
  getAppointmentTime,
  getPastAppointments,
  getUpcomingAppointments,
  sortAppointments,
} from "../utils";
import { Appointment } from "../types";

describe("Utils", () => {
  describe("generateTimeSlots", () => {
    it("should generate time slots from 9 to 17", () => {
      const slots = generateTimeSlots("2024-03-20", []);
      expect(slots).toHaveLength(9);
      expect(slots[0].time).toBe("9:00");
      expect(slots[8].time).toBe("17:00");
    });

    it("should mark booked slots as unavailable", () => {
      const appointments: Appointment[] = [
        {
          id: "1",
          clientName: "Test",
          clientEmail: "test@test.com",
          clientPhone: "1234567890",
          date: "2024-03-20",
          time: "10:00",
        },
      ];
      const slots = generateTimeSlots("2024-03-20", appointments);
      const bookedSlot = slots.find(slot => slot.time === "10:00");
      expect(bookedSlot?.isAvailable).toBe(false);
    });

    it("should mark past slots as unavailable", () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      const slots = generateTimeSlots(pastDate.toISOString().split("T")[0], []);
      expect(slots.every(slot => !slot.isAvailable)).toBe(true);
    });
  });

  describe("getCurrentDate", () => {
    it("should return current date in YYYY-MM-DD format", () => {
      const currentDate = getCurrentDate();
      expect(currentDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  describe("getAppointmentTime", () => {
    it("should create correct Date object from date and time", () => {
      const date = "2024-03-20";
      const time = "14:00";
      const result = getAppointmentTime(date, time);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // March is 2 (0-based)
      expect(result.getDate()).toBe(20);
      expect(result.getHours()).toBe(14);
      expect(result.getMinutes()).toBe(0);
    });
  });

  describe("sortAppointments", () => {
    it("should sort appointments chronologically", () => {
      const appointments: Appointment[] = [
        {
          id: "2",
          clientName: "Later",
          clientEmail: "later@test.com",
          clientPhone: "1234567890",
          date: "2024-03-22",
          time: "14:00",
        },
        {
          id: "1",
          clientName: "Earlier",
          clientEmail: "earlier@test.com",
          clientPhone: "0987654321",
          date: "2024-03-22",
          time: "10:00",
        },
      ];

      const sorted = sortAppointments(appointments);
      expect(sorted[0].time).toBe("10:00");
      expect(sorted[1].time).toBe("14:00");
    });
  });

  describe("getPastAppointments", () => {
    it("should filter out future appointments and sort chronologically", () => {
      const now = new Date();
      const pastDate = new Date(now);
      pastDate.setDate(now.getDate() - 1);
      const futureDate = new Date(now);
      futureDate.setDate(now.getDate() + 1);

      const appointments: Appointment[] = [
        {
          id: "2",
          clientName: "Later Past",
          clientEmail: "later@test.com",
          clientPhone: "1234567890",
          date: pastDate.toISOString().split("T")[0],
          time: "14:00",
        },
        {
          id: "1",
          clientName: "Earlier Past",
          clientEmail: "earlier@test.com",
          clientPhone: "0987654321",
          date: pastDate.toISOString().split("T")[0],
          time: "10:00",
        },
        {
          id: "3",
          clientName: "Future",
          clientEmail: "future@test.com",
          clientPhone: "5555555555",
          date: futureDate.toISOString().split("T")[0],
          time: "10:00",
        },
      ];

      const past = getPastAppointments(appointments);
      expect(past).toHaveLength(2);
      expect(past[0].time).toBe("10:00");
      expect(past[1].time).toBe("14:00");
    });
  });

  describe("getUpcomingAppointments", () => {
    it("should filter out past appointments and sort chronologically", () => {
      const now = new Date();
      const pastDate = new Date(now);
      pastDate.setDate(now.getDate() - 1);
      const futureDate = new Date(now);
      futureDate.setDate(now.getDate() + 1);

      const appointments: Appointment[] = [
        {
          id: "2",
          clientName: "Later Future",
          clientEmail: "later@test.com",
          clientPhone: "1234567890",
          date: futureDate.toISOString().split("T")[0],
          time: "14:00",
        },
        {
          id: "1",
          clientName: "Earlier Future",
          clientEmail: "earlier@test.com",
          clientPhone: "0987654321",
          date: futureDate.toISOString().split("T")[0],
          time: "10:00",
        },
        {
          id: "3",
          clientName: "Past",
          clientEmail: "past@test.com",
          clientPhone: "5555555555",
          date: pastDate.toISOString().split("T")[0],
          time: "10:00",
        },
      ];

      const upcoming = getUpcomingAppointments(appointments);
      expect(upcoming).toHaveLength(2);
      expect(upcoming[0].time).toBe("10:00");
      expect(upcoming[1].time).toBe("14:00");
    });
  });
});
