import { displayTypes, videoSource } from "@/validations/hero.zod";
import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const heroMediaSchema = new mongoose.Schema(
  {
    displayType: { type: String, enum: displayTypes, required: true },
    videoSource: { type: String, enum: videoSource, required: true },
    imageUrl: { type: String, required: false },
    videoUrl: { type: String, required: false },
    videoFileName: { type: String, required: false },
    model3D_Url: { type: String, required: false },
  },
  { timestamps: true },
);

const HeroMediaModel =
  mongoose.models.heroMedia || mongoose.model("hero_media", heroMediaSchema);

export default HeroMediaModel;
export type HeroMedia = InferSchemaType<typeof heroMediaSchema>;
export type HeroMediaDocument = HydratedDocument<HeroMedia>;
