import { ThumbnailType } from "@/validations/project.zod";
import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const thumbnailSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, enum: ThumbnailType },
    source: { type: String, required: true },
    fileOrUrl: { type: String, required: true },
  },
  { timestamps: true },
);

const ThumbnailModel =
  mongoose.models.thumbnail || mongoose.model("thumbnail", thumbnailSchema);

export default ThumbnailModel;
export type Thumbnail = InferSchemaType<typeof thumbnailSchema>;
export type ThumbnailDocument = HydratedDocument<Thumbnail>;
