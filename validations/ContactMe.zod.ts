import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const firstNameValidation = z
  .string()
  .min(3, { message: "First Name must be at least 3 char longs" })
  .max(20, { message: "First Name cannot exceed 20 characters" })
  .regex(/^[a-z0-9A-Z ]+$/, "First Name must not contain special characters");

export const lastNameValidation = z
  .string()
  .min(3, { message: "Last Name must be at least 3 char longs" })
  .max(20, { message: "Last Name cannot exceed 20 characters" })
  .regex(/^[a-z0-9A-Z ]+$/, "Last Name must not contain special characters");

export const subjectValidation = z
  .string()
  .min(3, { message: "Subject must be at least 3 char longs" })
  .max(50, { message: "Subject cannot exceed 50 characters" })
  .regex(/^[a-z0-9A-Z ]+$/, "Subject must not contain special characters");

export const descriptionValidation = z
  .string()
  .min(50, { message: "Description must be at least 50 char longs" })
  .max(500, { message: "Description cannot exceed 500 characters" });
export const emailValidation = z.email({ message: "Invalid Email Address" });

export const ContactMeSchema = z.object({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  subject: subjectValidation,
  description: descriptionValidation,
  email: emailValidation,
});

export type ContactMeSchemaType = z.infer<typeof ContactMeSchema>;
export type ContactMeFormType = UseFormReturn<ContactMeSchemaType>;
