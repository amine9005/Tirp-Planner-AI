import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
export const fullNameValidation = z
  .string()
  .min(3, { message: "Username must be at least 3 char longs" })
  .max(32, { message: "Username cannot exceed 32 characters" })
  .regex(/^[a-z0-9A-Z -]+$/, "Username must not contain special characters");

export const titleValidation = z
  .string()
  .min(3, { message: "Title must be at least 3 char longs" })
  .max(32, { message: "Title cannot exceed 32 characters" })
  .regex(/^[a-z0-9A-Z -]+$/, "Title must not contain special characters");

export const descriptionValidation = z
  .string()
  .min(30, { message: "Description must be at least 30 char longs" })
  .max(200, { message: "Title cannot exceed 200 characters" })
  .regex(/^[a-z0-9A-Z -.,@]+$/, "Title must not contain special characters");

export const rightColorValidation = z.string({ message: "Invalid Color" });

export const leftColorValidation = z.string({ message: "Invalid Color" });

export const heroTextSchema = z.object({
  fullName: fullNameValidation,
  title: titleValidation,
  description: descriptionValidation,
  leftColor: leftColorValidation,
  rightColor: rightColorValidation,
});

export type heroTextSchemaType = z.infer<typeof heroTextSchema>;

export type HeroTextFormType = UseFormReturn<heroTextSchemaType>;

export const displayTypes = ["Image", "Parallax", "Video", "3D Model"];
export const videoSource = [
  "Other",
  "YouTube",
  "Google Drive",
  "Upload",
  "Mux",
];

export const displayTypeValidation = z.enum(displayTypes);
export const videoSourceValidation = z.enum(videoSource);

export const imagePathValidation = z.string().optional();
export const videoUrlValidation = z.string().optional();
export const videoFileNameValidation = z.string().optional();
export const model3D_URLValidation = z.string().optional();

export const heroMediaSchema = z
  .object({
    displayType: displayTypeValidation,
    videoSource: videoSourceValidation,
    imageUrl: imagePathValidation,
    videoUrl: videoUrlValidation,
    videoFileName: videoFileNameValidation,
    model3D_Url: model3D_URLValidation,
  })
  .superRefine(
    ({ displayType, imageUrl, videoUrl, model3D_Url, videoFileName }, ctx) => {
      switch (displayType) {
        case "Image":
          if (!imageUrl) {
            ctx.addIssue({
              code: "custom",
              message: "Image Source Not Provided",
              path: ["imageUrl"],
            });
          }
          break;
        case "Parallax":
          if (!imageUrl) {
            ctx.addIssue({
              code: "custom",
              message: "Image Source Not Provided",
              path: ["imageUrl"],
            });
          }
          break;
        case "Video":
          if (!videoUrl && !videoFileName) {
            ctx.addIssue({
              code: "custom",
              message: "Video Source Not Provided",
              path: ["videoUrl"],
            });
          }
          break;
        case "3D Model":
          if (!model3D_Url) {
            ctx.addIssue({
              code: "custom",
              message: "3D Model Source Not Provided",
              path: ["model3D_Url"],
            });
          }
          break;
      }
    },
  );

export type heroMediaSchemaType = z.infer<typeof heroMediaSchema>;
export type HeroMediaFormType = UseFormReturn<heroMediaSchemaType>;

export type DisplayTypes = z.infer<typeof displayTypes>;
export type VideoSource = z.infer<typeof videoSource>;
