import { z } from "zod";

export const clientFormSchema = z.object({
  name: z
    .string()
    .transform(val => val.trim())
    .pipe(z.string().min(1, "Name is required")),
  email: z
    .string()
    .transform(val => val.trim())
    .pipe(z.string().min(1, "Email is required").email("Invalid email address")),
  phone: z
    .string()
    .transform(val => val.trim())
    .pipe(
      z
        .string()
        .min(1, "Phone number is required")
        .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number")
    ),
});

export type ClientFormData = z.infer<typeof clientFormSchema>;
