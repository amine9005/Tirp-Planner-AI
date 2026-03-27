import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const copyrightValidation = z
  .string()
  .min(3, { message: "Username must be at least 3 char longs" })
  .max(32, { message: "Username cannot exceed 32 characters" });

export const primaryColorValidation = z.string({ message: "Invalid Color" });
export const secondaryColorValidation = z.string({ message: "Invalid Color" });
export const circleColorColorValidation = z.string({
  message: "Invalid Color",
});
export const useCircleValidation = z.boolean();

export const settingsSchema = z
  .object({
    copyright: copyrightValidation,
    primaryColor: primaryColorValidation,
    secondaryColor: secondaryColorValidation,
    circleColor: circleColorColorValidation,
    useCircle: useCircleValidation,
  })
  .superRefine(({ useCircle, circleColor }, ctx) => {
    if (!circleColor && useCircle) {
      ctx.addIssue({
        code: "custom",
        message: "Please select a color",
        path: ["circleColor"],
      });
    }
  });

export type SettingsSchemaType = z.infer<typeof settingsSchema>;

export type SettingsFormType = UseFormReturn<SettingsSchemaType>;
