import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const tripPlanSchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    duration: { type: String, required: true },
    origin: { type: String, required: true },
    budget: { type: Number, required: true },
    Travel_interests: { type: String, required: true },
    Special_requirements: { type: String, required: true },
    group_size: { type: String, required: true },
  },
  { timestamps: true },
);

const TripPlanModel =
  mongoose.models.tripPlan || mongoose.model("tripPlan", tripPlanSchema);

export default TripPlanModel;
export type TripPlan = InferSchemaType<typeof tripPlanSchema>;
export type TripPlanDocument = HydratedDocument<TripPlan>;
