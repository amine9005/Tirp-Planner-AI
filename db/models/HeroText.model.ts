import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const heroTextSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    leftColor: { type: String, required: false, default: "#fff" },
    rightColor: { type: String, required: false, default: "#fff" },
  },
  { timestamps: true },
);

const HeroTextModel =
  mongoose.models.heroText || mongoose.model("hero_text", heroTextSchema);

export default HeroTextModel;
export type HeroText = InferSchemaType<typeof heroTextSchema>;
export type HeroTextDocument = HydratedDocument<HeroText>;
