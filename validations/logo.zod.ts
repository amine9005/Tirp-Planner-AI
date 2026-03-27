import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const fullNameValidation = z
  .string()
  .min(3, { message: "Username must be at least 3 char longs" })
  .max(32, { message: "Username cannot exceed 32 characters" });

export const useImageValidation = z.boolean();

export const imagePathValidation = z
  .string({ message: "Invalid Image Path" })
  .optional();

export const rightColorValidation = z.string({ message: "Invalid Color" });

export const leftColorValidation = z.string({ message: "Invalid Color" });

export const logoSchema = z
  .object({
    fullName: fullNameValidation,
    useImage: useImageValidation,
    imagePath: imagePathValidation,
    leftColor: leftColorValidation,
    rightColor: rightColorValidation,
  })
  .superRefine(({ useImage, imagePath }, ctx) => {
    if (!imagePath && useImage) {
      ctx.addIssue({
        code: "custom",
        message: "Image Path Not Provided",
        path: ["imagePath"],
      });
    }
  });

export type LogoSchemaType = z.infer<typeof logoSchema>;

export type LogoFormType = UseFormReturn<LogoSchemaType>;
