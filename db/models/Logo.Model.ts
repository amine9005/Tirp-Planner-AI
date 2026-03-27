import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const logoSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: false },
    useImage: { type: Boolean, required: true },
    fullName: { type: String, required: true },
    leftColor: { type: String, required: false, default: "#ffffff" },
    rightColor: { type: String, required: false, default: "#ffffff" },
  },
  { timestamps: true },
);

const LogoModel = mongoose.models.logo || mongoose.model("logo", logoSchema);

export default LogoModel;
export type Logo = InferSchemaType<typeof logoSchema>;
export type LogoDocument = HydratedDocument<Logo>;
