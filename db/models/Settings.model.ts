import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const settingsSchema = new mongoose.Schema(
  {
    copyright: { type: String, required: true },
    useCircle: { type: Boolean, required: true },
    primaryColor: { type: String, required: false, default: "#fefefe" },
    secondaryColor: { type: String, required: false, default: "#f7f7f7" },
    circleColor: { type: String, required: false, default: "#fff" },
  },
  { timestamps: true },
);

const SettingsModel =
  mongoose.models.settings || mongoose.model("settings", settingsSchema);

export default SettingsModel;
export type Settings = InferSchemaType<typeof settingsSchema>;
export type SettingsDocument = HydratedDocument<Settings>;
