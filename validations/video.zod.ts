import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { videoSource } from "@/validations/hero.zod";

export const videoSchema = z
  .object({
    videoSource: z.enum(videoSource),
    videoUrl: z.string().min(1, { message: "Video Is Required" }).optional(),
    videoFileName: z
      .string()
      .min(1, { message: "Video Is Required" })
      .optional(),
  })
  .superRefine(({ videoSource, videoUrl, videoFileName }, ctx) => {
    if (videoSource === "Upload" && !videoFileName) {
      ctx.addIssue({
        code: "custom",
        message: "Video File Not Provided ",
        path: ["videoFileName"],
      });
    } else if (videoSource !== "Upload" && !videoUrl) {
      ctx.addIssue({
        code: "custom",
        message: "Video Url Not Provided ",
        path: ["videoUrl"],
      });
    }
  });

export type VideoSchemaType = z.infer<typeof videoSchema>;

export type VideoFormType = UseFormReturn<VideoSchemaType>;
